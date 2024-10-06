const cats = ["Milo", "Otis", "Garfield"]

// destructive functions
function destructivelyAppendCat(Milo){
    cats.push(Milo)
}

function destructivelyPrependCat(Garfield){
    cats.unshift(Garfield)
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}

//non-destructive functions
function appendCat(name){
    return [...cats,name]
}

function prependCat(name){
    return [name, ...cats]
}

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat(){
    return cats.slice(1)
}




// Write your solution here!
