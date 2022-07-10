function(properties, context) {
    
    let json_result = {};
    let pairs_array = properties.pairs;
    let obj={};

    for (const pair of pairs_array) {
  		obj[pair.key]=pair.value;
	}

    let stringified_obj = JSON.stringify(obj);
	return(
        {
    		json: stringified_obj
        }
    );
}