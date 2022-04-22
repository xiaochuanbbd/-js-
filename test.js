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
// console.log(style);
// function getMaxSubSum(arr) {
// 	/*let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         let str = 0
//         for (let j = i; j < arr.length; j++) {
//          str += arr[j]
//          max = Math.max(max,str)
//         }

//     }
//     return max
//     */
//    debugger
// 	let max = 0;
// 	let partiaSum = 0;
// 	for (const item of arr) {
// 		partiaSum += item;
// 		max = Math.max(max, partiaSum);
// 		if (partiaSum < 0) partiaSum = 0;
// 	}
//     return max
// }
// let arr = [ -1, 2, 3, -9 ];
// console.log(getMaxSubSum(arr));

// let arr = [1,2,3,4,8]
// arr.splice(1,1,'o')
// console.log(arr);
// arr.splice(2,0 ,10,100)
// console.log(arr);
// let arr = [1,2,5]
// let r = arr.splice(-1,0,3,4)
// console.log(r);
// console.log(arr);
// let arr = ["t", "e", "s", "t"];
// // let r = arr.slice(1,3)
// let r = arr.slice(-1)
// console.log(r);
// let arr = [1,2]
// let arrlike = {
//     0: "something",
//   length: 1
// }
// console.log(arr.concat( arrlike));
// let arr =  [
//     {
//         id:0,
//     },{
//         id:1
//     },
//     {
//         id:1
//     },
// ]

//  let result = arr.filter((item,index,array)=>{
//    return  item.id==1
//  })
//  console.log(result);

// let result =  ["Bilbo", "Gandalf", "Nazgul"]
// let re = result.map((item,index,array)=>{
//     return item.length
// })
// console.log(result);
// console.log(re);

// let arr  = [1,3,1,13,12,18,1,2]
// console.log(arr.sort());

// console.log(arr.sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>{
//  a-b
// }));
// let str = '1,2,3,4,33'
// let arr = [1,2,3,4,1]
// let r = arr.reverse()
// console.log(r);
// console.log(arr);
// function camelize(str){
//  let arr
//  arr = str.split('-')
//  for (let i = 0; i < arr.length; i++) {
//      if(i==0) continue
//    arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)

//  }
//   return arr.join('')

// }
// let r = camelize("background-color-img")
// console.log(r);
// filterRange(arr, a, b)，该函数获取一个数组 arr，在其中查找数值大于或等于 a，且小于或等于 b 的元素，并将结果以数组的形式返回。

// 该函数不应该修改原数组。它应该返回新的数组。
// function filterRange(arr, a, b) {
// 	// let newArr = []
// 	if (!a && !b) return arr;
// 	// for (let i = 0; i < arr.length; i++) {
// 	//   if(arr[i]>=a && arr[i]<=b){
// 	//     newArr.push(i)
// 	//   }
// 	// }
// 	return arr.filter((item) => item >= a && item <= b);
// }
// let arr = [ 5, 3, 8, 1 ];
// console.log(filterRange(arr,1,4));

// console.log( arr);
// 写一个函数 filterRangeInPlace(arr, a, b)，该函数获取一个数组 arr，并删除其中介于 a 和 b 区间以外的所有值。检查：a ≤ arr[i] ≤ b。

// 该函数应该只修改数组。它不应该返回任何东西。
// function filterRangeInPlace(arr, a, b){
//  for (let i = 0; i < arr.length; i++) {
//      if(arr[i]<a || arr[i]>b){
//          arr.splice( i,1)
//      }
//  }
// }

// let arr = [ 5, 3, 8, 1 ,2];
// filterRangeInPlace(arr,1,4)
// console.log(arr);
// function sort(arr){
//   return  arr.sort((a,b)=>b-a)
// }
// let arr = [5, 2, 1, -10, 8];
// console.log(sort(arr));
//copySorted(arr)
// function copySorted(arr){
//          return arr.slice().sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

// function unique(arr){
//     let newArr = []
//      for (let i = 0; i < arr.length; i++) {
//         //  if(!newArr.find(item=> arr[i]==item)){
//         //     newArr.push(arr[i])
//         //  }
//          if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])

//          }
//      }
//      return newArr
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(strings) ); // Hare, Krishna, :-O
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];

//   let usersById = groupById(users);
//   function groupById(users){
//    return  users.reduce((obj,i,index,array)=>{
//         obj[i.id] = i
//         return obj

//       },{})
//   }
// console.log(usersById);、

// 1.防抖截流至少会写乞丐版
// function  fangdou(func) {
//     let
// }
//2.手写去重
// let arr = [1,2,2,2,23,4,2,2,{name:123},{name:123},23]
// function quchong(arr){
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         // if(!newArr.includes(arr[i]))   newArr.push(arr[i])
//         let index = newArr.findIndex((item)=>{
//             return item==arr[i]
//         })
//         if(index ==-1 ){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr

// }
// console.log(quchong(arr));
// 3.字符串连续出现次数最多的字符'
// let str = '11222333333333eeeeeee';
// function substrs(str) {
// 	let obj = {};
// 	strname = '';
// 	max = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (!obj[str.charAt(i)]) {
// 			obj[str.charAt(i)] = 1;
// 		} else {
// 			obj[str.charAt(i)]++;
// 		}
// 	}
//     console.log(obj);
// 	for (var k in obj) {
// 		if (obj[k] > max) {
// 			max = obj[k];
// 			strname = k;
// 		}
// 	}
// 	return strname;
// }
// console.log(substrs(str));
// let str = '123333397983777223';
// function strReduce(str) {
// 	let obj = {};
// 	let strName = '';
// 	let max = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (!obj[str.charAt(i)]) {
// 			obj[str.charAt(i)] = 1;
// 		} else {
// 			obj[str.charAt(i)]++;
// 		}
// 	}
// 	for (const k in obj) {
// 		if (obj.k > max) {
// 			max = obj[k];
// 			strName = k;
// 		}
// 	}
// 	return strName;
// }
// // console.log(strReduce(str));

// //扁平化数组 reduce
// let arr = [ 1, [ 20, 9, 20, [ 2, 3, 4 ] ] ];
// function bianpinghua(arr) {
// 	return arr.reduce((array, i) => {
// 		return array.concat(Array.isArray(i) ? bianpinghua(i) : i);
// 	}, []);
// }
// // console.log(bianpinghua(arr));
// //1-18位随机数
// function createUUID(start, end) {
// 	//创建一个0-9的数字组成的数组
// 	var chars = '0123456789'.split('');
// 	//创建一个随机8-18的数字
// 	var len = Math.floor(Math.random() * (end - start - 1) + start);
// 	//创建一个空数组，用来存放随机数
// 	var uuid = [],
// 		i;
// 	// radix = radix || chars.length;
// 	if (len) {
// 		//循环给定随机数的长度，每次循环给生成一个随机数，将空数组的每一项都填满随机数
// 		for (i = 0; i < len; i++) {
// 			uuid[i] = chars[0 | (Math.random() * 10)];
// 		}
// 	}
// 	//返回组合好通过切割的额随机数
// 	return uuid.join('');
// }
// var num = createUUID(3,5);
// function suijishu(n, m) {
// 	let len  = Math.floor(Math.random() * (m - n  ) + n);//随机数长度
// 	let arr = [];
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = Math.floor(Math.random()*10)//每一次下标都是一次随机数

// 	}
// 	 return arr.join('')
// }
// console.log(suijishu(3,4));

// console.log(Math.floor(Math.random()*10));
// let arr = [ 1, [ 20, 9, 20, [ 2, 3, 4 ] ] ];
// function bianpinghua(arr){
// 	// return arr.join(',').split(',')
// return arr.reduce((array,i)=>{
// 	return array.concat(Array.isArray(i)?bianpinghua(i):i)

// },[])
// }
// console.log(bianpinghua(arr));
// this: 1. 改变函数this指向，传递参数 执行方法，返回方法
// let obj = {
// 	name: 'xc'
// };
// Function.prototype.mycall = function() {
// 	// console.log(arguments);
// 	let ctx = arguments[0] || Window;
// 	let args = Array.from(arguments).slice(1);

// 	ctx.fn = this;
// 	let res = ctx.fn(args.join());
// 	delete ctx.fn;
// 	return res;
// };
// function foo(a, b, c, d) {
// 	console.log(this.name);
// 	console.log(a);
// }
// let name = 123;
// foo.mycall(obj, 1, 2, 3, 3);
// let obj =
// let range = {
// 	from: 1,
// 	to: 5
// };

// range[Symbol.iterator] = function() {
// 	return {
// 		current: this.from,
// 		last: this.to,
// 		next() {
// 			if (this.current <= this.last) {
// 				return { done: false, value: this.current++ };
// 			} else {
// 				return { done: true };
// 			}
// 		}
// 	};
// };
// let r = Array.from(range)
// r.push(6)
// console.log(r);
// for (const num of range) {
// 	console.log(num);
// }'
// let test = '123'
// // for (const char of test) {
// // 		console.log(char);
// // }
// let iterator = test[Symbol.iterator]()
// while(true){
// 	let result = iterator.next()
// 	if(result.done) break
// 	console.log(result.value);
// }
// let likeArray = {
// 	0:'1',
// 	1:"2",
// 	length:2
// }
// let obj = {
// 	num :10
// }
//  let arr = Array.from(likeArray,(i)=>i ** 10)
//  arr.push('3')
//  console.log(arr);
// let str = '𝒳😂'
// let chars  = Array.from(str)
// console.log(chars);
// let obj1 = {
// name:'join'
// }
// let obj2 = {
// 	name:"bob"
// }
// let map = new Map()
// map.set(obj1,123)
// .set(obj2,1456)
// .set(1,333)
// console.log(map);

// let recipeMap = new Map([
// 	['cucumber',500],
// 	['tomatoes',300],
// 	['onion',50]
// ])
// for (const i of recipeMap.keys()) {
// 	console.log(i);
// }
// for (const i of recipeMap.values()) {
// 	console.log(i);
// }
// for (const i of recipeMap.entries() ) {
// 	console.log(i);
// 
// let obj = {
// 	name:'join',
// 	age:23
// }
// let objMap = new Map(Object.entries(obj))
// console.log(objMap.get('name'));
// console.log(objMap);
// let map = new Map()
// map.set('name',"join")
// map.set('age',23)
// let obj = Object.fromEntries(map)
// console.log(obj);
