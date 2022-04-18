/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime){
    if (remainingTime === 0)
        return('Lasagna is done.');
    else if (remainingTime === undefined)
        return('You forgot to set the timer.');
    else
        return('Not done, please wait.');
}

export function preparationTime(layers, time){
    if (time === undefined)
        return(layers.length * 2);
    else 
        return(layers.length * time);

}

export function quantities(layers){

    let n = 0;
    let s = 0;
    for(let k in layers){
        if (layers[k] === "noodles")
            n += 50;
        else if (layers[k] === "sauce")
            s += 0.2;
    }
    let quant = {
        'noodles':n,
        'sauce':s
    };
    return (quant);
}

export function addSecretIngredient(friendsList, myList){

    myList.push(friendsList[friendsList.length - 1]);    
}

export function scaleRecipe(recipe, portions){

    const recipe2 = {};
    for(let k in recipe)
        recipe2[k] = recipe[k] * portions / 2
    return (recipe2);
}
