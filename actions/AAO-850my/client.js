function(properties, context) {

    
    const logFields = (thingProps, thing, nested) => {
        console.log(nested?"# Nested field #":"");
        for(let i=0; i<thingProps.length; i++){
            const field = thing.get(thingProps[i]);
            if(field&&field.hasOwnProperty('listProperties')&&field.hasOwnProperty('get')){
                let props = field.listProperties();
                logFields(props, field, true);
            }else if(field&&(!field.hasOwnProperty('listProperties'))&&field.hasOwnProperty('get')){
                console.log("# field: " + thingProps[i] + " #");
                console.log(field.get(0,0));
            }else{
                console.log("# field: " + thingProps[i] + " #");
                console.log(field);
            }
        }
  
    }

	let thing = properties.thing;
    let thingProps = thing.listProperties();
    
    logFields(thingProps, thing, false);



}