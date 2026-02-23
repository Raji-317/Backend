// let k=53;
// for(let i=0;i<5;i++){
//  console.log("hello:"+k);
// }
// console.log(process.argv);
let args=process.argv;
for(let i=2;i<args.length;i++){
    console.log("hello:"+args[i]);
}
const m=require("./math");
console.log(m);
console.log(m.sum(2,3));
console.log(m.mul(2,3));
console.log(m.pi);
console.log(m.e);