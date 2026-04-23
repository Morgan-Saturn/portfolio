# Liste de courses Project

Initialement, chargement de la page qui ne comporte aucun élément (sauf ceux antérieurement sauvegardés le cas échéant), à l'exception de l'icône + et de l'input text placeholder "nouvel item". 
+ est un bouton de validation de l'item renseigné dans l'input. 
A l'évènement clic sur ce +, création d'une nouvelle div de classe rest ayant pour label l'élément renseigné accompagné de for=n, d'un input type checkbox d'id n, d'un input type number, et de l'icône poubelle permettant de clear cette nouvelle div uniquement.
Pour chaque nouvelle div créée, l'id de la checkbox prend la valeur n+1 et le label for n+1 correspondant.
Dans le même évènement, enregistrement la liste en local de telle manière que si on charge ou ferme la page, en la rouvrant, la liste n'apparaît pas vierge, mais comporte bien les éléments rentrés tantôt jusqu'à ce qu'on les supprime.




Je pourrais ajouter un bouton "tout supprimer", d'ailleurs...

A l'évènement clic sur la checkbox, l'input prend la valeur checked et le reste en toute circonstance sauf si on le décoche manuellement. (je me demandais si ça avait un intérêt de la garder vu qu'on peut juste supprimer l'élément de la liste mais je pense que ça peut avoir un intérêt de garder ça sous les yeux en cas de besoin de modifier ou de revoir ce qu'on avait dans la liste avant de tout supprimer)

## TODO

- addeventlistener click sur le + 
    - crée une nouvelle div avec le label, checkbox, number, poubelles