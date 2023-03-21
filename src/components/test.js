function greet(name) {

    const date = new Date();
    const hours = date.getHours()
    
    let greeting;
    if(hours >= 4 && hours < 12){
        greeting = 'morning'
    }else if(hours >= 12 && hours < 17){
        greeting = 'afternoon'
    }else if(hours >= 17 && hours < 20){
        greeting = 'evening'
    }
    console.log(`Good ${greeting} ${name}`)
}

greet('fredigga')