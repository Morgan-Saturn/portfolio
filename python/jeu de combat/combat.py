from random import randint

#règles
input("Bonjour et bienvenue. Vous vous apprêtez à jouer à un jeu de combat au tour par tour. Vos points de vie initiaux et votre force de frappe sont générés aléatoirement. La force de frappe de votre adversaire Gollum est également aléatoire. A perdu le premier de vous deux à ne plus avoir de points de vie, ou encore si vous mourez tous les deux... Au moment de lancer le prochain tour, vous aurez toujours le choix entre lancer ledit tour, ou vous soigner, une unique fois de toute la partie, à l'aide de vos pansements propres et colorés (vous êtes une personne prévoyante et ne sauriez vous aventurer dans la caverne de Gollum sans eux), qui vous rendent 3 points de vie pendant que Gollum vous attend poliment. Appuyez sur 'entrée' pour démarrer la partie.")

#création des caractéristiques du joueur
user_name = input("Donnez un prénom à votre personnage ! ")
user_max_life = randint(16, 22)

#caractéristiques de l'adversaire
gollum_max_life = 18

#soustraction des PV

user_life = user_max_life
gollum_life = gollum_max_life 

#pansement
pansement_number = 1

#combat

print(f"Vous débutez avec {user_max_life} PV et Gollum avec {gollum_max_life} PV.")

while gollum_life > 0 and user_life > 0:
    input('Appuyez sur la touche "entrée" pour lancer le tour ...')
    gollum_attack = randint(1, 7)
    user_attack = randint(2, 6)
    gollum_life = gollum_life - user_attack
    user_life = user_life - gollum_attack
    print(f"{user_name} inflige {user_attack} points de dégâts à Gollum (PV restants : {gollum_life})")
    print(f"Gollum inflige {gollum_attack} points de dégâts à {user_name} (PV restants : {user_life})")
    if pansement_number > 0:
        use_pansement = input("Utiliser vos pansements ? oui OU appuyer sur 'entrée' : ")
        if use_pansement == "oui":
            pansement_number = pansement_number - 1
            user_life = user_life + 3

if user_life <= 0:
    print("Votre héros est décédé dans le déshonneur suite à ce combat.")
elif gollum_life <=0:
    print("Votre héros à vaincu Gollum !")
