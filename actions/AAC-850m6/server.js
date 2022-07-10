function(properties, context) {
    
    let thing = properties.thing;
    let props = thing.listProperties();
    let obj={}
	for(let i=0; i<props.length; i++){
        if(typeof thing.get(props[i]) == "string"){
        	obj[props[i]] = thing.get(props[i]);
        }
    }
    
    let returnJson = JSON.stringify(obj);
    return (
    	{
            json: returnJson
        }
    );

}