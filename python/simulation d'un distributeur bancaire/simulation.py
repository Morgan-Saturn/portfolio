#création de la fonction procédurale demandant d'entrer le code de l'utilisateur


def authenticate():
    pin_code = "1234"
    pin_try = 0
    while pin_try < 3:
        user_selection = (input("Entrez votre code PIN : "))
        if user_selection == pin_code:
            print("Code bon. Authentification réussie.")
            return True
        else:
            pin_try += 1
            user_selection = (input(f"Code PIN incorrect. Veuillez réessayer. Tentative {pin_try}/3"))
    print ("Carte bloquée. Veuillez contacter votre banque.")
    return False     


#création du menu principal
def print_menu():
    
    print("===MENU PRINCIPAL===\n1. Consulter le solde\n2. Déposer de l'argent\n3. Retirer de l'argent\n4. Quitter")


#création de la fonction permettant de consulter le solde actuel
#on précise le type attendu dans le paramètre
def check_balance(balance : float):
    """retourne le solde actuel sous forme de phrase"""
    return print(f"Votre solde est de {balance} € ")


def send_money(balance : float, deposit : float) -> float:
    """vérifie que la somme qu'on veut déposer est positive"""
    if deposit >= 0:
        balance += deposit
        return balance

#send_money(1000, 200)

def withdraw_money(balance : float, withdrawal : float) -> float:
    """vérifie que le retrait demandé ne dépasse pas la somme sur le compte"""
    if withdrawal >= 0 and withdrawal <= balance:
        balance = balance - withdrawal
        return balance
    
#withdraw_money(1000, 200)

#algorithme principal
print("Bienvenue sur notre distributeur automatique de billets.")
balance = 1000.00
authenticate()
print_menu()

user_option = 0

while user_option != 4:
    user_option = int(input("Choisissez une opération à réaliser (1-4) : "))
    print_menu()
    if user_option == 1:
        print(check_balance(balance))
    elif user_option == 2:
        deposit = float(input("Montant que vous souhaitez déposer : "))
        print(send_money(balance, deposit))
    elif user_option == 3:
        withdrawal = float(input("Montant à retirer : "))
        print(withdraw_money(balance, withdrawal))
    else:
        user_option = float(input("Choix invalide. Veuillez réessayer : "))
print("Merci d'avoir utilisé nos services. A bientôt.")
