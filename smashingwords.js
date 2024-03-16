function smash (words) {
    //join
     return words.join(' ');
   //map
      return words.map((data) => data.split(',')).join(' ');
    for
    let val = '';
    for(let i = 0; i < words.length; i++){
      const a = val += words[i];
    }
    return val;

};
console.log(smash(['hello', 'world', 'this', 'is', 'great']));
