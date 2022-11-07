const faveFruit = 'strawberry';
function worstFruit(nameOfFruit){
    if(nameOfFruit.toLowerCase()==='banana'||nameOfFruit.toLowerCase()==='bananas'){
        return `Yes, ${nameOfFruit} is the worst fruit`
    }
    else {
        return `No, ${nameOfFruit} is better than bananas. Bananas are the worst fruit.`
    }
}