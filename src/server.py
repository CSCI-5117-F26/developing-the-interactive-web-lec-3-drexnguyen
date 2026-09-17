from flask import Flask, render_template, request

names = []
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/catch", methods=["POST"])
def catch():
    global names 
    if request.form.get("name"):
        names.append(request.form.get("name"))
    return render_template("index.html", names=names)