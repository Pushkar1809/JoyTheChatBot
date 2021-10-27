# Library Imports
import nltk
import numpy as np
from nltk.stem.porter import PorterStemmer

# Initialising Stemmer
stemmer = PorterStemmer()

# Preprocessing Functions
def tokenize(sentence):
    '''Tokenises the sentence and return a list of tokens from the sentence.'''
    return nltk.word_tokenize(sentence)

def stem(word):
    '''Stems the words to its root form. This root form may not always make sense.'''
    return stemmer.stem(word.lower())

def bag_of_words(tokens, words):
    '''Vectorises the list of tokens provided usinf the method of bag of words which stores the count of the word which is assigned as the coeffiecient of the vector.'''
    tokens = [stem(t) for t in tokens]
    bag = np.zeros(len(words), dtype=np.float32)
    for i, word in enumerate(words):
        if word in tokens:
            bag[i] = 1.0

    return bag

# Tests

# test = "This Organiser will orgainse the event for the biigest Organisation in the nation."
# print(test)
# test = tokenize(test)
# print(test)
# test = [stem(t) for t in test]
# test = list(set(test))
# print(test)
