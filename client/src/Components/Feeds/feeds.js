const regions = [
    { value: 'Maritime', label: 'Maritime' },
    { value: 'Central', label: 'Central' },
    { value: 'Savanes', label: 'Savanes' },
    { value: 'Kara', label: 'Kara' },
    { value: 'Plateaux', label: 'Plateaux' }
]
let immoiliers = [
    { value: 'Maison', label: 'Maison' },
    { value: 'Chambre', label: 'Chambre' },
    { value: 'Appartment', label: 'Appartment' },
    { value: 'Cours commune', label: 'Cours commune' },
    { value: 'Magasin', label: 'Magasin' },
    { value: 'Sommaire', label: 'Sommaire' }
]
let cours = [
    { value: 'Cours Uniquie', label: 'Cours Uniquie' },
    { value: 'Cours Commune', label: 'Cours Commune' },
    { value: 'Immeubles', label: 'Immeubles' }
]
let nombreChambres= [
    { value: 1, label: 1},
    { value: 2, label: 2},
    { value: 3, label: 3},
    { value: 4, label: 4},
    { value: 5, label: 5},
    { value: 6, label: 6},
    { value: 7, label: 7},
    { value: 8, label: 8},
    { value: 9, label: 9},
    { value: 10, label: 10},
    { value: 11, label: 11},
    { value: 12, label: 12},
    { value: 13, label: 13},
    { value: 14, label: 14},
    { value: 15, label: 15},
    { value: 16, label: 16},
    { value: 17, label: 17},
    { value: 18, label: 18},
    { value: 19, label: 19},
    { value: 20, label: 20} 
]

let villes =[
    { value: 'Lomé', label: 'Lomé' },
    { value: 'Sokodé', label: 'Sokodé' },
    { value: 'Kara', label: 'Kara' },
    { value: 'Atakpamé', label: 'Atakpamé' },
    { value: 'Bassar', label: 'Bassar' },
    { value: 'Tsévié', label: 'Tsévié' },
    { value: 'Aného', label: 'Aného' },
    { value: 'Mango', label: 'Mango' },
    { value: 'Dapaong', label: 'Dapaong' },
    { value: 'Tchamba', label: 'Tchamba' },
    { value: 'Niamtougou', label: 'Niamtougou'},
    { value: 'Bafilo', label: 'Bafilo' },
    { value: 'Notsé', label: 'Notsé' },
    { value: 'Sotouboua', label: 'Sotouboua' },
    { value: 'Vogan', label: 'Vogan' },
    { value: 'Badou', label: 'Badou' },
    { value: 'Biankouri', label: 'Biankouri' },
    { value: 'Kandé', label: 'Kandé' },
    { value: 'Amlamé', label: 'Amlamé' },
    { value: 'Galangachi', label: 'Galangachi' },
    { value: 'Kpagouda', label: 'Kpagouda' }
]
let aventages = [
    { value: "Cyber", label: "Cyber" },
    { value: 'Ecole Primaire', label: 'Ecole Primaire' },
    { value: 'Lycées', label: 'Lycées' },
    { value: 'Université', label: 'Université' },
    { value: "Securité", label: "Securité"}
]
let services = [
    { value: "Vente", label: "Vente" },
    { value: 'Louer', label: 'Louer' },
    { value: 'Baille', label: 'Baille' }
]

module.exports = {
    villes: villes,
    regions: regions,
    immoiliers: immoiliers,
    cours: cours,
    nombreChambres: nombreChambres,
    aventages: aventages,
    services: services

}