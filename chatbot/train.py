# Library imports
import json
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader 

from nltk_utils import tokenize, stem, bag_of_words
from model import ChatbotNN

# Aquiring Data for training
with open('intents.json', 'r') as f:
    intents = json.load(f)

words = []
tags = []
xy = []

for intent in intents["intents"]:
    tag = intent["intent"]
    tags.append(tag)
    for pattern in intent["text"]:
        w = tokenize(pattern)
        words.extend(w)
        xy.append((w, tag))

# print("all-words >", words, end="\n\n")
# print("tags >", tags, end="\n\n")
# print("xy >", xy, end="\n\n")

symbols = "?!@#$%^&*(){\}[]/.,:;-_+=~`|<>\'\n"
words = [word for word in words if word not in symbols]
words = sorted(set(words))
tags = sorted(set(tags))

X_train = []
y_train = []
for (pattern_sentence, tag) in xy:
    bag = bag_of_words(pattern_sentence, words)
    X_train.append(bag)
    label = tags.index(tag)
    y_train.append(label)

X_train = np.array(X_train)
y_train = np.array(y_train)

class ChatDataset(Dataset):
    def __init__(self):
        self.sample_count = len(X_train)
        self.x_data = X_train
        self.y_data = y_train

    # data[idx]
    def __getitem__(self, index):
        return self.x_data[index], self.y_data[index]

    def __len__(self):
        return self.sample_count

# Hyperparameters
batch_size = 8
input_size = len(X_train[0])
hidden_size = 8
output_size = len(tags)
learning_rate = 0.001
epoch_count = 2000

# print(input_size, len(words))
# print(output_size, tags)

dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = ChatbotNN(input_size, hidden_size, output_size).to(device)

# loss and optimizer
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), learning_rate)

# Epochs loop
for epoch in range(epoch_count):
    for(all_words, labels) in train_loader:
        all_words = all_words.to(device)
        labels = labels.to(device)

        # feed-forward 
        outputs = model(all_words)
        loss = criterion(outputs, labels)

        # back-propogation and optimizer
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

    if (epoch+1) % 100 == 0:
        print(f"epoch {epoch+1}/{epoch_count}, loss={loss.item():.4f}")

print(f"final loss={loss.item():.5f}")

data = {
    "model_state": model.state_dict(),
    "input_size": input_size,
    "hidden_size": hidden_size,
    "output_size": output_size,
    "words": words,
    "tags": tags
}

FILE = "data.pth"
torch.save(data, FILE)

print(f"training competed successfully and model save to {FILE}.")