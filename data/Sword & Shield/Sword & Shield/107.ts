import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Silicobra",
		fr: "Dunaja",
		es: "Silicobra",
		it: "Silicobra",
		pt: "Silicobra",
		de: "Salanga"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de Sable",
				es: "Ataque Arena",
				it: "Turbosabbia",
				pt: "Ataque de Areia",
				de: "Sandwirbel"
			},
			effect: {
				en: "During your opponent’s next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn’t happen.",
				fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d’attaquer, votre adversaire lance une pièce. Si c’est pile, l’attaque n’est pas lancée.",
				es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se hace.",
				it: "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell’attacco non ha luogo.",
				pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não acontecerá.",
				de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		en: "It spews sand from its nostrils. While the enemy is blinded, it burrows into the ground to hide."
	}
}

export default card
