var data = {
    enchants: {
        protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "fire_protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        aqua_affinity: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        bane_of_arthropods: {
            levelMax: "5",
            weight: "1",
            incompatible: ["smite", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace", "spear"]
        },
        blast_protection: {
            levelMax: "4",
            weight: "2",
            incompatible: ["fire_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        channeling: {
            levelMax: "1",
            weight: "4",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        depth_strider: {
            levelMax: "3",
            weight: "2",
            incompatible: ["frost_walker"],
            items: ["boots"]
        },
        efficiency: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe", "shears"]
        },
        feather_falling: {
            levelMax: "4",
            weight: "1",
            incompatible: [],
            items: ["boots"]
        },
        fire_aspect: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["sword", "mace", "spear"]
        },
        fire_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["blast_protection", "protection", "projectile_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        flame: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        fortune: {
            levelMax: "3",
            weight: "2",
            incompatible: ["silk_touch"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        frost_walker: {
            levelMax: "2",
            weight: "2",
            incompatible: ["depth_strider"],
            items: ["boots"]
        },
        impaling: {
            levelMax: "5",
            weight: "2",
            incompatible: [],
            items: ["trident"]
        },
        infinity: {
            levelMax: "1",
            weight: "4",
            incompatible: ["mending"],
            items: ["bow"]
        },
        knockback: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword", "spear"]
        },
        looting: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "spear"]
        },
        loyalty: {
            levelMax: "3",
            weight: "1",
            incompatible: ["riptide"],
            items: ["trident"]
        },
        luck_of_the_sea: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        lunge: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["spear"]
        },
        lure: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        mending: {
            levelMax: "1",
            weight: "2",
            incompatible: ["infinity"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        multishot: {
            levelMax: "1",
            weight: "2",
            incompatible: ["piercing"],
            items: ["crossbow"]
        },
        piercing: {
            levelMax: "4",
            weight: "1",
            incompatible: ["multishot"],
            items: ["crossbow"]
        },
        power: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["bow"]
        },
        projectile_protection: {
            levelMax: "4",
            weight: "1",
            incompatible: ["protection", "blast_protection", "fire_protection"],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        punch: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["bow"]
        },
        quick_charge: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["crossbow"]
        },
        respiration: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["helmet", "turtle_shell"]
        },
        riptide: {
            levelMax: "3",
            weight: "2",
            incompatible: ["channeling", "loyalty"],
            items: ["trident"]
        },
        sharpness: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "smite"],
            items: ["sword", "axe", "spear"]
        },
        silk_touch: {
            levelMax: "1",
            weight: "4",
            incompatible: ["fortune"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        smite: {
            levelMax: "5",
            weight: "1",
            incompatible: ["bane_of_arthropods", "sharpness", "density", "breach"],
            items: ["sword", "axe", "mace", "spear"]
        },
        soul_speed: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["boots"]
        },
        sweeping: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword"]
        },
        swift_sneak: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["leggings"]
        },
        thorns: {
            levelMax: "3",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "turtle_shell"]
        },
        unbreaking: {
            levelMax: "3",
            weight: "1",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        binding_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "elytra", "pumpkin", "helmet", "turtle_shell"]
        },
        vanishing_curse: {
            levelMax: "1",
            weight: "4",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "pumpkin",
                "helmet", "trident", "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        density: {
            levelMax: "5",
            weight: "1",
            incompatible: ["breach", "smite", "bane_of_arthropods"],
            items: ["mace"]
        },
        breach: {
            levelMax: "4",
            weight: "2",
            incompatible: ["density", "smite", "bane_of_arthropods"],
            items: ["mace"]
        },
        wind_burst: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["mace"]
        },
        cold_steel: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        darkness_cloak: {
            levelMax: "3",
            weight: "10",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        dragon_heart: {
            levelMax: "5",
            weight: "2",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        elemental_protection: {
            levelMax: "4",
            weight: "10",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots"]
        },
        fire_shield: {
            levelMax: "4",
            weight: "2",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        flame_walker: {
            levelMax: "2",
            weight: "1",
            incompatible: ["frost_walker"],
            items: ["boots"]
        },
        hardened: {
            levelMax: "2",
            weight: "5",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        ice_shield: {
            levelMax: "3",
            weight: "10",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        jumping: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["boots"]
        },
        kamikadze: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        lightweight: {
            levelMax: "1",
            weight: "10",
            incompatible: [],
            items: ["boots"]
        },
        night_vision: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet"]
        },
        rebound: {
            levelMax: "1",
            weight: "2",
            incompatible: ["feather_falling"],
            items: ["boots"]
        },
        regrowth: {
            levelMax: "4",
            weight: "2",
            incompatible: [],
            items: ["chestplate", "elytra"]
        },
        saturation: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["helmet"]
        },
        speed: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["helmet"]
        },
        stopping_force: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["leggings"]
        },
        water_breathing: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["helmet"]
        },
        bomber: {
            levelMax: "3",
            weight: "1",
            incompatible: ["ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        confusing_arrows: {
            levelMax: "3",
            weight: "10",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        darkness_arrows: {
            levelMax: "3",
            weight: "10",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        dragonfire_arrows: {
            levelMax: "3",
            weight: "2",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        electrified_arrows: {
            levelMax: "3",
            weight: "5",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        ender_bow: {
            levelMax: "1",
            weight: "1",
            incompatible: ["bomber", "ghast"],
            items: ["bow", "crossbow"]
        },
        explosive_arrows: {
            levelMax: "3",
            weight: "5",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        flare: {
            levelMax: "1",
            weight: "5",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        ghast: {
            levelMax: "1",
            weight: "1",
            incompatible: ["bomber", "ender_bow"],
            items: ["bow", "crossbow"]
        },
        hover: {
            levelMax: "3",
            weight: "10",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        lingering: {
            levelMax: "3",
            weight: "2",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        poisoned_arrows: {
            levelMax: "3",
            weight: "5",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        sniper: {
            levelMax: "2",
            weight: "10",
            incompatible: [],
            items: ["bow", "crossbow"]
        },
        vampiric_arrows: {
            levelMax: "3",
            weight: "2",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        withered_arrows: {
            levelMax: "3",
            weight: "5",
            incompatible: ["bomber", "ender_bow", "ghast"],
            items: ["bow", "crossbow"]
        },
        blast_mining: {
            levelMax: "5",
            weight: "2",
            incompatible: ["tunnel", "veinminer"],
            items: ["pickaxe"]
        },
        glass_breaker: {
            levelMax: "1",
            weight: "10",
            incompatible: [],
            items: ["pickaxe", "axe"]
        },
        haste: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        lucky_miner: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        replanter: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["hoe"]
        },
        silk_chest: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["pickaxe", "axe"]
        },
        silk_spawner: {
            levelMax: "1",
            weight: "1",
            incompatible: ["smelter"],
            items: ["pickaxe"]
        },
        smelter: {
            levelMax: "5",
            weight: "5",
            incompatible: ["silk_touch", "silk_spawner"],
            items: ["pickaxe", "shovel", "axe"]
        },
        telekinesis: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["pickaxe", "shovel", "axe", "hoe", "sword"]
        },
        treefeller: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["axe"]
        },
        tunnel: {
            levelMax: "3",
            weight: "1",
            incompatible: ["veinminer", "blast_mining"],
            items: ["pickaxe", "shovel"]
        },
        veinminer: {
            levelMax: "3",
            weight: "1",
            incompatible: ["tunnel", "blast_mining"],
            items: ["pickaxe", "shovel", "axe", "hoe"]
        },
        auto_reel: {
            levelMax: "1",
            weight: "1",
            incompatible: [],
            items: ["fishing_rod"]
        },
        curse_of_drowned: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["fishing_rod"]
        },
        double_catch: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        river_master: {
            levelMax: "5",
            weight: "10",
            incompatible: [],
            items: ["fishing_rod"]
        },
        seasoned_angler: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["fishing_rod"]
        },
        survivalist: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["fishing_rod"]
        },
        bane_of_netherspawn: {
            levelMax: "5",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        blindness: {
            levelMax: "2",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        confusion: {
            levelMax: "2",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        cure: {
            levelMax: "3",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        curse_of_death: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        cutter: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        decapitator: {
            levelMax: "2",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        double_strike: {
            levelMax: "2",
            weight: "1",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        exhaust: {
            levelMax: "4",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        ice_aspect: {
            levelMax: "3",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        infernus: {
            levelMax: "3",
            weight: "10",
            incompatible: [],
            items: ["trident"]
        },
        nimble: {
            levelMax: "1",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        paralyze: {
            levelMax: "5",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        rage: {
            levelMax: "2",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        rocket: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        swiper: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        temper: {
            levelMax: "5",
            weight: "1",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        thrifty: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        thunder: {
            levelMax: "5",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        vampire: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        venom: {
            levelMax: "2",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        village_defender: {
            levelMax: "5",
            weight: "10",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        wisdom: {
            levelMax: "5",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        wither: {
            levelMax: "2",
            weight: "5",
            incompatible: [],
            items: ["sword", "axe", "spear"]
        },
        curse_of_breaking: {
            levelMax: "3",
            weight: "10",
            incompatible: ["unbreaking"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        curse_of_fragility: {
            levelMax: "1",
            weight: "10",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        curse_of_mediocrity: {
            levelMax: "3",
            weight: "5",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        curse_of_misfortune: {
            levelMax: "3",
            weight: "5",
            incompatible: ["fortune", "looting"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        restore: {
            levelMax: "3",
            weight: "2",
            incompatible: [],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        },
        soulbound: {
            levelMax: "1",
            weight: "2",
            incompatible: ["vanishing_curse"],
            items: ["helmet", "chestplate", "leggings", "boots", "pickaxe", "shovel", "axe", "sword", "hoe", "brush", "fishing_rod",
                "bow", "shears", "flint_and_steel", "carrot_on_a_stick", "warped_fungus_on_a_stick", "shield", "elytra", "trident",
                "turtle_shell", "crossbow", "mace", "spear"
            ]
        }
    },
    items: [
        'helmet',
        'chestplate',
        'leggings',
        'boots',
        'turtle_shell',
        'elytra',

        'sword',
        'axe',
        'mace',
        'spear',

        'trident',
        'bow',
        'crossbow',

        'pickaxe',
        'shovel',
        'hoe',
        'shield',
        'brush',

        'fishing_rod',
        'shears',
        'flint_and_steel',
        'carrot_on_a_stick',
        'warped_fungus_on_a_stick',
        'pumpkin',
        'book',
    ]
};
