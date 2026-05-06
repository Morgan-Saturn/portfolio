from random import randint

"""version 1"""

# computer_number = randint(1, 10) #nombre aléatoire entre 1 et 10
# guess = 0

# guess = input("Devine à quel chiffre entre 1 et 10 je pense.")
# while guess != computer_number:
#     guess = int(input("Essaie encore !"))
# print(f"Trouvé ! C'est bien {computer_number} qu'il fallait deviner.Bravo.")

"""version 2"""

new_game = ""
while new_game != "non":
    guess_count = 1
    computer_number = randint(1, 10)
    guess = int(input("Trouve entre 0 et 10 "))
    while guess != computer_number:
        guess_count = guess_count + 1
        if computer_number < guess:
            guess = int(input("Essaie encore, c'est plus petit ! "))
        elif computer_number > guess:
            guess = int(input("Essaie encore, c'est plus grand ! "))
        
    print(f"Trouvé ! C'est bien {computer_number} qu'il fallait deviner.Il vous aura fallu {guess_count} essai(s)")  
    new_game = input("Souhaitez-vous rejouer ? Taper oui ou non.")
print("Bonne journée.")    