import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 急凍鳥",
		th: "กาลาร์ ฟรีเซอร์",
		ja: "ガラル フリーザー"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "擁有急凍鳥之名的寶可夢。射出的光束會讓對方的 身體像結凍似地失去自由。",
		th: "เป็นโปเกมอนที่มีชื่อว่าฟรีเซอร์ ยิงลำแสงลิดรอนอิสรภาพของร่างกายฝ่ายตรงข้ามราวกับว่ามันถูกตรึงแช่แข็งไว้",
		ja: "凍りついたかのように 体の 自由を 奪う ビームを 撃ちだす フリーザーの 名を もつ ポケモン。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "冷酷充能",
			th: "ชาร์จความเลือดเย็น",
			ja: "れいこくチャージ"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張【超】能量卡，附於這隻寶可夢身上。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ดพลังงาน [พลังจิต] ได้สูงสุด 2 ใบจากการ์ดบนมือฝ่ายเรา ติดที่โปเกมอนนี้",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札からエネルギーを2枚まで選び、このポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神鐳射",
			th: "ไซโคเลเซอร์",
			ja: "サイコレーザー"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的所有【超】能量丟棄，對手的1隻寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงาน[พลังจิต]ที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วทำแดเมจ 120 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "E",
	dexId: [144]
}

export default card