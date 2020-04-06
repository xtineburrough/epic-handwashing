let fileReader = new FileReader();

export function readCSVfile(csvtext) {
	return csvJSON(csvtext);
}

function getFile(inputFile) {
	let file = inputFile.files[0];
	fileReader.readAsText(file);
}

function readFile(evt) {
	let parsed = csvJSON(evt.target.result);
	return parsed;
}

//var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split("	");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split("	");
	  if (headers.length == currentline.length) 
	  {
	  	for(var j=0;j<headers.length;j++){
  		  try {
  		  	obj[headers[j]] = currentline[j].trim();
  		  } catch { 
  		  	console.log("bad tsv line" + lines[i]); 
  		  }
	    }
	  
	  	result.push(obj);
	  } else {
		if (currentline.length > 1) {
			console.log("bad line " + lines[i] );
		}
      }

  }
  
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
}

export default readCSVfile;