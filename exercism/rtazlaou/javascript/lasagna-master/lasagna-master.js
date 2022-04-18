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
export function cookingStatus(time) {
    if (String(time) == '0')
        return('Lasagna is done.');
    else if (!isNaN(time) && time != 0)
        return('Not done, please wait.');
    else if (!time)
        return ('You forgot to set the timer.')
}

export function preparationTime(layers, time = 2) {
   return (layers.length * time); 
}

export function quantities(layers) {
    let nnoodles = 0;
    let nsauce = 0;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles')
            nnoodles++;
        else if (layers[i] === 'sauce')
            nsauce++;
    }
    const obj = {
        noodles: nnoodles * 50,
        sauce: nsauce * 0.2
    }
    return (obj);
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    let obj = {}
    for (let ingredient in recipe)
        obj[ingredient] = recipe[ingredient] * portions / 2;
    return (obj)
}