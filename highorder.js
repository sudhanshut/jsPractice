
const say = function(said) {
  return ` hello, ${said}`;
};
const upperCase = function(said){
    const a = said.toUpperCase();
    return a;
};

const lowerCase = function(said){
    const b = said.toLowerCase();
    return b;
};
const call = function(said , ti){
  console.log(`orignal :     ${said}`);
  console.log(`transformed : ${ti(said)}`);
  // console.log(`this is : ${ti(said))}`;
};
call('i am sudhanshu' , say);
