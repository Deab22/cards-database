import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon"
	},

	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Data Scan"
		},

		effect: {
			en: "Once during your turn, you may look at the top card of your deck."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sharpen"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "None"
}

export default card