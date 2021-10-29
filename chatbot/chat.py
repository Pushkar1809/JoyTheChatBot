# Library imports
import random
import json
import torch

from nltk_utils import tokenize, bag_of_words
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


def get_res(msg):
    sentence = tokenize(msg)
    X = bag_of_words(sentence, words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X)

    output = model(X)
    _, pred = torch.max(output, dim=1)
    tag = tags[pred.item()]

    for intent in intents["intents"]:
        if tag == intent["intent"]:
            return {"message": random.choice(intent['responses']), "intent": intent["intent"]}
        
    return random.choice(["Pardon me!", "Could you reapeat", "I don't understand, please come again."])


def main():
    while True:
        sentence = input("You: ")
        if sentence=="quit":
            break

        print(f"{bot_name}: {get_res(sentence)}")

if __name__=="__main__":
    main()
