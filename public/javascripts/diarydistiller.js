var inbox = document.getElementById("input");
var outbox = document.getElementById("output");

var tokenize = function(inputtext) {
	inputtext = inputtext.toLowerCase();
	//don't have to remove apostrophes
	inputtext = inputtext.replace( /[!\"#$%&()*+,-./:;<=>?@\[\\\]^_`{|}~\t\n]/gi , '');
	//turned to array of tokens
	inputtext = inputtext.split(" ")
	// $json = file_get_contents('tokenizer.json');
	// $data = json_decode($json);
	// $data = $data->config;
	// $data = json_decode($data->index_word);
	// $data = get_object_vars($data);
	//var searchlist = tokens[""]
	var index_word = tokens.config.index_word;
	// foreach ($tokens_alpha as &$value) {
	// 	$out = array_search($value,$data);
	// 	if ($out != False) {
	// 		$value = $out;
	// 	} 
	// 	else {
	// 		$value = 1;
	// 	}
	var indexes = [];
	for(let word of inputtext) {
		if(Object.values(index_word).indexOf(word) != -1) {
			indexes.push(Object.values(index_word).indexOf(word) + 1);
		}
		else {
			indexes.push(1);
		}
	}
	return indexes;
}
var pad = function(indexes) {
	// #===PADDING===
	// if(count($tokens_alpha) < 1000) {
	// 	$zeroes = array_fill(0,(1000 - count($tokens_alpha)),0);
	// 	$tokens_padded = array_merge($zeroes,$tokens_alpha);
	// }
	// else {
	// 	$tokens_padded = array_slice($a,999);
	// }
	var new_indexes = [];
	if(indexes.length < 1000) {
		for(let i = 0; i < 1000-indexes.length; i++) {
			new_indexes.push(0);
		}
		for(let index of indexes) {
			new_indexes.push(index);
		}
		return new_indexes;
	}
	else if(indexes.length > 1000) {
		return indexes.slice(0, 1000);
	}

}
var queryModel = async function (data) {
	url = '/query/diarydistiller';
	data = JSON.stringify({
		//{"instances":[[0,0,0,0,0,0,0,...]]}
		"instances" : [data]
	});
	//console.log(data);
	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: data
	});
	return response.json()
}
var evaluate = function(e) {
	var indexes = tokenize(e.target.value);
	var resPromise = queryModel(pad(indexes))
	//.then(resPromise => response.json())
	.then(function(data) {
		outbox.innerText = data[0];
	});
}
inbox.addEventListener("focusout", evaluate);
//evaluate(inbox.textContent);

// #===SENDING THE REQUEST===
// $request_body = new \stdClass();
// $request_body->instances = array($tokens_padded);
// $request_json = json_encode($request_body);

// $url = [should keep this in config var]
// //Initiate cURL.
// $ch = curl_init($url);
// //Tell cURL that we want to send a POST request.
// curl_setopt($ch, CURLOPT_POST, 1);
// //Attach our encoded JSON string to the POST fields.
// curl_setopt($ch, CURLOPT_POSTFIELDS, $request_json);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
// //Set the content type to application/json
// curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
// //Execute the request
// $result_json = curl_exec($ch);
// curl_close($ch);  
// $response = json_decode($result_json);
// print_r($response->predictions[0]);
// echo $response->predictions[0][0];
// echo $response->predictions[0][1];

// ?>  


// 	outbox.innerText = `Happiness : fsdf | Satisfaction : sdfads`;
// }