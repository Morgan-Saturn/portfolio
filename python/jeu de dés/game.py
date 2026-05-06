import random

new_game = ""
#règles du jeu
input("🎲 Bienvenue dans le jeu du dé 🎲 (pour passer appuyez toujours sur la touche 'entrée')")
input("Règles du jeu :\n - Un dès sera lancé 3 fois à la suite\n -Vous devez deviner le total des 3 \n- Vous jouez contre l'ordinateur !\nLe joueur le plus proche du résultat gagne la partie !")
input("A vous de commencer.")

while new_game != "non":
    #nombre choisis par la.e joueur.se, l'ordinateur et les dés
    player_number = int(input("Votre choix (entre 3 et 18) : "))
    computer_number = random.randint(3, 18)

    # je m'assure que l'ordinateur et le joueur choisissent un total strictement différent pour leur pari
    while computer_number == player_number:
        computer_number = random.randint(3, 18)

    input(f"L'ordinateur a choisi : {computer_number}")
    #initialisation des tirages
    input("Le dé sera lancé 3 fois ...")
    dice1 = random.randint(1, 6)
    dice2 = random.randint(1, 6)
    dice3 = random.randint(1, 6)

    #affichage des tirages
    input("Appuyez sur la touche 'entrée' pour lancer le dé 1 ...")
    input(f"Le dé 1 donne {dice1}.")
    input("Appuyez sur la touche 'entrée' pour lancer le dé 2 ...")
    input(f"Le dé 2 donne {dice2}.")
    input("Appuyez sur la touche 'entrée' pour lancer le dé 3 ...")
    input(f"Le dé 3 donne {dice3}.")

    #création de la variable calculant la somme totale des dés
    total = dice3 + dice1 + dice2
    input(f"Le score total est de {total}.")

    #comparaison du résultat avec les paris
    if total == player_number or (total < player_number and player_number < computer_number) or (total > player_number and player_number > computer_number):
        input("Bravo, vous avez gagné ! 🎉")
    elif (computer_number < total and total < player_number) or (player_number < total and total < computer_number):
        difference_computer = total - computer_number
        difference_player = total - player_number
        if abs(difference_computer) < abs(difference_player):
            input("Dommage, l'ordinateur a gagné ! 🤖")
        else:
            input("Bravo, vous avez gagné ! 🎉")
    else: 
        input("Dommage, l'ordinateur a gagné ! 🤖")

    new_game = input("Désirez-vous retenter votre chance ? (tapez oui ou non) : ")
print("Merci d'avoir joué, à bientôt ! 👋")    