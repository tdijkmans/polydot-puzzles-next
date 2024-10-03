const lines = [
	{
		x1: "394.12424",
		y1: "811.13184",
		x2: "322.61557",
		y2: "777.51727",
		lineId: "line_1",
	},
	{
		x1: "322.61557",
		y1: "777.51727",
		x2: "212.728",
		y2: "784.15601",
		lineId: "line_2",
	},
	{
		x1: "212.728",
		y1: "784.15601",
		x2: "149.98563",
		y2: "754.87848",
		lineId: "line_3",
	},
	{
		x1: "149.98563",
		y1: "754.87848",
		x2: "107.5413",
		y2: "693.32532",
		lineId: "line_4",
	},
	{
		x1: "107.5413",
		y1: "693.32532",
		x2: "100.46325",
		y2: "648.04437",
		lineId: "line_5",
	},
	{
		x1: "100.46325",
		y1: "648.04437",
		x2: "263.13138",
		y2: "554.72534",
		lineId: "line_6",
	},
	{
		x1: "263.13138",
		y1: "554.72534",
		x2: "277.9108",
		y2: "540.82166",
		lineId: "line_7",
	},
	{
		x1: "277.9108",
		y1: "540.82166",
		x2: "248.69846",
		y2: "487.66248",
		lineId: "line_8",
	},
	{
		x1: "248.69846",
		y1: "487.66248",
		x2: "263.13138",
		y2: "554.72534",
		lineId: "line_9",
	},
	{
		x1: "263.13138",
		y1: "554.72534",
		x2: "349.85623",
		y2: "562.4848",
		lineId: "line_10",
	},
	{
		x1: "349.85623",
		y1: "562.4848",
		x2: "441.40659",
		y2: "573.82379",
		lineId: "line_11",
	},
	{
		x1: "441.40659",
		y1: "573.82379",
		x2: "460.41495",
		y2: "531.80084",
		lineId: "line_12",
	},
	{
		x1: "460.41495",
		y1: "531.80084",
		x2: "395.37973",
		y2: "510.29086",
		lineId: "line_13",
	},
	{
		x1: "395.37973",
		y1: "510.29086",
		x2: "349.85623",
		y2: "562.4848",
		lineId: "line_14",
	},
	{
		x1: "349.85623",
		y1: "562.4848",
		x2: "367.86411",
		y2: "477.77341",
		lineId: "line_15",
	},
	{
		x1: "367.86411",
		y1: "477.77341",
		x2: "424.3996",
		y2: "457.26221",
		lineId: "line_16",
	},
	{
		x1: "424.3996",
		y1: "457.26221",
		x2: "469.92313",
		y2: "390.72546",
		lineId: "line_17",
	},
	{
		x1: "469.92313",
		y1: "390.72546",
		x2: "471.19003",
		y2: "345.23621",
		lineId: "line_18",
	},
	{
		x1: "471.19003",
		y1: "345.23621",
		x2: "365.06668",
		y2: "375.65936",
		lineId: "line_19",
	},
	{
		x1: "365.06668",
		y1: "375.65936",
		x2: "298.38599",
		y2: "434.90948",
		lineId: "line_20",
	},
	{
		x1: "298.38599",
		y1: "434.90948",
		x2: "248.69846",
		y2: "487.66248",
		lineId: "line_21",
	},
	{
		x1: "248.69846",
		y1: "487.66248",
		x2: "277.81735",
		y2: "467.76428",
		lineId: "line_22",
	},
	{
		x1: "277.81735",
		y1: "467.76428",
		x2: "327.02521",
		y2: "491.21567",
		lineId: "line_23",
	},
	{
		x1: "327.02521",
		y1: "491.21567",
		x2: "341.73849",
		y2: "414.2821",
		lineId: "line_24",
	},
	{
		x1: "341.73849",
		y1: "414.2821",
		x2: "365.06448",
		y2: "375.66129",
		lineId: "line_25",
	},
	{
		x1: "298.38599",
		y1: "434.90948",
		x2: "277.69003",
		y2: "373.1824",
		lineId: "line_26",
	},
	{
		x1: "277.69003",
		y1: "373.1824",
		x2: "293.60587",
		y2: "198.0798",
		lineId: "line_27",
	},
	{
		x1: "293.60587",
		y1: "198.0798",
		x2: "471.19003",
		y2: "345.23621",
		lineId: "line_28",
	},
	{
		x1: "471.19003",
		y1: "345.23621",
		x2: "523.54681",
		y2: "183.92769",
		lineId: "line_29",
	},
	{
		x1: "523.54681",
		y1: "183.92769",
		x2: "709.61517",
		y2: "478.95169",
		lineId: "line_30",
	},
	{
		x1: "709.61517",
		y1: "478.95169",
		x2: "510.99994",
		y2: "866.07239",
		lineId: "line_31",
	},
	{
		x1: "510.99994",
		y1: "866.07239",
		x2: "454.97137",
		y2: "839.85809",
		lineId: "line_32",
	},
] as const;

const sequence = [
	{
		letter: "aa",
		line: "line_1",
		circle: "circle_aa",
		text: "text_aa",
		traject: "aa_ab",
		step: 1,
	},
	{
		letter: "ab",
		line: "line_2",
		circle: "circle_ab",
		text: "text_ab",
		traject: "ab_ac",
		step: 2,
	},
	{
		letter: "ac",
		line: "line_3",
		circle: "circle_ac",
		text: "text_ac",
		traject: "ac_ad",
		step: 3,
	},
	{
		letter: "ad",
		line: "line_4",
		circle: "circle_ad",
		text: "text_ad",
		traject: "ad_ae",
		step: 4,
	},
	{
		letter: "ae",
		line: "line_5",
		circle: "circle_ae",
		text: "text_ae",
		traject: "ae_af",
		step: 5,
	},
	{
		letter: "af",
		line: "line_6",
		circle: "circle_af",
		text: "text_af",
		traject: "af_ag",
		step: 6,
	},
	{
		letter: "ag",
		line: "line_7",
		circle: "circle_ag",
		text: "text_ag",
		traject: "ag_ah",
		step: 7,
	},
	{
		letter: "ah",
		line: "line_8",
		circle: "circle_ah",
		text: "text_ah",
		traject: "ah_ai",
		step: 8,
	},
	{
		letter: "ai",
		line: "line_9",
		circle: "circle_ai",
		text: "text_ai",
		traject: "ai_ag",
		step: 9,
	},
	{
		letter: "ag",
		line: "line_10",
		circle: "circle_ag",
		text: "text_ag",
		traject: "ag_aj",
		step: 10,
	},
	{
		letter: "aj",
		line: "line_11",
		circle: "circle_aj",
		text: "text_aj",
		traject: "aj_ak",
		step: 11,
	},
	{
		letter: "ak",
		line: "line_12",
		circle: "circle_ak",
		text: "text_ak",
		traject: "ak_al",
		step: 12,
	},
	{
		letter: "al",
		line: "line_13",
		circle: "circle_al",
		text: "text_al",
		traject: "al_am",
		step: 13,
	},
	{
		letter: "am",
		line: "line_14",
		circle: "circle_am",
		text: "text_am",
		traject: "am_aj",
		step: 14,
	},
	{
		letter: "aj",
		line: "line_15",
		circle: "circle_aj",
		text: "text_aj",
		traject: "aj_an",
		step: 16,
	},
	{
		letter: "an",
		line: "line_16",
		circle: "circle_an",
		text: "text_an",
		traject: "an_ao",
		step: 17,
	},
	{
		letter: "ao",
		line: "line_17",
		circle: "circle_ao",
		text: "text_ao",
		traject: "ao_ap",
		step: 18,
	},
	{
		letter: "ap",
		line: "line_18",
		circle: "circle_ap",
		text: "text_ap",
		traject: "ap_aq",
		step: 19,
	},
	{
		letter: "aq",
		line: "line_19",
		circle: "circle_aq",
		text: "text_aq",
		traject: "aq_ar",
		step: 20,
	},
	{
		letter: "ar",
		line: "line_20",
		circle: "circle_ar",
		text: "text_ar",
		traject: "ar_as",
		step: 21,
	},
	{
		letter: "as",
		line: "line_21",
		circle: "circle_as",
		text: "text_as",
		traject: "as_ai",
		step: 22,
	},
	{
		letter: "ai",
		line: "line_22",
		circle: "circle_ai",
		text: "text_ai",
		traject: "ai_at",
		step: 23,
	},
	{
		letter: "at",
		line: "line_23",
		circle: "circle_at",
		text: "text_at",
		traject: "at_au",
		step: 24,
	},
	{
		letter: "au",
		line: "line_24",
		circle: "circle_au",
		text: "text_au",
		traject: "au_av",
		step: 25,
	},
	{
		letter: "av",
		line: "line_25",
		circle: "circle_av",
		text: "text_av",
		traject: "av_ar",
		step: 26,
	},
	{
		letter: "ar",
		line: "line_20",
		circle: "circle_ar",
		text: "text_ar",
		traject: "ar_as",
		step: 27,
	},
	{
		letter: "as",
		line: "line_26",
		circle: "circle_as",
		text: "text_as",
		traject: "as_aw",
		step: 28,
	},
	{
		letter: "aw",
		line: "line_27",
		circle: "circle_aw",
		text: "text_aw",
		traject: "aw_ax",
		step: 29,
	},
	{
		letter: "ax",
		line: "line_28",
		circle: "circle_ax",
		text: "text_ax",
		traject: "ax_aq",
		step: 30,
	},
	{
		letter: "aq",
		line: "line_29",
		circle: "circle_aq",
		text: "text_aq",
		traject: "aq_ay",
		step: 31,
	},
	{
		letter: "ay",
		line: "line_30",
		circle: "circle_ay",
		text: "text_ay",
		traject: "ay_az",
		step: 32,
	},
	{
		letter: "az",
		line: "line_31",
		circle: "circle_az",
		text: "text_az",
		traject: "ay_az",
		step: 33,
	},
	{
		letter: "a1",
		line: "line_32",
		circle: "circle_a1",
		text: "text_a1",
		traject: "az_a1",
		step: 34,
	},
	{
		letter: "a2",
		line: "line_32",
		circle: "circle_a2",
		text: "text_a2",
		traject: "a1_a2",
		step: 35,
	},
] as const;

type Letter = (typeof sequence)[number]["letter"];
type Traject = (typeof sequence)[number]["traject"];
type LineId = (typeof lines)[number]["lineId"];
type CircleId = (typeof sequence)[number]["circle"];
type TextId = (typeof sequence)[number]["text"];
type StepCount = (typeof sequence)[number]["step"];

const dots = [
	{ cx: 400, cy: 669, label: "aa" },
	{ cx: 364, cy: 652, label: "ab" },
	{ cx: 308, cy: 655, label: "ac" },
	{ cx: 277, cy: 640, label: "ad" },
	{ cx: 256, cy: 609, label: "ae" },
	{ cx: 252, cy: 587, label: "af" },
	{ cx: 334, cy: 540, label: "ag" },
	{ cx: 341, cy: 533, label: "ah" },
	{ cx: 327, cy: 506, label: "ai" },
	{ cx: 377, cy: 544, label: "aj" },
	{ cx: 423, cy: 550, label: "ak" },
	{ cx: 433, cy: 528, label: "al" },
	{ cx: 400, cy: 518, label: "am" },
	{ cx: 386, cy: 501, label: "an" },
	{ cx: 415, cy: 491, label: "ao" },
	{ cx: 438, cy: 458, label: "ap" },
	{ cx: 438, cy: 435, label: "aq" },
	{ cx: 385, cy: 450, label: "ar" },
	{ cx: 351, cy: 480, label: "as" },
	{ cx: 341, cy: 496, label: "at" },
	{ cx: 366, cy: 508, label: "au" },
	{ cx: 373, cy: 469, label: "av" },
	{ cx: 341, cy: 449, label: "aw" },
	{ cx: 349, cy: 361, label: "ax" },
	{ cx: 464, cy: 354, label: "ay" },
	{ cx: 558, cy: 502, label: "az" },
	{ cx: 458, cy: 696, label: "a1" },
	{ cx: 422, cy: 679, label: "a2" },
] as const;

interface Step {
	step: StepCount;
	letter: Letter;
	line: Line;
	dot: Dot;
}

interface Line {
	x1: string;
	y1: string;
	x2: string;
	y2: string;
	traject: Traject;
	lineId: LineId;
}

interface Dot {
	cx: number;
	cy: number;
	label: Letter;
	textId: TextId;
	circleId: CircleId;
}

const steps: Array<Step> = sequence.map(
	({ step, letter, traject, ...rest }) => {
		const dot = dots.find((el) => el.label === letter) as Dot;
		const line = lines.find((el) => el.lineId === rest.line) as Line;
		return {
			step,
			letter,
			line: { ...line, traject, lineId: rest.line },
			dot: { ...dot, textId: `text_${letter}`, circleId: `circle_${letter}` },
		};
	},
);

export { steps, type Step };
