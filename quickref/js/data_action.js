data_action = [
    {
        title: "Attaquer",
        icon: "crossed-swords",
        subtitle: "Attaque de mêlée ou à distance",
        description: "Vous faites une attaque de mêlée ou à distance avec votre arme",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
			"Certaines aptitudes, comme l'<i>attaque supplémentaire</i> du guerrier, permettent à votre personnage de porter plus d'une attaque en effectuant cette action. Chacune de ces attaques est un jet séparé et peut cibler différentes créatures. Vous pouvez vous déplacer entre ces attaques.",
            "Lorsque vous attaquez avec une arme de mêlée légère, vous pouvez utiliser une action bonus pour attaquer avec votre autre main (voir l'action bonus <i>Attaque secondaire</i>).",
            "Vous pouvez remplacer l'une de vos attaques de mêlée par <i>Agripper</i> ou <i>Bousculer</i>.",
            "Certaines conditions donnent un avantage à l'attaque : attaques contre des cibles aveuglées, paralysées, pétrifiées, entravées, étourdies ou inconscientes ; attaques de mêlée contre des cibles couchées ; attaques par des attaquants invisibles ou cachés.",
            "Certaines conditions donnent un désavantage à l'attaque : attaques contre des cibles invisibles ou cachées ; attaques à distance contre des cibles couchées ; attaques par des attaquants aveuglés, effrayés, empoisonnés ou retenus."
        ]
    },
    {
        title: "Agripper",
        icon: "grab",
        subtitle: "Attaque de mêlée spéciale",
        description: "Quand vous tentez d'empoigner une créature ou de lutter avec elle",
        reference: "PHB, pg. 195.",
        bullets: [
			"Vous devez utiliser l'action <i>attaquer</i> pour porter une attaque de corps à corps spéciale pour agripper. Si vous pouvez porter plusieurs attaques avec l'action attaquer, cette attaque spéciale remplace l'une d'elles.",
            "La cible de votre empoignade ne doit pas faire plus d'une catégorie de taille de plus que vous et elle doit se trouver dans votre zone d'allonge.",
            "Vous devez avoir au moins une main de libre pour tenter d'empoigner la cible. Pour cela, vous faites un test de Force (Athlétisme) opposé à un test de Force (Athlétisme) ou de Dextérité (Acrobaties) de la cible (celle-ci choisit la caractéristique qu'elle préfère utiliser).",
            "Si vous réussissez, votre cible se retrouve empoignée (sa vitesse est réduite à 0)."
        ]
    },
    {
        title: "Bousculer",
        icon: "hand",
        subtitle: "Attaque de mêlée spéciale",
        description: "Vous bousculez une créature, soit pour la faire tomber à terre, soit pour la repousser loin de vous.",
        reference: "PHB, pg. 195.",
        bullets: [
            "Vous devez utiliser l'action <i>attaquer</i> pour porter une attaque de corps à corps pour bousculer. Si vous pouvez porter plusieurs attaques avec l'action attaquer, cette attaque spéciale remplace l'une d'elles.",
            "La cible ne doit pas faire plus d'une catégorie de taille de plus que vous et elle doit se trouver dans votre zone d'allonge.",
            "Vous faites un test de Force (Athlétisme) opposé au test de Force (Athlétisme) ou de Dextérité (Acrobaties) de la cible (celle-ci choisit la caractéristique qu'elle préfère utiliser).",
            "Si vous remportez l'opposition, vous pouvez faire tomber votre cible à terre ou la repousser à 1,50 mètre de vous."
        ]
    },
    {
        title: "Lancer un sort",
        icon: "magic-swirl",
        subtitle: "Temps d'incantation de 1 action",
        description: "Lancer un sort avec un temps d'incantation de 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas lancer un sort avec votre action et un sort différent avec votre action bonus dans le même tour, sauf si l'action est utilisée pour lancer un sort à volonté.",
            "La cible d'un sort doit être à portée du sort. Pour cibler quelque chose, vous devez avoir un chemin clair vers celui-ci, de sorte qu'il ne peut pas être à couvert total.",
            "Les sorts avec des composants matériels ne consomment pas le matériel, sauf indication contraire. À moins que le coût d'un matériau ne soit donné, vous pouvez supposer que le coût est négligeable et que le matériau est simplement disponible dans une pochette de composants.",
            "Certains sorts nécessitent que vous mainteniez votre concentration afin de garder leur magie active. Si vous perdez votre concentration, un tel sort prend fin. Vous perdez la concentration sur un sort si vous lancez un autre sort qui requiert de la concentration ou si vous êtes incapable d'agir. Chaque fois que vous subissez des dégâts, vous devez effectuer un jet de sauvegarde de Constitution pour maintenir votre concentration. Le DD est égal à 10 ou à la moitié des dégâts que vous subissez, selon le nombre le plus élevé."
        ]
    },
    {
        title: "Se précipiter",
        icon: "sprint",
        subtitle: "Doubler votre vitesse",
        description: "Gagnez du mouvement supplémentaire pour le tour en cours",
        reference: "PHB, pg. 192.",
        bullets: [
            "L'augmentation est égale à votre vitesse, après application des modificateurs."
        ]
    },
    {
        title: "Se désengager",
        icon: "journey",
        subtitle: "Ignorer les attaques d'opportunité",
        description: "Vous pouvez vous déplacer sans provoquer d'attaques d'opportunité jusqu'à la fin du tour",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquiver",
        icon: "dodging",
        subtitle: "Augmenter ses défenses",
        description: "Concentrez-vous entièrement sur l'esquive des attaques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Jusqu'au début de votre prochain tour, tout jet d'attaque effectué contre vous a un désavantage si vous pouvez voir l'attaquant, et vous faites des jets de sauvegarde de Dextérité avec un avantage.",
            "Vous perdez cet avantage si vous êtes <i>incapacité</i> ou si votre vitesse tombe à 0."
        ]
    },
    {
        title: "Se libérer",
        icon: "manacles",
        subtitle: "Se libérer d'un agrippement",
        description: "Se libérer d'un agrippement",
        reference: "PHB, pg. 195.",
        bullets: [
            "Pour vous libérez d'un agrippement, vous devez réussir un jet de Force (Athlétisme) ou Dextérié (Acrobaties) opposé au à un test de Force (Athlétisme) de la créature qui vous agrippe.",
            "Se libérer de certaines conditions qui vous retiennent (comme des menottes) peut demander un test différent, spécifié par la condition."
        ]
    },
    {
        title: "Aider",
        icon: "telepathy",
        subtitle: "Donner avantage à un allié",
        description: "Confère un avantage à un allié lors d'un test de capacité ou d'une attaque",
        reference: "PHB, pg. 192.",
        bullets: [
            "La cible obtient un avantage lors du prochain test de caractéristique qu'elle effectue pour accomplir la tâche que vous aidez.",
            "Alternativement, la cible obtient un avantage lors du prochain jet d'attaque contre une créature à 1,50 mètre ou moins de vous.",
            "L'avantage dure jusqu'au début de votre prochain tour."
        ]
    },
    {
        title: "Utiliser un objet",
        icon: "snatch",
        subtitle: "Intéragir, utiliser un pouvoir spécial",
        description: "Interagir avec un deuxième objet ou utiliser les pouvoirs d'un objet",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous pouvez interagir avec un objet gratuitement pendant votre tour (comme dégainer une arme ou ouvrir une porte). Si vous souhaitez interagir avec un deuxième objet, utilisez cette action.",
            "Lorsqu'un objet nécessite votre action pour son utilisation, vous effectuez également cette action."
        ]
    },
    {
        title: "Utiliser un bouclier",
        icon: "round-shield",
        subtitle: "Équiper ou déséquiper un bouclier",
        description: "Équiper ou enlever un bouclier ou une armure",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Un bouclier nécéssite toujours une action pour s'équiper ou se déséquiper.",
            "L'armure prend plusieurs minutes pour s'équiper ou se déséquiper."
        ]
    },
    {
        title: "Se cacher",
        icon: "hood",
        subtitle: "",
        description: "Tenter de se cacher",
        reference: "PHB, pg. 192.",
        bullets: [
            "Vous ne pouvez pas vous cacher d'une créature qui vous voit. Vous devez bénéficier d'un abri total, être des une zone heavily obscured, être invisible ou bien bloquer la vision de l'ennemi.",
            "Si vous faites du bruit, vous dévoilez votre position.",
            "Quand vous effectuez l'action se cacher, vous faites un test de Dextérité (Discrétion) et notez le résultat. Jusqu'à ce que vous soyez découvert ou que vous arrêtiez de vous cacher, le total du test est opposé au test de Sagesse (Perception) de toutes les créatures qui essayent activement de vous trouver.",
            "Une créature vous trouve même si elle ne vous cherche pas sauf si votre jet de discrétion est plus élevé que sa perception passive.",
            "Hors combat, vous pouvez également faire un test de Dextérité (Discrétion) pour des actions telles que vous cacher des ennemis, passer des gardes, vous éclipser sans vous faire remarquer ou vous faufiler sur quelqu'un sans être vu ni entendu."
        ]
    },
    {
        title: "Chercher",
        icon: "magnifying-glass",
        subtitle: "Trouver quelque chose",
        description: "Consacrez votre attention à trouver quelque chose",
        reference: "PHB, pg. 193.",
        bullets: [
            "Selon la nature de votre recherche, le MJ peut vous demander de faire un jet de Sagesse (Perception) ou un jet d'Intelligence (Investigation)."
        ]
    },
    {
        title: "Se tenir prêt",
        icon: "stopwatch",
        subtitle: "Choisissez le déclencheur et l'action",
        description: "Choisissez un déclencheur et une réaction en réponse",
        reference: "PHB, pg. 193.",
        bullets: [
            "Vous devez d'abord choisir la situation qui va déclencher votre réaction.",
            "Puis l'action que vous allez effectuer en réponse à ce déclencheur. Au lieu d'une action, vous pouvez également décider de vous déplacer d'une distance inférieure ou égale à votre vitesse en réponse au déclencheur.",
            "Quand le déclencheur se produit, vous avez le choix entre utiliser votre réaction immédiatement après le déclencheur ou ignorer celui-ci.",
            "Quand vous préparez un sort dans le cadre de cette action, vous le lancez normalement mais vous contenez son énergie, que vous ne relâcherez grâce à votre réaction que lorsque le déclencheur se produira. Pour préparer un sort, celui-ci doit avoir un temps d'incantation d'une action et vous devez rester concentré pour contenir son énergie magique."
        ]
    },
    {
        title: "Utiliser une compétence de classe",
        icon: "embrassed-energy",
        subtitle: "Utiliser une compétence spéciale",
        description: "Utiliser une caractéristique raciale ou de classe qui utilise une action",
        reference: "Voir la page correspondante à votre classe pour plus d'informations.",
        bullets: [

        ]
    },
    {
        title: "Stabiliser une créature",
        icon: "first-aid",
        subtitle: "Administrer les premiers soins",
        description: "Tenter de la stabiliser une créature",
        reference: "PHB, pg. 197.",
        bullets: [
            "Faites un test de Sagesse (Médecine) DD 10.",
            "En cas de réussite, la créature est stable et n'a plus besoin d'effectuer de jets de sauvegarde contre la mort",
            "Une créature stable regagne 1 point de vie après 1d4 heures"
        ]
    },
    {
        title: "Improviser",
        icon: "juggler",
        subtitle: "Une action qui n'est pas dans cette liste",
        description: "Effectuez n'importe quelle actions que vous pouvez imaginer",
        reference: "PHB, pg. 193.",
        bullets: [
            "Lorsque vous décrivez une action qui n'est pas détaillée ailleurs dans les règles, le MJ vous indique si cette action est possible et quel type de jet vous devez faire, au besoin, pour déterminer le succès ou l'échec."
        ]
    }
]
