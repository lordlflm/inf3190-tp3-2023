# inf3190-tp3-20233

## Auteur
Nom : `Thomas Laflamme`  
Code permanent : `LAFT68050208`

## Installation
Préalablement, assurez-vous que la version 3.12 de Python est installer sur votre machine (sur Ubuntu, il faut installer un PPA pour ensuite installer le paquet python3.12)

- Mise en place de l'environnement virtuel Python
```bash
$ python3.12 -m venv .venv
$ . .venv/bin/activate
```
Il est possible de vérifier la version de Python de l'environnement avec :
```bash
$ python3 -V

Python 3.12.0
```
- Installation de Flask
```bash
$ pip3 install Flask
```

## Exécution
Pour exécuter le programme :
```bash
$ make
```
Se rendre sur `http://127.0.0.1:5000` pour visualiser le site.

## Notes au correcteur
- Le répertoire `.venv` est déjà dans le projet. Il est possible de procéder à l'installation en le laissant là ou en l'enlevant. À noter aussi que si vous avez une version différente de Python3, vous devrez probablement re-batir `.venv` en suivant les étapes ci-dessus, mais le comportement du programme devrait être le même.
- Le chat Julianne a été ajouté 5 fois à la base de donnée lors des tests initiaux (ce ne sont pas les mêmes chats car ils ont des identifiants différents) Bonne correction !