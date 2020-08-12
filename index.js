function mapToNegativize(sourceArray){
    let newArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArray[i] = (sourceArray[i] * -1);
        
    }
    return newArray;
}

function mapToNoChange(sourceArray){
    let newArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArray[i] = sourceArray[i];
        
    }
    return newArray;
}

function mapToDouble(sourceArray){
    let newArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArray[i] = (sourceArray[i] * 2);
        
    }
    return newArray;
}

function mapToSquare(sourceArray){
    let newArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        newArray[i] = (sourceArray[i] * sourceArray[i]);
        
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
    let sum = startingPoint;
    for(let i = 0; i < sourceArray.length; i++){
        sum += sourceArray[i];
    }
    return sum
}

function reduceToAllTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] == false){
            return false
        }
        
    }
    return true
}

function reduceToAnyTrue(sourceArray){
    for(let i = 0; i < sourceArray.length; i++){
        if(sourceArray[i] == true){
            return true
        }
        
    }
    return false
}