function printerError(s) {
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] > 'm') {
//       count++;
//     }
//   }
//   return count + '/' + s.length;
 //str Replace
//  return s.replace(/[a-m]/g,'').length + '/' + s.length;
// str match
//  return s.match(/[n-z]/g).length + '/' + s.length;
 //^not
 return s.match(/[^a-m]/g).length + '/' + s.length;
}
console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbcccbbbbbbbmmmmmmmmmmmmmmmmmmmxyytrrsgsdzvzhtz'));
