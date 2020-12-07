//if i ever want to make a new syllable list...

build_syllables()

function build_syllables() {
	//generate syllables, make syllables 3d, list of syllables for a picture w/ (x,y) coords
	let syllables = []
	let initials = [["tj","dj"],["d","r"],["b","p"],["m"],["g"],["y"],["w"],["t"],["n"],
				["k"],["ng"],["ny"],["l"],["","h"],["j"]]
	let finals = [["a"],["e"],["i",""],["o"],["u"],["ee"],["oo"],
				["ar","at"],["er","et"],["ir","it"],["or","ot"],["ur","ut"],
				["an","am"],["en","em"],["in","im"],["un","um"],["oon","oom"],
				["ang"],["ung"],["ing"],["ong"],["al"],["il"],["ol"],["ool"],["arr"],["irr"],["urr"]]
	for (let i_sublist of initials) {
		let new_row = []
		for (let f_sublist of finals) {
			let new_entry = []
			for (let i of i_sublist) {
				for (let f of f_sublist) {
					new_entry.push(i.concat(f))
				}
			}
			new_row.push(new_entry)
		}
		syllables.push(new_row)
	}	
	console.log(JSON.stringify(syllables).replace(/\"/g, "\\\""));
}