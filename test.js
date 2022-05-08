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

// let num  = 2223.927392377397
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));

// function foo(num){
//     return Math.round(num * 100 ) /100//小数点后两位
// }
// console.log(foo(num));
// let a = {}
// let b= {}
// console.log(Object.is(NaN,NaN)) //true
// console.log(Object.is(0,-0))//false
// console.log(Object.is(a,b))//false
// console.log(Object.is(NaN===NaN))//false

// console.log(Math.max('1110',0,9,7,1,{}));

// function nums(n,m){
//     if(isFinite(n) && isFinite(m)){
//         return +n + +m
//     }else{
//         return'请输入数字哦 ～'
//     }
// }
// console.log(nums(10,10));
// console.log(nums(10,{}));
// console.log(nums(10,false));
// console.log(nums(10,'10'));

// console.log(Math.round(6.35*10)/10);
// console.log(Math.round(6.35*10)/10);
// console.log((6.35 * 10).toFixed(20));
// 随机生成min-max的随机数取整数
// 1. 生成 0.5-3.5的值，用round 四舍五入 从而将所需的概率添加到取值范围的边界
// function random(min, max) {
//     let rand = min - 0.5 +Math.random()* (max-min+1)
//     return Math.round(rand)
// }
// // 2.用math.floor向下取整来取范围从min-max+1的随机数
// function random2(min,max){
//     let rand = min + Math.random() * (max +1 -min)
//     return Math.floor(rand)
// }
// // console.log(Math.random()*5+1);
// console.log(random(1, 3));
// console.log(random2(1, 3));

// console.log(Math.round(Math.random()* 10));

// function xunhuan(num){
//     let str = ''
//     for (let i = 0; i < num; i++) {
//         if(i==0){}
//         str+=   Math.floor(Math.random() *10 )

//     }
//     return str
// }

// console.log(xunhuan(4));
// let str = "Winsww"
// console.log(str.indexOf('w',3));
// console.log(str.indexOf('1'));
//
// let str = 'As sly as a fox, as strong as an ox';
// let target  = 'as'

// let pos = 0
// while(true){
//     let foundPos= str.indexOf(target,pos)
//     if(foundPos==-1) break
//     console.log(foundPos);
//     pos = foundPos+1
// }
// let str = 'http://127.0.0.1:9529/#/contest/add?id=282&name=xc';
// str = str.slice(str.indexOf('?') + 1, str.length);
// let strArr = str.split('&');
// let obj = {};
// for (let i = 0; i < strArr.length; i++) {
// 	let key = strArr[i].substring(0, strArr[i].indexOf('='));
// 	let value = strArr[i].substring(strArr[i].indexOf('=') + 1, strArr[i].length);
// 	obj[key] = value;
// }
// console.log(obj);
// let str  = 'stringify2'
// // console.log(str.slice(6,2));
// console.log(str.substring(-2,-4));
// console.log(str.slice(-2,-1));‘
// let str = " \`待填项\`分（单次罚时/分钟）`"
// // this.form.ACMcompetitionRulesMarkdown = this.form.ACMcompetitionRulesMarkdown.replace(/待填项/g, this.form.penaltyTenErrorScore)
// // /^a.*b$/
// let str2  = '提交错误次数 ×  <code>待填项</code> <code>待填项</code>分（单次罚时/分钟'
// console.log(str.replace(/`.*?`/,'123'))

// console.log(str2.replace(/<code>(.*?)<\/code>/,'123'))
// function ucFirst(str){
//   return  str[0].toUpperCase()+ str.slice(1)
// }
// console.log(ucFirst('join'));
// function checkSpam(str){
//     str = str.toLowerCase()
// //果 str 包含 viagra 或 XXX 就返回 true，否则返回 false。
//   return str.includes('viagra') ||str.includes('XXX')

// }

// console.log(checkSpam('xxx'));
// 创建函数 truncate(str, maxlength) 来检查 str 的长度，如果超过 maxlength —— 应使用 "…" 来代替 str 的结尾部分，长度仍然等于 maxlength。

// 函数的结果应该是截断后的文本（如果需要的话）。
// function truncate(str, maxlength){
//     if(str.length>maxlength){
//         return   str.slice(0,maxlength-1)+'...'

//     }else{
//         return str
//     }
// }
// console.log(truncate("What I'd like to tell on this topic is:", 20));
// console.log(truncate("What  ", 20));
// function extractCurrencyValue(str){
//     return +str.slice(1)
// }
// console.log(extractCurrencyValue('$120'));

// let arr = ['apple','bule','orange']
// // for (const i of arr) {
// //     console.log(i);
// // }

// console.log(arr+1);
// let style = ['jazz', 'blues']
// style.push('rok-n-roll')
// console.log(style);

// style[Math.floor((style.length - 1) / 2)] = 'classics'
// console.log(style);

// style.shift()
// console.log(style);

// style.unshift('Rap ', 'Reggae')
// // console.log(style);
// function Calculator(str){
//   this.method = {
//     '-':(a,b)=>a-b,
//     '+':(a,b)=>a+b,
//   }
//  this.calculate = function (str){

//    let arr = str.split(' ')  
//    a = +arr[0]
//    op = arr[1]
//    b = +arr[2]
//    if(isNaN(a) ||isNaN(b)){
//      return
//    }
//   return this.method[op](a,b)
//  }
//  this.addMethod = function(name, func){
//    this.method[name] =func
//  }
// }
// let calc = new Calculator;
// calc.addMethod('*',(a,b)=>a*b)
// console.log( calc.calculate("3 * 7") ); // 10

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
// let names = users.map((item)=>{
//     return item.name
// })
// console.log(users);
// console.log(names);
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];
// let usersMapped = users.map((item)=>{
//   return {fullName:item.name +' '+ item.surname,id:item.id}
// })
// console.log(usersMapped);
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];
// function sortByAge(arr){
//    return arr.sort((a,b)=> b.age-a.age)
// }
// console.log(sortByAge(arr));
// let arr = [1, 2, 3];

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1)); // 从 0 到 i 的随机索引

//     // 交换元素 array[i] 和 array[j]
//     // 我们使用“解构分配（destructuring assignment）”语法来实现它
//     // 你将在后面的章节中找到有关该语法的更多详细信息
//     // 可以写成：
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array
// }
// // console.log(shuffle(arr));
// shuffle(arr)
// // 所有可能排列的出现次数
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // 显示所有可能排列的出现次数
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }
// let john = {
//   name: "John",
//   age: 25
// };
// let pete = {
//   name: "Pete",
//   age: 30
// };
// let mary = {
//   name: "Mary",
//   age: 29
// };

// let arr = [john, pete, mary];

// function getAverageAge(users) {
//   let num = users.reduce((num, item) => {
//   return  num + item.age

//   }, 0)
//   return num/users.length
// }
// console.log(getAverageAge(arr));
// function pow(x,n){
//   let result = 1
//   for(let i = 0;i<n;i++){
//     result *=x
//   }
//   return result
// }
// function pow(x,n){
//   if(n==1) {
//     return x
//   }else{
//     return x * pow(x,n-1)
//   }
// }
// console.log(pow(2,3));
// 2* (2,3-1) = 4
// 4* (2-1) =   
// let company = { // 是同一个对象，简洁起见被压缩了
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 1600
//   }],
//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],
//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };
// let a = sumSalaries(company)
// console.log(a);

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((price, i) => {
//       return price += i.salary
//     }, 0)
//   } else {
//     let sun = 0
//     for (const subdep of Object.values(department)) {
//       sun += sumSalaries(subdep)
//     }
//     return sun

//   }
// }
// function sum(a){
//   let num =a
//   function f (b){
//     num +=b
//     return f
//   }
//   f.toString = function(){
//     return num
//   }
//   return f
// }
// console.log(sum(1)(2) == 4);
//  function func(){
//    let value = '13'
//    return fun
//  }
//  func()()
//  var value = '13'
//  let fun = new Function('console.log(value)')
//  fun()
//  function func(){
//   let value = '13'
//   let fun = function(){
//     console.log(value);
//   }
//   return fun
// }
// func()()
// let fun1 = function (phres,who){

//   console.log(phres,who);
// }
// let fun2 = function (){
//   console.log(2);
// }
// let Tid = setTimeout(fun1, 1000,'hello','join');
// console.log(Tid)
// clearTimeout(Tid);
// let delay= 5000
// let timeId = setTimeout(() => {
//   if
// }, delay);
// let i = 1
// // setInterval(function(){
// //   i++
// //   console.log(i);
// // },1000)
// function func(){
//   i++
// }
// setTimeout(function run()  {
//   func
// }, timeout);
// let start = Date.now()
// let times = []
// setTimeout(function run(){
//   times.push(Date.now()-start)
//   if(start+100<Date.now()){
//     console.log(times)
//   }else{
//     setTimeout(run);
//   }
// })
// function printNumbers(from, to){
//  let timer =  setInterval(()=>{
//     if(from>to){
//       clearInterval(timer)
//     }else{
//       console.log(from);
//       from++
//     }
//   },1000)
// }
// printNumbers(1, 4)
// function printNumbers(from, to){
//   let timer =  setTimeout(function run(){
//       if(from>to){
//         clearInterval(timer)
//       }else{
// //         console.log(from);
// //          timer =  setTimeout(run,1000)
// //         from++

// //       }
// //   },1000)
// //  }
// let worker = {
//   someMethod(){
//     return 1
//   },
//   show(min,max){
//      return min+ max
//   }
// }

// function cachingDecorator (func,hash){
//   let cache = new Map()
//   return function(x){
//     console.log(hash(arguments));
//     let key = hash(arguments)
//     if(cache.has(key)){
//       return cache.get(key)
//     }
//     let result = func.call(this,...arguments)
//     cache.set(key,result)
//     return result
//   }

// }
// function hash(args){
//   return args[0] +','+ args[1]
// }
// worker.show = cachingDecorator(worker.show,hash)
// console.log(worker.show(1,2));
// console.log(worker.show(1,3));
// // let fn = worker.show
// fn(2)
// fn.call(worker,2)

// function say(){
//   console.log(this.name);
// }
// say.call({name:123});
// let arr = [].join.call([1,2,3])
// console.log(arr);
// function work(a, b) {
//   console.log(a + b); // work 是一个任意的函数或方法
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log('call:' + args.join()); // "call:1,2", "call:4,5"
// }

// function spy(func) {

//   function warpper(...args) {
//     warpper.calls.push(args)
//     return func.apply(this, args)
//   }
//   warpper.calls = []
//   return warpper
// }
// function f(x) {
//   console.log(x);
// }

// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // 在 1000ms 后显示 "test"
// f1500("test"); // 在 1500ms 后显示 "test"
// function delay(func,ms){
//    return function (){
//      setTimeout(() => {
//        func.call(this,arguments)
//      }, ms);
//    }
// }
// function throttle(func,ms){
//   let isThrottled = false,
//   saveArgs,
//   saveThis
//     function warpper (){
//     if(isThrottled){
//       saveArgs = arguments;
//       saveThis = this;
//       return;
//     }
//     this.isThrottled = true
//     func.apply(this,arguments)
//     setTimeout(() => {
//       this.isThrottled = false
//       if(saveArgs){
//         warpper.apply(saveArgs,saveThis)
//         saveArgs = saveThis = null
//       }
//     }, ms);
//   }
//   return warpper
// // }
// let obj = {
//   user:'join'

// }
// function func(){
//   console.log(this.user+'+'+ [...arguments])
// }
// let fn = func.bind(obj)
// console.log(fn);
// // fn('hello','dhh')
// let user = {
//   firstName: 'Hoin',
//   sayHI(a,b) {
//     console.log(`hello:${this.firstName}`);
//     console.log(a*b);
//   }
// }
// let sayHI = user.sayHI.bind(user)
// setTimeout(() => {
//   sayHI(10,10)
// }, 1000);
// user = {
//   sayHi() {
//     console.log("Another user in setTimeout!");
//   }
// };
// let user = {
//   name:'xc',
//   say(){
//     console.log(this.name);
//   },
//   eat(){
//     console.log(this.name)
//   }

// }
// for (const key in user) {
//   if(typeof user[key] ==='function'){
//     user[key] =  user[key].bind(user)
//   }
// }
// let say  = user.say

// say()
// let obj = {
//   name:'wl',
//   say:say
// }
// obj.say()
// function mul(a,b){
//   return a*b
// }
// let double  = mul.bind(null)
// console.log(
// function partial(func,...argsBound){
//   return function (...args){
//     return func.call(this,...argsBound,...args)
//   }
// }
// let user = {
//   firstName:'join',
//   say(time,phrase){
//     console.log(`[${time}] ${this.firstName}: ${phrase}!`)
//   }
// }
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())
// user.sayNow('hello')
//   let obj = {
//     name:"wl"
//   }
//   // let des = Object.getOwnPropertyDescriptor(obj)
//   Object.defineProperty(obj,'name',{
// configurable:false
//   })
//   //  obj.name = 'pete'
//  delete obj.name
//  let obj = {
//    name:"john",
//    surname:'smith',
//    get propName(){
//      return `${this.name} ${this.surname}`
//    },
//    set propName(value){
//      [this.name,this.surname] = value.split(
//        ' '
//      )
//    }
//  }
//  console.log(obj.propName);
//  obj.propName = 'wang liang'
//  console.log(obj.propName);
// let user = {
//   name: 'John',
//   surname: 'Smith'
// }
// Object.defineProperty(user, 'fullName', {
//   get() {
//     return `${this.name} ${this.surname}`
//   },
//   set(value) {
//     return [this.name, this.surname] = value.split(' ')
//   }
// })
// console.log(user.fullName);
// user.fullName = 'john bob'
// console.log(user.fullName);
// let user = {
//   get name(){
//     return this._name
//   },
//   set name(value){
//     if(value.length<4){

//       console.log('value太短了');
//       return
//     }
//     this._name  = value
//   }
// }
// user.name = 'pete'
// console.log(user.name);
// user.name = ''
// // console.log(user.name);

// function User(name, brithday) {
//   this.name = name;
//   this.brithday = brithday,
//     Object.defineProperty(this, 'age', {
//       get() {
//         let todayYear = new Date().getFullYear()
//         return todayYear - this.brithday.getFullYear()
//       }
//     })
// }
// let john = new User('John',new Date(1998,6,13))
// console.log(john.brithday);
// console.log(john.age);
// let animal = {
//   eats:true,
//   walk(){
//     console.log('animal walk');
//   }
// }
// // let rabbit = {
// //   jumps:true,
// //   __proto__:animal
// // }
// // rabbit.walk()
// let user ={
//   name:'john',
//   surname:'smith',
//   set fullName(value){
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// let admin = {
//   __proto__:user,
//   isAdmin:true
// }
// // console.log(admin.fullName);
// // admin.fullName = 'alice smith'
// // user.fullName = 'bob smith'
// // console.log(admin.fullName);
// // console.log(user.fullName);
// // console.log(admin);
// // for (const key in admin) {
// //   console.log(key);
// // // }
// // for (const key in admin) {
// //   if (admin.hasOwnProperty(key)) {
// //     console.log(key);//
// //   }
// // }
// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__:head

// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__:table

// };

// let pockets = {
//   money: 2000,
//   __proto__:bed
// };
// // console.log(pockets.pen);
// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // 这只仓鼠找到了食物
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple

// // 这只仓鼠也找到了食物，为什么？请修复它。
// // console.log( lazy.stomach ); // apple

// let obj = {}
// console.log(obj.__proto__);
// let animal = {
//   eats:true
// }
// let rabbit = {
//   name:'xtt'
// }
//   rabbit  = Object.create(animal,{
//   jumps:{
//     value:true
//   }
// })
// // console.log(rabbit.eats);
// // console.log(Object.getPrototypeOf(rabbit)===animal);
// // // console.log(Object.setPrototypeOf(rabbit,{}));
// // console.log(rabbit.eats);
// // console.log(rabbit.jumps);
// console.log(rabbit.name);
// console.log(Object.keys(rabbit));
// console.log(Object.values(rabbit));
// console.log(Object.entries(rabbit));
// console.log(Object.getPrototypeOf(rabbit));
// console.log(Reflect.ownKeys(rabbit));
// for (const key in rabbit) {
//   console.log(key);
// }
// let dictionary = Object.create(null,{
//   toString:{
//     value(){
//       return '123'
//     }
//   }
// });

// // 你的添加 dictionary.toString 方法的代码

// // 添加一些数据
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // 这里 __proto__ 是一个常规的属性键

// // 在循环中只有 apple 和 __proto__
// for(let key in dictionary) {
//   console.log(key); // "apple", then "__proto__"
// }

// // 你的 toString 方法在发挥作用
// console.log(dictionary); // "apple,__proto__"
// class User{
//   constructor(name){
//     this.name = name
//   }
//   sayHi(){
//     console.log(this.name);
//   }
// }
// console.log(typeof User);//function
// console.log(User===User.prototype.constructor); //true
// console.log(User.prototype.sayHi);
// console.log(Object.getOwnPropertyNames(User.prototype));
// for (const key in User) {
//   console.log(key);
// }
// let obj = {

// }
//   class User {
//   constructor(name){
//     this.name = name
//   }
//   get name(){
//     return this._name
//   }
//   set name(val){
//     this._name  = val
//   }
// }
// let user = new User('wl')
// // console.log(user.name);
// user.name = 'xc'
// console.log(user.name);
// class Animal{
//   constructor(name,){
//     this.speed = 0;
//     this.name = name
//   }
//   run(speed){
//     this.speed = speed;
//     console.log(`${this.name} runs whit speed ${this.speed}`);
//   }
//   stop(){
//     this.speed = 0
//     console.log(`${this.name} stands still`);
//   }
  
// }
// let animal = new Animal('my animal')

// class Rabbit extends Animal{
//  constructor(name,earLength){
//    super(name)
   
//    this.earLength = earLength
//  }
//   hide(){
//     console.log(`${this.name} hides `);
//   }
//   stop(){
//     // super.stop()
//     // this.hide()
//     setTimeout(()=>{
//   super.stop()
//     }, 1000);
//   }
// }
// let rabbit = new Rabbit('whith Rabbit')
// rabbit.run(5)
// rabbit.hide()
// rabbit.stop()
// console.log(Rabbit.prototype.__proto__===Animal.prototype);
// console.log(rabbit.__proto__.__proto__===Animal.prototype);//true
// function f(phrase){
//   return class {
//     sayHi(){
//       console.log(phrase);
//     }
//   }
// }
// class User extends f('hello'){}
// let u = new User()
// u.sayHi()
// class user{
//   static say(){
//     console.log('enne');
//   }
//   eat(){
//     console.log('eat');
//   }
// }
// user.say()
//  let u = new user()
//  u.eat()
//  u.say()
// class Article {
//   constructor(title,date){
//     this.data = date
//     this.title = title
//   }
//   static commpare(article1,article2){
//     return article1.date - article2.date
//   }
// }
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1)) 
// ]
// articles.sort(Article.commpare)
// console.log(articles[0].title);
// class Article {
//   constructor (title,date){
//  this.title = title;
//  this.date = date
//   }
//   static createTodays(){
//     return new this("Today's digest",new Date())

//   }
// }
// let article = Article.createTodays()
// console.log(article.title);
// console.log(article.date);
// class Animal {
//   static plant = "earth"
//   constructor(name,speed) {
//     this.name = name;
//     this.speed = speed
//   }
//   run(speed =0){
//     this.speed += speed;
//     console.log(`${this.name} runs with speed ${this.speed}.`);
//   }
//   static compare(animal1,animal2){
//     return animal1.speed - animal2.speed
//   }
// }

// class Rabbit extends Animal {
//   hide(){
//     console.log('hide');
//   }
// }
// let rabbits =[new Rabbit('白兔子',5),new Rabbit('黑兔子',10)]
// // rabbits.sort(Rabbit.compare)
// // rabbits[0].run()
// // console.log(Rabbit.plant);
// console.log(rabbits[0].__proto__);
// console.log(Rabbit.__proto__);
// // console.log(Animal.__proto__);
// console.log('异步加载');
// function newFn(){
//   console.log('我是newfn');
// }
let obj = {
  name:'xl',
  age:12
}
let arr = [1,2,3,4]
for (const key in obj) {
console.log(key);
}
 
for (const iterator of arr) {
  console.log(iterator);
}