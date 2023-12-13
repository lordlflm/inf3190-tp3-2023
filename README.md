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
- Lorsque l'utilisateur ajoute manuellement un identifiant d'animal qui n'existe pas, le serveur retourne un statut 500 alors que je voudrais qu'il retourne un statut 404. Je ne suis pas parvenu à régler ce problème.
- Le chat Julianne a été ajouté 5 fois à la base de donnée lors des tests initiaux (ce ne sont pas les mêmes chats car ils ont des identifiants différents)