import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Blitzle"
	},

	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Zap Kick"
		},

        damage: "20"
	}],

	retreat: 1,
	rarity: "Two Diamond"
}

export default card