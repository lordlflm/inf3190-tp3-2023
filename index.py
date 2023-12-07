# Copyright 2023 <Thomas Laflamme LAFT68050205>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from random import randint
from flask import Flask
from flask import render_template
from flask import g
from .database import Database

app = Flask(__name__, static_url_path="", static_folder="static")


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        g._database = Database()
    return g._database


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.disconnect()


@app.route("/")
def home():
    db = get_db()
    animallist = db.get_animaux()
    animaltodisplaylist = list()
    i = 0
    while i < 5:
        if len(animallist) == 0:
            break
        animalindex = randint(0, len(animallist) - 1)
        animalid = animallist[animalindex].get("id")
        animallist.pop(animalindex)
        animaltodisplaylist.append(db.get_animal(animalid))
        i += 1
    close_connection("exception")
    return render_template("home.html", title="Acceuil", animals=animaltodisplaylist)

@app.route("/<animalid>")
def animal(animalid):
    db = get_db()
    animal = db.get_animal(animalid)
    close_connection("exception")
    return render_template("animal.html", title=animal.get("nom"), animal=animal)

@app.route("/form")
def form():
    return render_template("form.html", title="Mise en adoption")

@app.route("/adopt")
def adopt():
    return render_template("adopt.html", title="Adoption")
