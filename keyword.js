function sentenceGEN()
{
	//Init
	var noun 	= 0;
	var adje 	= 0;
	var arti	= 0;
	var verb	= 0;
	var prep	= 0;
	var sentence= 0;
	var result 	= document.getElementById('result');

	var dictonary = 
	'{'+
		'"Nouns"' + ':' +	'[' + '"mountain"' + ',' + '"hill"' + ',' + '"tree"' + ',' + '"flower"' + '],' +
		'"Adjectives"' + ':' +	'[' + '"lucky"' + ',' + '"angry"' + ',' + '"crushed"' + ',' + '"happy"' + '],' +
		'"Articles"' + ':' +	'[' + '"this"' + ',' + '"that"' + ',' + '"one"' + ',' + '"the"' + '],' +
		'"Verbs"' + ':' +	'[' + '"jumps"' + ',' + '"is creating"' + ',' + '"were hoping"' + ',' + '"loves"' + '],' +
		'"Prepositions"' + ':' +	'[' + '"in front of"' + ',' + '"behind"' + ',' + '"over"' + ',' + '"inside"' + ']' +
	'}'
	
	
	//Generate random indices
	with(Math)
	{
		//Random number between 0 - 3
		noun	= floor( random() * 4 );
		adje 	= floor( random() * 4 );
		arti	= floor( random() * 4 );
		verb	= floor( random() * 4 );
		prep	= floor( random() * 4 );
	}

	
	
	//Making JSON object usable for Javascript 
	var Pool = JSON.parse(dictonary);
	
	
	//Generate random sentence
	with(Pool)
	{
		sentence = Articles[arti] + " " + Adjectives[adje] + " " + Nouns[noun]  + " " + Verbs[verb] + " " + Prepositions[prep];
		
		//Preparing words for second part of sentence
		with(Math)
		{
			noun	= floor( random() * 4 );
			adje 	= floor( random() * 4 );
			arti	= floor( random() * 4 );
		}
		
		//Append second part
		sentence = sentence.concat( " " + Articles[arti] + " " + Adjectives[adje] + " " + Nouns[noun]);
	}
	
	
	//Showing result in browser
	result.innerHTML =  sentence
	
}




