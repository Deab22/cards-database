import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Wingull",
		fr: "Goélise",
		es: "Wingull",
		it: "Wingull",
		pt: "Wingull"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card