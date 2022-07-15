function(properties, context) {

	let obj = JSON.parse(properties.json);
    let val = '';
    if(obj&&obj.hasOwnProperty(properties.key)){
        val = obj[properties.key];
        if(typeof val != 'string'){
            val = JSON.stringify(val);
        }
    }
    
    return val;
}