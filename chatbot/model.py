import torch
import torch.nn as nn

class ChatbotNN(nn.Module):
    
    def __init__(self, input_count, hidden_count, class_count):
        super(ChatbotNN, self).__init__()
        self.l1 = nn.Linear(input_count, hidden_count)
        self.l2 = nn.Linear(hidden_count, hidden_count)
        self.l3 = nn.Linear(hidden_count, hidden_count)
        self.l4 = nn.Linear(hidden_count, class_count)
        self.relu = nn.ReLU()

    def forward(self, x):
        out = self.l1(x)
        out = self.relu(out)
        out = self.l2(out)
        out = self.relu(out)
        out = self.l3(out)
        out = self.relu(out)
        out = self.l4(out)

        return out
