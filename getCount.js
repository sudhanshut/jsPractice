// getCount using match method
function getCount(str) {
  return (str.match(/[aeiou]/ig) || 0).length;
}
// using 2 for method
function getCount(str){
  let vowelCount = 0;
  const vowels = ['a','e','i','o','u'];
  for(let i = 0 ; i < str.length; i++){
    for(let j = 0 ; j < vowels.length; j++){
        if(str[i] === vowels[j]){
          vowelCount++
        }
    }
  }
  return vowelCount;
}
// using include method
function getCount(str){
  let vowelCount = 0;
  const vowels = ['a','e','i','o','u'];
  for(let i = 0 ; i < str.length; i++ ){
      if(vowels.includes(str[i])){
          vowelCount++
      }
  }
  return vowelCount;
}
// using replace method
function getCount(str){
  return str.replace(/[^aeiou]/gi, '').length
}
// using split and filter Method
function getCount(str){
  return str.split('').filter(c => 'aeiouAEIOU'.includes(c)).length
}

