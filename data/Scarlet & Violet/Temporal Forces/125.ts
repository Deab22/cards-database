import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky",
		fr: "Coudlangue",
		es: "Lickilicky",
		it: "Lickilicky",
		pt: "Lickilicky"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Body Slam",
			fr: "Plaquage",
			es: "Golpe Cuerpo",
			it: "Corposcontro",
			pt: "Pancada Corporal"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
		},

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tonguenado",
			fr: "Déferlante de Langues",
			es: "Tornado de Lametones",
			it: "Leccaciclone",
			pt: "Turbilíngua"
		},

		effect: {
			en: "Flip 4 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 70 pontos de dano para cada cara."
		},

		damage: "70×"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card