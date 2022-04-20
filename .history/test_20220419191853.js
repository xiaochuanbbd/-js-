// '' + 1 + 0; //‘10’
// '' - 1 + 0; //  -1
// true + false; //1
// 6 / '3'; //2
// '2' * '3'; //6
// 4 + 5 + 'px'; //‘9px‘
// '$' + 4 + 5; //“$45”
// '4' - 2; // 2
// '4px' - 2; //NaN
// '  -9  ' + 5; //-9 5
// '  -9  ' - 5; //'-14'
// null + 1; //1
// undefined + 1; //NaN
// ' \t \n' - 2; //-2
// // console.log(undefined ==0);
// // console.log(undefined ===undefined);
// // console.log(null ===null);
// 5 > 4; //true
// 'apple' > 'pineapple'; //false
// '2' > '12'; //false true
// undefined == null; //true
// undefined === null; //false
// null == '\n0\n'; //true
// null === +'\n0\n'; //false
// let result;

// result = (a + b < 4 )? 'Below' : 'Over';
// let login = 'aaa'
// let message = login=='Employee'
// ?'hello'
// :login=='Director'
// ?'Greetings'
// :login==''
// ?'No login'
// :''
// console.log(message);
// let a  ,b=2
// console.log(a ?? '暂无');
// let firstname = null
// let lastname = null
// let nickname = 'xc'
// console.log(firstname ?? lastname?? nickname?? 'none');
// let i = 0
// while(i<3){
//     console.log(i);
//     i++
// }
// let i = 3
// while(i){
//     console.log(i);
//     i--
// }
// let i = 0
// do{
//     console.log(i);
//     i++
// } while(i<3)
// for (let i = 0; i <10; i++) {
//      if(i % 2!==0) {continue}
//      console.log(i);

// }
// for (let i = 0;i<3;i++){
//     console.log(i);
// }
// let i = 0
// while(i<3){
//     console.log(i++);
// }
// let n = 10;
// sushu:
// for (let i = 2; i <=n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if (i % j == 0) continue sushu;
// 	}
// 	console.log(i);
// }
// let x = 'value1112'
// switch (x){
//     case 'value1':
//     console.log(1);
//     break;
//     case 'value2':
//         console.log(2);
//         break;
//         default:
//             console.log('nodefined');
//             break
// }
// let b = 'Edge'
// if(b==='Edge'){
//     console.log("You've got the Edge!" );
// }else if(b==='Chrome'||b==='Firefox'||b==='Safari'||b==='Opera'){

// console.log('Okay we support these browsers too');
// }else{
// console.log('We hope that this page looks ok!');

// }

// function showMessage(from ,text = aaa()){
//     console.log(from +text);
// }
// function aaa(){
// return 2
// }
// showMessage

// let obj  ={
//     a:{
//         b:{
//             c:123
//         }
//     }
// }
// console.log(obj.a.b.f??'-');
// function hello(name) {
// 	let phrase = `hello ,${name}!`;
// 	say(phrase);
// }

// function say(phrase) {
// 	alert(`** ${phrase} **`);
// }

// hello('xxc')
// let fruit = 'apple'
// let bag = {
//     [fruit +'123']:5
// }
// console.log(bag.apple123);
// let obj = {
//     return:0,
//     Symbol:123,
//     0:0
// }
// console.log(obj.Symbol);
// console.log(obj[0]);
// console.log(obj['0']);
// console.log('0' in obj);
// let user = {
//     name:'join',
//     surnname:'smith',

// }
// user.name = 'Peta'
// delete user.name

// function isEmpty(obj){
//     for (const key in obj) {

//            return false

//     }
//     return true
// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   function qiuhe(obj){
//       let total = 0
//     for (const key in obj) {
//         total+=  obj[key]
//     }
//     return total
// }
// console.log(qiuhe(salaries));

// // 在调用之前
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

//  console.log( multiplyNumeric(menu));
//   function multiplyNumeric(menu){
//       for (const k in menu) {
//           if (typeof menu[k]==='number') {
//               menu[k] *=2
//           }
//       }
//       return menu
//   }

// let user = {
//     name:'join',
//     age:30
// }
// let u2 = {
//     name:'bob',
//     age:23
// }
// // let clone = {}
// // for (const k in user) {

// //         clone[k] = user[k]

// // }
// // let clone = Object.assign({},user,u2)
// // let clone = {...user}
// // clone.name = 'Pate'
// // console.log(clone);
// console.log(user.name);
// debugger
// user=null
// console.log(user.name);

// let calculator = {
// 	// ……你的代码……
// 	//read() 提示输入两个值，并将其保存为对象属性。
// 	read(x, y) {
// 		this.x = x;
// 		this.x = y;
// 	},
// 	// sum() 返回保存的值的和。
// 	sum(x, y) {
// 		return x + y;
// 	},
// 	// mul() 将保存的值相乘并返回计算结果。
// 	mul(x, y) {
// 		return x * y;
// 	}
// };

//  calculator.sum(1,2)
// console.log(calculator);
// console.log(calculator.sum(1,2));
// console.log(calculator.mul(1,2));
// console.log(+undefined);
// console.log(+{});
// console.log(+'123最次啊吗');
// console.log(+'123');
// console.log(+null);
// console.log(+false);

// function myNew (context){
//    this = {}

//     return this
// }
// let user = new function(){
//     this.name = "join";
//     this.isAdmin = false
// }
// console.log(user);
// function user(){
//     console.log(new.target);
// }

// user()
// new user()
// let obj = {
//     name:10
// }
// function A() {
//     return obj

//  }
// function B() {
//     return obj

//  }

// let a = new A;
// let b = new B;

// console.log( a == b ); // true

// function Calculator(a, b) {
// 	this.read = function() {
// 		this.a = a;
// 		this.b = b;
// 	};
// 	this.sum = function() {
// 		return this.a + this.b;
// 	};
// 	this.mul = function() {
// 		return this.a * this.b;
// 	};
// }
// let calculator = new Calculator(10,20);
// calculator.read();

// console.log('Sum=' + calculator.sum());
// console.log('Mul=' + calculator.mul());
// console.log({}+{});
// console.log('123'-'12');
// console.log(alert({}));
// Object.defineProperties
/*
了解的，比如
1. 响应式原理从defined Properties换到了proxy代理数据，减少了对data数据的监听，更加添加和修改属性。 
2. vue3的options采用的是composition API vue2是直接在vue组件内书写，现在是按需引入需要的option，提升了代码解藕程度
3. vue2 组件内的的template只允许一个根节点，vue3不受限制
4. vue3的hook代替vue的mixin,封装了可以复用的代码
5. vue2用的是webpack，现在用了全新的vite,vite是充分利用浏览器接管打包程序的部分工作.打包编译更快
。。。。
// */
// console.log( String(null));
// console.log( String(undefined));
// console.log( String(false));
// console.log( String(true));
// console.log( String({}));
// console.log( String(1));
// console.log( String(function(){}));
// console.log( String(Symbol('id')));
// console.log( String([]));

// console.log(toString(undefined));
// console.log(toString(false));
// console.log(+false);
// console.log(+'123hhhh');
// console.log(+'ddd');
// console.log(+{});
// console.log(+'');

// let a = 10000000
// let b = 1_000_000_000
// let c = 7.3e9
// let d = 1e-6
// console.log(a,b,c,d);
// let num = 12323
// console.log(12323..toString(36)); //9ib

let num  = 2223.927392377397
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log(Math.trunc(num));

function foo(num){
    return Math.round(num * 100 ) /100//小数点后两位
}
console.log(foo(num));
