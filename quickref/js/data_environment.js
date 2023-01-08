data_environment_obscurance = [
    {
        title: "Visibilité réduite",
        icon: "bleeding-eye",
        subtitle: "Disadvantage on Perception",
        description: "Lumière faible, brouillard épars, feuillage modéré",
        reference: "PHB, pg. 183.",
        bullets: [
            "Les créatures ont un <b>désavantage sur les tests de Sagesse (Perception)</b> qui dépendent de la vue."
        ]
    },
    {
        title: "Visibilité nulle",
        icon: "sight-disabled",
        subtitle: "Techniquement aveugle",
        description: "Ténèbres, brouillard opaque, feuillage dense",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature dans une zone de visibilité nulle souffre de la <b>condition d'aveuglement</b>."
        ]
    }
]

data_environment_light = [
    {
        title: "Lumière vive",
        icon: "star-pupil",
        subtitle: "Vision normale",
        description: "La plupart des créatures voient normalement.",
        reference: "PHB, pg. 183.",
        bullets: [
            "Même quand le temps est couvert, la lumière est considérée comme vive. C'est également le cas des zones éclairées par des torches, des feux ou d'autres sources de lumière qui illuminent un périmètre donné."
        ]
    },
    {
        title: "Lumière faible / Pénombre",
        icon: "semi-closed-eye",
        subtitle: "Zone de visibilité réduite",
        description: "Lumière faible, également appelée pénombre",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone de <b>visibilité réduite</b>.",
            "Une zone faiblement illuminée se situe généralement entre une zone de lumière vive, fournie par une torche, par exemple, et les ténèbres qui se trouvent au-delà.",
            "La lumière de l'aube et du crépuscule est aussi considérée comme faible, de même que la lumière émise par une pleine lune particulièrement brillante."
        ]
    },
    {
        title: "Ténèbres",
        icon: "worried-eyes",
        subtitle: "Zone de visibilité nulle",
        description: "Darkness creates a heavily obscured area",
        reference: "PHB, pg. 183.",
        bullets: [
            "Crée une zone de <b>visibilité nulle</b>.",
            "Characters face darkness outdoors at night (even most moonlit nights), within the confines of an unlit dungeon or a subterranean vault, or in an area of magical darkness."
        ]
    }
]

data_environment_vision = [
    {
        title: "Vision aveugle",
        icon: "one-eyed",
        subtitle: "Percevoir sans voir",
        description: "Percevez votre environnement sans vous fier à la vue, dans un certain rayon",
        reference: "PHB, pg. 183.",
        bullets: [
            "Une créature dotée de la vision aveugle est capable de percevoir son environnement sur une certaine distance par un moyen autre que la perception visuelle."
        ]
    },
    {
        title: "Nyctalopie",
        icon: "semi-closed-eye",
        subtitle: "Vision limitée dans l'obscurité",
        description: "Une créature nyctalope peut mieux voir dans l'obscurité ou dans des conditions de faible luminosité, dans un certain rayon",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "Sur une certaine distance, une créature nyctalope peut voir dans une zone faiblement éclairée comme s'il s'agissait d'une zone de lumière vive et dans les ténèbres comme s'il s'agissait d'une zone faiblement éclairée.",
            "Une telle créature ne peut cependant pas distinguer les couleurs dans les ténèbres, seulement des nuances de gris."
        ]
    },
    {
        title: "Vision parfaite",
        icon: "eye-shield",
        subtitle: "Voir dans les ténèbres",
        description: "Une créature avec une vision vraie peut tout voir sous sa vraie forme, indépendamment de l'environnement",
        reference: "PHB, pg. 184.",
        bullets: [
            "Une créature dotée de la vision parfaite peut, sur une certaine distance, voir parfaitement dans les ténèbres et les ténèbres magiques. Elle peut également voir les créatures et les objets invisibles, détecter à coup sûr les illusions visuelles et réussir automatiquement son jet de sauvegarde contre celles-ci, percevoir la forme d'origine d'un métamorphe ou d'une créature transformée par magie et voir dans le plan éthéré."
        ]
    }
]

data_environment_cover = [
    {
        title: "Abri partiel (50%)",
        icon: "broken-shield",
        subtitle: "Un muret, un grand meuble",
        description: "Une cible bénéficie d'un abri partiel si un obstacle protège au moins la moitié de son corps",
        reference: "PHB, pg. 196.",
        bullets: [
            "Vobstacle en question peut être un muret, un grand meuble, un tronc d'arbre étroit ou une créature, que celle-ci soit amie ou ennemie.",
            "Une cible qui bénéficie d'un abripartiel applique un bonus de <b>+2 à sa CA et à ses jets de sauvegarde de Dextérité</b>.",
            "Si une cible se positionne derrière plusieurs types d'abri, seul celui qui la protège le plus est pris en compte."
        ]
    },
    {
        title: "Abri important (75%)",
        icon: "cracked-shield",
        subtitle: "Une herse, une meurtrière",
        description: "Une cible bénéficie d'un abri important si un obstacle protège au moins les trois quarts de son corps",
        reference: "PHB, pg. 196.",
        bullets: [
            "The obstacle might be a portcullis, an arrow slit, or a thick tree trunk.",
            "Une cible qui bénéficie d'un abri important applique un bonus de <b>+5 à sa CA et à ses jets de sauvegarde de Dextérité</b>.",
            "Si une cible se positionne derrière plusieurs types d'abri, seul celui qui la protège le plus est pris en compte."
        ]
    },
    {
        title: "Abri total (100%)",
        icon: "shield",
        subtitle: "Complètement dissimulé",
        description: "Une cible bénéficie d'un abri total si elle est complètement dissimulée par un obstacle",
        reference: "PHB, pg. 196.",
        bullets: [
            "Une cible qui bénéficie d'un abri total <b>ne peut pas être ciblée directement</b> par des attaques ou des sorts. Cela dit, certains sorts peuvent l'atteindre si elle se situe dans leur zone d'effet.",
            "Si une cible se positionne derrière plusieurs types d'abri, seul celui qui la protège le plus est pris en compte."
        ]
    }
]
