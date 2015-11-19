from flask import render_template
from jinja2.exceptions import TemplateNotFound
from app import app

@app.route("/")
def index():
   return render_template("home.html", title="Hello")

@app.route("/partials/<partialname>")
def getpartial(partialname):
   try:
      return render_template("partials/" + partialname)
   except TemplateNotFound:
      return "", 404
