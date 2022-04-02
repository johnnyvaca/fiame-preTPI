# FIAME
 Fiame est une application mobile qui permet de vendre et acheter principalement de la  nourriture (mais pas que) au sein d’une petite communauté.



pour le backend:
suivez les etapes de ce lien: https://github.com/XCarrel/fiameserver
pour lancer le serveur il est dit qu'il faut lancer la commande: php artisan serve. il faut rajouter à cette commande ceci: php artisan serve --host=[votre adresse IP] --port=8000


pour mettre en place l'environement de developpement: 
- il faut cloner le projet fiame dans votre environnement de travail.
- dans le fichier \fiame\code\src\api\UseFetchSales.js veuillez remplacer l'adresse ip de la const URL_BACKEND par la votre.
- suivez les étapes du site officiel de react-native: https://reactnative.dev/docs/environment-setup (je mets le liens car  votre environnement peut-être different par systeme d'exploitation de votre ordinateur et votre telephone de test.
Avant de taper la commande npx react-native run-(android/ios) il faut s'assurer d'avoir l'emulateur allumé.
 
