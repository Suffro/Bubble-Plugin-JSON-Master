function(properties, context) {

	let obj = JSON.parse(properties.json);
	let val = obj[properties.key];
    if(typeof val != 'string'){
        val = JSON.stringify(val);
    }
    
    return(
    	{
            value: val
        }
    );
}