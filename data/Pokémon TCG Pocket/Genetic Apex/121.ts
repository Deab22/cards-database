import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Will-O-Wisp"
		},

		damage: "30"
	}],

	retreat: 1,
	rarity: "None"
}

export default card