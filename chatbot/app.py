from flask import Flask, render_template, request, jsonify
from chat import get_res

app = Flask(__name__)

@app.get("/")
def get_index():
    return render_template("base.html")

@app.post("/predict")
def pred():
    text = request.get_json().get("message")
    #validate text 
    res = get_res(text)
    message = {"answer": res}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)
