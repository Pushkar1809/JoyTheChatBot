# Library imports
import random
import json
import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader 

from nltk_utils import tokenize, stem, bag_of_words
from model import ChatbotNN

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Aquiring Data for prediction
with open('intents.json', 'r') as f:
    intents = json.load(f)


FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
model_state = data["model_state"]
tags = data["tags"]
words = data["words"]


model = ChatbotNN(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Joy"
print("I'm here to fill you up with JOY, type 'quit' to exit")

while True:
    sentence = input("You: ")
    if sentence=="quit":
        break

    sentence = tokenize(sentence)
    X = bag_of_words(sentence, words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X)

    output = model(X)
    _, pred = torch.max(output, dim=1)
    tag = tags[pred.item()]

    probs = torch.softmax(output, dim=1)
    prob = probs[0][pred.item()]

    for intent in intents["intents"]:
        if tag == intent["tag"]:
            print(f"{bot_name}: {random.choice(intent['responses'])}")

    # else:
    #     print(f"{bot_name}: I don't understand. Could you repeat?")
