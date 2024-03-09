// using map and findIndex method
function findNeedle(haystack) {
 const data =  haystack
 .map(c =>c)
 .findIndex(d => d === 'needle')
 return (data >= 0) ? `found the needle at position ${data}` : "Your function didn't return anything"
}
// using for method === work on single needle
function findNeedle(haystack) {
    let number = 0;
 for(let i = 0; i < haystack.length; i++){
     if(haystack[i] === 'needle'){
        number += i
     }
 }
 return (number >= 0) ? `found the needle at position ${number}` : "Your function didn't return anything"
}
//
