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

export function cookingStatus(remainingTime)
{
    if (remainingTime === undefined)
        return ('You forgot to set the timer.')
    if (remainingTime === 0)
        return ('Lasagna is done.')
    if (remainingTime > 0)
        return ('Not done, please wait.');
}

export function preparationTime(layers, timePerLayers)
{
    if (timePerLayers === undefined)
        timePerLayers = 2;
    return (layers.length * timePerLayers);
}

export function quantities(array)
{
    let object = {
        noodles : 0,
        sauce : 0
    }

    for(let i = 0; i < array.length; i++)
    {
        array[i] == 'noodles' ? object.noodles += 50 : null
        array[i] == 'sauce' ? object.sauce += 0.2 : null
    }
    return (object);
}

export function addSecretIngredient(friendList, myList)
{
    myList.push(friendList[friendList.length - 1])
}

export function scaleRecipe(recipe, portions)
{
    let new_recipe = {}

    for (let key in recipe)
    {
        new_recipe[key] = recipe[key] / 2 * portions;
    }

    return (new_recipe);
}