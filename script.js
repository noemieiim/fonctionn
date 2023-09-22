"use strict";
/**         Fonction
 * 
 * 
 * Declarer trois variables aQ="jean" et bBis="paul" et result
 * 
 * Declarer une fonction checkName(qui possede 2 parametres) qui verifie si les deux noms sont identique 
 * 
 * console log le result
 * 
 */

let aQ="jean";
let bBis="Paul";
let result=checkName(aQ,bBis)

function checkName(name1, name2){
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);