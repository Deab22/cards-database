import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Smoliv",
		fr: "Olivini",
		es: "Smoliv",
		it: "Smoliv",
		pt: "Smoliv"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Nutrients",
			fr: "Nutriments",
			es: "Nutrientes",
			it: "Nutrienti",
			pt: "Nutrientes"
		},

		effect: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts de l'un de vos Pokémon.",
			es: "Cura 30 puntos de daño a uno de tus Pokémon.",
			it: "Cura uno dei tuoi Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano de 1 dos seus Pokémon."
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card