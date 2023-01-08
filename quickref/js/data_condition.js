data_condition = [
    {
        title: "À terre",
        icon: "crawl",
        subtitle: "Vous êtes à terre",
        description: "Vous êtes à terre",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre seule option de mouvement est de ramper, sauf si vous vous levez.",
            "Vous avez désavantage sur vos jets d'attaque.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 1,50 mètre ou moins de vous. Sinon, le jet d'attaque a désavantage",
        ]
    },
    {
        title: "Agrippé",
        icon: "grab",
        subtitle: "Vous êtes agrippé",
        description: "Vous êtes agrippé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Votre vitesse passe à 0 et elle ne peut bénéficier d'aucun bonus.",
            "L'état prend fin si la créature qui vous agrippe est incapable d'agir.",
            "L'état prend aussi fin si la vous êtes mis hors de portée de la créature qui vous agrippe."
        ]
    },
    {
        title: "Assourdi",
        icon: "hearing-disabled",
        subtitle: "Vous n'entendez pas",
        description: "Vous n'entendez pas",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ratez automatiquement tout jet de caractéristique qui nécessite l'ouïe."
        ]
    },
    {
        title: "Aveuglé",
        icon: "sight-disabled",
        subtitle: "Vous ne voyez pas",
        description: "Vous ne voyez pas",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ratez automatiquement tout jet de caractéristique qui nécessite la vue.",
            "Vous avez désavantage sur vos jets d'attaque.",
            "Les jets d'attaque contre vous ont avantage."
        ]
    },
    {
        title: "Charmé",
        icon: "smitten",
        subtitle: "Vous êtes charmé",
        description: "Vous êtes charmé par une autre créature",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous ne pouvez pas attaquer le charmeur ou le cibler avec des capacités ou des effets magiques nuisibles.",
            "Le charmeur a un avantage à ses jets de caractéristique pour interagir socialement avec vous."
        ]
    },
    {
        title: "Effrayé",
        icon: "sharp-smile",
        subtitle: "Vous êtes effrayé",
        description: "Vous êtes effrayé",
        reference: "PHB, pg. 290.",
        bullets: [
            "Vous avez désavantage aux jets de caractéristique et aux jets d'attaque tant que la source de votre peur est dans votre ligne de vue.",
            "Vous ne pouvez pas vous rapprocher volontairement de la source de votre peur."
        ]
    },
    {
        title: "Empoisonné",
        icon: "deathcab",
        subtitle: "Vous êtes empoisonné",
        description: "Vous êtes empoisonné",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous avez désavantage aux jets d'attaque et aux jets de caractéristique."
        ]
    },
    {
        title: "Entravé",
        icon: "imprisoned",
        subtitle: "Vous êtes entravé",
        description: "Vous êtes entravé",
        reference: "PHB, pg. 292.",
        bullets: [
            "Votre vitesse passe à 0 et elle ne peut bénéficier d'aucun bonus.",
            "Les jets d'attaque contre vous ont avantage.",
            "Vous avez désavantage sur vos jets d'attaque et vos jets de sauvegarde de Dextérité.",
        ]
    },
    {
        title: "Épuisement",
        icon: "tired-eye",
        subtitle: "Vous êtes épuisé",
        description: "L'épuisement se mesure en six niveaux",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Niveau</th><th></th><th></th><th style='text-align:left'>Effet</th></tr><tr><td>1</td><td></td><td></td><td>Désavantage aux jets de caractéristique</td></tr><tr><td>2</td><td></td><td></td><td>Vitesse diminuée de moitié</td></tr><tr><td>3</td><td></td><td></td><td>Désavantage aux jets d'attaque et de sauvegarde</td></tr><tr><td>4</td><td></td><td></td><td>Points de vie maximums diminué de moitié</td></tr><tr><td>5</td><td></td><td></td><td>Vitesse réduite à 0</td></tr><tr><td>6</td><td></td><td></td><td>Mort</td></tr></table>",
            "Vous subissez les effets de votre niveau d'épuisement plus ceux des niveaux inférieurs.",
            "Terminer un repos long réduit le niveau d'épuisement d'une créature de 1, à condition que la créature ait aussi mangé et bu.",
            "De même, être rappelé à la vie réduit le niveau d'épuisement d'une créature de 1."
        ]
    },
    {
        title: "Étourdi",
        icon: "knocked-out-stars",
        subtitle: "Vous êtes étourdi",
        description: "Vous êtes étourdi",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes neutralisé, ne pouvez pas bouger et parlez de manière hésitante.",
            "Les jets d'attaque contre vous ont avantage.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité."
        ]
    },
    {
        title: "Inconscient",
        icon: "coma",
        subtitle: "Vous êtes inconscient",
        description: "Vous êtes inconscient",
        reference: "PHB, pg. 292.",
        bullets: [
            "Vous êtes neutralisé, ne pouvez plus bouger ni parler, et n'êtes plus conscient de ce qui se passe autour de vous.",
            "Vous lâchez ce que vous tenez et tombez à terre.",
            "Les jets d'attaque contre vous ont avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 1,50 mètre ou moins de vous.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité."
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Vous êtes invisible",
        description: "Vous ne pouvez pas être vu sans l'aide de magie ou d'un sens spécial",
        reference: "PHB, pg. 291.",
        bullets: [
            "En ce qui concerne le fait de se cacher, la créature est considérée dans une zone à visibilité nulle.",
            "Votre emplacement peut être détecté par un bruit que vous faites ou par les traces que vous laissez.",
            "Vous avez avantage sur vos jets d'attaque.",
            "Les jets d'attaque contre vous ont désavantage."
        ]
    },
    {
        title: "Mourant",
        icon: "dead-head",
        subtitle: "Vous êtes mourant",
        description: "Vous avez 0 point de vie et êtes mourant",
        reference: "PHB, pg. 197.",
        bullets: [
            "Si vous êtes réduit à 0 points de vie par des dégâts qui ne vous tuent pas, vous tombez inconscient et êtes mourant.",
            "Si vous recevez une guérison, vous reprenez immédiatement conscience et n'êtes plus mourant.",
            "Lorsque vous êtes mourant, au début de chacun de vos tours, vous effectuez un jet de sauvegarde contre la mort. Lancez un d20 et n'ajoutez aucun modificateur.",
            "Un 10 ou plus est un succès, un 9 ou moins est un échec.",
            "A votre troisième succès, vous devenez stable.",
            "A votre troisième échec, vous mourrez.",
            "Lancer un 1 compte comme deux échecs.",
            "Lancer un 20 vous fait immédiatement regagner 1 point de vie.",
            "Vous pouvez également être stabilisé par un allié effectuant l'action Stabiliser et réussissant un test de Sagesse (Médecine) DD 10.",
            "Une fois stable, vous regagnez 1 point de vie après 1d4 heures."
        ]
    },
    {
        title: "Neutralisé",
        icon: "oppression",
        subtitle: "Vous êtes neutralisé",
        description: "Vous ne pouvez effectuer d'action ni de réaction",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Paralysé",
        icon: "internal-injury",
        subtitle: "Vous êtes paralysé",
        description: "Vous ne pouvez rien faire",
        bullets: [
            "Vous êtes neutralisé et ne pouvez plus bouger ni parler.",
            "Les jets d'attaque contre vous ont avantage.",
            "Toute attaque qui vous touche est un coup critique si l'attaquant est à 1,50 mètre ou moins de vous.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité."
        ]
    },
    {
        title: "Pétrifié",
        icon: "stone-pile",
        subtitle: "Vous êtes pétrifié",
        description: "Vous êtes transformé en substance solide inanimée (généralement en pierre) avec tout objet non-magique que vous avez",
        reference: "PHB, pg. 291.",
        bullets: [
            "Votre poids est multiplié par dix et votre vieillissement cesse.",
            "Vous êtes neutralisé, ne pouvez plus bouger ni parler, et n'êtes plus conscient de ce qui se passe autour de vous.",
            "Les jets d'attaque contre vous ont avantage.",
            "Vous ratez automatiquement vos jets de sauvegarde de Force et de Dextérité.",
            "You êtes résistant à tous les types dégâts.",
            "Vous êtes immunisé contre le poison et la maladie, mais un poison ou une maladie déjà dans votre organisme est seulement suspendu, pas neutralisé."
        ]
    }
]
