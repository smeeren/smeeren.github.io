const syllables_json = "[[[\"tja\",\"dja\"],[\"tje\",\"dje\"],[\"tji\",\"tj\",\"dji\",\"dj\"],[\"tjo\",\"djo\"],[\"tju\",\"dju\"],[\"tjee\",\"djee\"],[\"tjoo\",\"djoo\"],[\"tjar\",\"tjat\",\"djar\",\"djat\"],[\"tjer\",\"tjet\",\"djer\",\"djet\"],[\"tjir\",\"tjit\",\"djir\",\"djit\"],[\"tjor\",\"tjot\",\"djor\",\"djot\"],[\"tjur\",\"tjut\",\"djur\",\"djut\"],[\"tjan\",\"tjam\",\"djan\",\"djam\"],[\"tjen\",\"tjem\",\"djen\",\"djem\"],[\"tjin\",\"tjim\",\"djin\",\"djim\"],[\"tjun\",\"tjum\",\"djun\",\"djum\"],[\"tjoon\",\"tjoom\",\"djoon\",\"djoom\"],[\"tjang\",\"djang\"],[\"tjung\",\"djung\"],[\"tjing\",\"djing\"],[\"tjong\",\"djong\"],[\"tjal\",\"djal\"],[\"tjil\",\"djil\"],[\"tjol\",\"djol\"],[\"tjool\",\"djool\"],[\"tjarr\",\"djarr\"],[\"tjirr\",\"djirr\"],[\"tjurr\",\"djurr\"]],[[\"da\",\"ra\"],[\"de\",\"re\"],[\"di\",\"d\",\"ri\",\"r\"],[\"do\",\"ro\"],[\"du\",\"ru\"],[\"dee\",\"ree\"],[\"doo\",\"roo\"],[\"dar\",\"dat\",\"rar\",\"rat\"],[\"der\",\"det\",\"rer\",\"ret\"],[\"dir\",\"dit\",\"rir\",\"rit\"],[\"dor\",\"dot\",\"ror\",\"rot\"],[\"dur\",\"dut\",\"rur\",\"rut\"],[\"dan\",\"dam\",\"ran\",\"ram\"],[\"den\",\"dem\",\"ren\",\"rem\"],[\"din\",\"dim\",\"rin\",\"rim\"],[\"dun\",\"dum\",\"run\",\"rum\"],[\"doon\",\"doom\",\"roon\",\"room\"],[\"dang\",\"rang\"],[\"dung\",\"rung\"],[\"ding\",\"ring\"],[\"dong\",\"rong\"],[\"dal\",\"ral\"],[\"dil\",\"ril\"],[\"dol\",\"rol\"],[\"dool\",\"rool\"],[\"darr\",\"rarr\"],[\"dirr\",\"rirr\"],[\"durr\",\"rurr\"]],[[\"ba\",\"pa\"],[\"be\",\"pe\"],[\"bi\",\"b\",\"pi\",\"p\"],[\"bo\",\"po\"],[\"bu\",\"pu\"],[\"bee\",\"pee\"],[\"boo\",\"poo\"],[\"bar\",\"bat\",\"par\",\"pat\"],[\"ber\",\"bet\",\"per\",\"pet\"],[\"bir\",\"bit\",\"pir\",\"pit\"],[\"bor\",\"bot\",\"por\",\"pot\"],[\"bur\",\"but\",\"pur\",\"put\"],[\"ban\",\"bam\",\"pan\",\"pam\"],[\"ben\",\"bem\",\"pen\",\"pem\"],[\"bin\",\"bim\",\"pin\",\"pim\"],[\"bun\",\"bum\",\"pun\",\"pum\"],[\"boon\",\"boom\",\"poon\",\"poom\"],[\"bang\",\"pang\"],[\"bung\",\"pung\"],[\"bing\",\"ping\"],[\"bong\",\"pong\"],[\"bal\",\"pal\"],[\"bil\",\"pil\"],[\"bol\",\"pol\"],[\"bool\",\"pool\"],[\"barr\",\"parr\"],[\"birr\",\"pirr\"],[\"burr\",\"purr\"]],[[\"ma\"],[\"me\"],[\"mi\",\"m\"],[\"mo\"],[\"mu\"],[\"mee\"],[\"moo\"],[\"mar\",\"mat\"],[\"mer\",\"met\"],[\"mir\",\"mit\"],[\"mor\",\"mot\"],[\"mur\",\"mut\"],[\"man\",\"mam\"],[\"men\",\"mem\"],[\"min\",\"mim\"],[\"mun\",\"mum\"],[\"moon\",\"moom\"],[\"mang\"],[\"mung\"],[\"ming\"],[\"mong\"],[\"mal\"],[\"mil\"],[\"mol\"],[\"mool\"],[\"marr\"],[\"mirr\"],[\"murr\"]],[[\"ga\"],[\"ge\"],[\"gi\",\"g\"],[\"go\"],[\"gu\"],[\"gee\"],[\"goo\"],[\"gar\",\"gat\"],[\"ger\",\"get\"],[\"gir\",\"git\"],[\"gor\",\"got\"],[\"gur\",\"gut\"],[\"gan\",\"gam\"],[\"gen\",\"gem\"],[\"gin\",\"gim\"],[\"gun\",\"gum\"],[\"goon\",\"goom\"],[\"gang\"],[\"gung\"],[\"ging\"],[\"gong\"],[\"gal\"],[\"gil\"],[\"gol\"],[\"gool\"],[\"garr\"],[\"girr\"],[\"gurr\"]],[[\"ya\"],[\"ye\"],[\"yi\",\"y\"],[\"yo\"],[\"yu\"],[\"yee\"],[\"yoo\"],[\"yar\",\"yat\"],[\"yer\",\"yet\"],[\"yir\",\"yit\"],[\"yor\",\"yot\"],[\"yur\",\"yut\"],[\"yan\",\"yam\"],[\"yen\",\"yem\"],[\"yin\",\"yim\"],[\"yun\",\"yum\"],[\"yoon\",\"yoom\"],[\"yang\"],[\"yung\"],[\"ying\"],[\"yong\"],[\"yal\"],[\"yil\"],[\"yol\"],[\"yool\"],[\"yarr\"],[\"yirr\"],[\"yurr\"]],[[\"wa\"],[\"we\"],[\"wi\",\"w\"],[\"wo\"],[\"wu\"],[\"wee\"],[\"woo\"],[\"war\",\"wat\"],[\"wer\",\"wet\"],[\"wir\",\"wit\"],[\"wor\",\"wot\"],[\"wur\",\"wut\"],[\"wan\",\"wam\"],[\"wen\",\"wem\"],[\"win\",\"wim\"],[\"wun\",\"wum\"],[\"woon\",\"woom\"],[\"wang\"],[\"wung\"],[\"wing\"],[\"wong\"],[\"wal\"],[\"wil\"],[\"wol\"],[\"wool\"],[\"warr\"],[\"wirr\"],[\"wurr\"]],[[\"ta\"],[\"te\"],[\"ti\",\"t\"],[\"to\"],[\"tu\"],[\"tee\"],[\"too\"],[\"tar\",\"tat\"],[\"ter\",\"tet\"],[\"tir\",\"tit\"],[\"tor\",\"tot\"],[\"tur\",\"tut\"],[\"tan\",\"tam\"],[\"ten\",\"tem\"],[\"tin\",\"tim\"],[\"tun\",\"tum\"],[\"toon\",\"toom\"],[\"tang\"],[\"tung\"],[\"ting\"],[\"tong\"],[\"tal\"],[\"til\"],[\"tol\"],[\"tool\"],[\"tarr\"],[\"tirr\"],[\"turr\"]],[[\"na\"],[\"ne\"],[\"ni\",\"n\"],[\"no\"],[\"nu\"],[\"nee\"],[\"noo\"],[\"nar\",\"nat\"],[\"ner\",\"net\"],[\"nir\",\"nit\"],[\"nor\",\"not\"],[\"nur\",\"nut\"],[\"nan\",\"nam\"],[\"nen\",\"nem\"],[\"nin\",\"nim\"],[\"nun\",\"num\"],[\"noon\",\"noom\"],[\"nang\"],[\"nung\"],[\"ning\"],[\"nong\"],[\"nal\"],[\"nil\"],[\"nol\"],[\"nool\"],[\"narr\"],[\"nirr\"],[\"nurr\"]],[[\"ka\"],[\"ke\"],[\"ki\",\"k\"],[\"ko\"],[\"ku\"],[\"kee\"],[\"koo\"],[\"kar\",\"kat\"],[\"ker\",\"ket\"],[\"kir\",\"kit\"],[\"kor\",\"kot\"],[\"kur\",\"kut\"],[\"kan\",\"kam\"],[\"ken\",\"kem\"],[\"kin\",\"kim\"],[\"kun\",\"kum\"],[\"koon\",\"koom\"],[\"kang\"],[\"kung\"],[\"king\"],[\"kong\"],[\"kal\"],[\"kil\"],[\"kol\"],[\"kool\"],[\"karr\"],[\"kirr\"],[\"kurr\"]],[[\"nga\"],[\"nge\"],[\"ngi\",\"ng\"],[\"ngo\"],[\"ngu\"],[\"ngee\"],[\"ngoo\"],[\"ngar\",\"ngat\"],[\"nger\",\"nget\"],[\"ngir\",\"ngit\"],[\"ngor\",\"ngot\"],[\"ngur\",\"ngut\"],[\"ngan\",\"ngam\"],[\"ngen\",\"ngem\"],[\"ngin\",\"ngim\"],[\"ngun\",\"ngum\"],[\"ngoon\",\"ngoom\"],[\"ngang\"],[\"ngung\"],[\"nging\"],[\"ngong\"],[\"ngal\"],[\"ngil\"],[\"ngol\"],[\"ngool\"],[\"ngarr\"],[\"ngirr\"],[\"ngurr\"]],[[\"nya\"],[\"nye\"],[\"nyi\",\"ny\"],[\"nyo\"],[\"nyu\"],[\"nyee\"],[\"nyoo\"],[\"nyar\",\"nyat\"],[\"nyer\",\"nyet\"],[\"nyir\",\"nyit\"],[\"nyor\",\"nyot\"],[\"nyur\",\"nyut\"],[\"nyan\",\"nyam\"],[\"nyen\",\"nyem\"],[\"nyin\",\"nyim\"],[\"nyun\",\"nyum\"],[\"nyoon\",\"nyoom\"],[\"nyang\"],[\"nyung\"],[\"nying\"],[\"nyong\"],[\"nyal\"],[\"nyil\"],[\"nyol\"],[\"nyool\"],[\"nyarr\"],[\"nyirr\"],[\"nyurr\"]],[[\"la\"],[\"le\"],[\"li\",\"l\"],[\"lo\"],[\"lu\"],[\"lee\"],[\"loo\"],[\"lar\",\"lat\"],[\"ler\",\"let\"],[\"lir\",\"lit\"],[\"lor\",\"lot\"],[\"lur\",\"lut\"],[\"lan\",\"lam\"],[\"len\",\"lem\"],[\"lin\",\"lim\"],[\"lun\",\"lum\"],[\"loon\",\"loom\"],[\"lang\"],[\"lung\"],[\"ling\"],[\"long\"],[\"lal\"],[\"lil\"],[\"lol\"],[\"lool\"],[\"larr\"],[\"lirr\"],[\"lurr\"]],[[\"a\",\"ha\"],[\"e\",\"he\"],[\"i\",\"\",\"hi\",\"h\"],[\"o\",\"ho\"],[\"u\",\"hu\"],[\"ee\",\"hee\"],[\"oo\",\"hoo\"],[\"ar\",\"at\",\"har\",\"hat\"],[\"er\",\"et\",\"her\",\"het\"],[\"ir\",\"it\",\"hir\",\"hit\"],[\"or\",\"ot\",\"hor\",\"hot\"],[\"ur\",\"ut\",\"hur\",\"hut\"],[\"an\",\"am\",\"han\",\"ham\"],[\"en\",\"em\",\"hen\",\"hem\"],[\"in\",\"im\",\"hin\",\"him\"],[\"un\",\"um\",\"hun\",\"hum\"],[\"oon\",\"oom\",\"hoon\",\"hoom\"],[\"ang\",\"hang\"],[\"ung\",\"hung\"],[\"ing\",\"hing\"],[\"ong\",\"hong\"],[\"al\",\"hal\"],[\"il\",\"hil\"],[\"ol\",\"hol\"],[\"ool\",\"hool\"],[\"arr\",\"harr\"],[\"irr\",\"hirr\"],[\"urr\",\"hurr\"]],[[\"ja\"],[\"je\"],[\"ji\",\"j\"],[\"jo\"],[\"ju\"],[\"jee\"],[\"joo\"],[\"jar\",\"jat\"],[\"jer\",\"jet\"],[\"jir\",\"jit\"],[\"jor\",\"jot\"],[\"jur\",\"jut\"],[\"jan\",\"jam\"],[\"jen\",\"jem\"],[\"jin\",\"jim\"],[\"jun\",\"jum\"],[\"joon\",\"joom\"],[\"jang\"],[\"jung\"],[\"jing\"],[\"jong\"],[\"jal\"],[\"jil\"],[\"jol\"],[\"jool\"],[\"jarr\"],[\"jirr\"],[\"jurr\"]]]";
const syllables = JSON.parse(syllables_json)

function search(input) {
	for (let initial of syllables) {
		for (let initial_final of initial) {
			if (initial_final.includes(input)) {
				let coords = [syllables.indexOf(initial), initial.indexOf(initial_final)]
				return coords
			}
		}
	}
	return false;
}

function process(input) {
	let coords = []
	let substrings = []
	let substart = 0
	while (substart < input.length) {
		for (let i = substart+5; i > substart; i--) {
			substring = input.slice(substart, i).toLowerCase()
			//without this, infinite while loop if character not alphabetic
			if (substring.slice(0,1).match(/[0-9a-z]/) === null) {
				substart += 1
				break
			}
			else if (search(substring) !== false) {
				coords.push(search(substring))
				substrings.push(substring)
				substart += substring.length
				break
			}
			//if it's at a consonant like "f", no point checking ""
			else if (substring.length === 1) {
				substart += 1
				break
			}

		}
	}
	return [coords, substrings]
}

//transliterate each word to special unicode
function syllToChar (coords)
{
	out = ""
	for (let coord of coords) {
		//max 9892, w/ coord (14,27); 420 distinct chars
		//each coord[0] (initial) can be followed by 28 finals, base 28 number system
		charID_dec = 9472 + 28*coord[0] + coord[1] 
		out = out.concat(String.fromCodePoint(charID_dec))
		console.log(String.fromCodePoint(charID_dec))
	}
	return out
}

//process a paragraph, transliterating each subunit (run the subunits are sentences; broken at periods)
function processParagraph (text) {

	sentences_raw = text.split(".")
	sentences_translit = []
	for (let sentence of sentences_raw) {
		coords = process(sentence)[0]
		transliteration = syllToChar(coords)
		sentences_translit.push(transliteration)
	}
	
	out = sentences_translit.join('\u3000');
	return out
}

//publish results to output
function upOut() {
	document.getElementById("output").innerHTML = processParagraph(document.getElementById("input").value)
}