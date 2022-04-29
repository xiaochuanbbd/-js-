//  let now   =  new Date( )
//  console.log(now.getHours()+4);
//  now.setHours(now.getHours()+6)
//  console.log(now);
// let start =Date.now()
// for (let i = 0; i < 1000000000; i++) {
//  let dosomething = i*i*i
// }
// let end =Date.now()
// console.log(end-start);
// function getSecondsToTomorrow(){
// 	let now =new Date()
// 	let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,)
// let diff = tomorrow-now
// return Math.floor(diff/1000)
// }
// console.log( getSecondsToTomorrow());
// function formatDate(date){
// 	let diff = new Date()-date
// 	if(diff<1000){
// 		return 'right now'
// 	}
// 	let sec = Math.floor(diff/1000)// 毫秒转为秒
// 	if(sec<60){
// 		return  sec +"sec.ago"
// 	}
// 	let min = Math.floor(diff/60000)
// 	if(min<60){
// 		return min+"min. ago"
// 	}
// 	let d = date
// 	d = [
// 		'0' + d.getDate(),
// 		'0' + (d.getMonth() + 1),
// 		'' + d.getFullYear(),
// 		'0' + d.getHours(),
// 		'0' + d.getMinutes()
// 	  ].map(component => component.slice(-2)); // 得到每个组件的后两位

// 	return d.slice(0,3).join('.')+' '+d.slice(3).join(':')
// }
// // console.log(formatDate(new Date(new Date - 86400 * 1000)))
// let id = Symbol('id')
// let student = {
// 	name: 'John',
// 	age: 30,
// 	isAdmin: false,
// 	courses: ['html', 'css', 'js'],
// 	wife: null,
// 	obj:{
// 		name:'bob',
// 		age:20
// 	},
// 	a:undefined,
// [id]:id,
// say:function(){

// }

//   };
//   let json = JSON.stringify(student)
//   console.log(json);
//   console.log(typeof json);
// let room = {
// 	number:23
// }
// let meetup = {
// 	title:'a',
// 	obj:[{name:'join'},{name:'alice'}]
// 	,
// 	place:room
// }
// room.occupiedBy = meetup
//  let json = JSON.stringify(meetup,function replacer(key,value){
// 	 return  (key==='occupiedBy')?undefined:value
//  },7)
//  console.log(json);
// let room = {
// 	number:23,
// 	toJSON(){
// 		return 13
// 	}
// }
// let json = JSON.stringify(room)
// // console.log(json);
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// console.log( meetup.date.getDate() ); // Error!

// let user = {
// 	name: "John Smith",
// 	age: 35
//   };

//   let json =JSON.stringify(user)
//   let userjson = JSON.parse(json)
//   user.age = 23
//   console.log(user);
//   console.log(userjson);
// let room = {
// 	number: 23
//   };

//   let meetup = {
// 	title: "Conference",
// 	occupiedBy: [{name: "John"}, {name: "Alice"}],
// 	place: room
//   };

//   // 循环引用
// //   room.occupiedBy = meetup;
// //   meetup.self = meetup;
//   console.log( JSON.stringify(meetup, function replacer(key, value) {
//  return (key!=='' && value ==meetup) ?undefined :value
//   }));
//  function sumTo(num){
// 	//  let n = 0
// 	//  for (let i = 1; i <= num; i++) {
// 	// 	 n+=i
// 	//  }
// 	// if(num===1){
// 	// 	return 1
// 	// }else{
// 	// 	num+=sumTo(num-1)
// 	// }
// 	//  return num
// 	return num * (num+1) / 2
//  }
//  console.log(sumTo(100));
// function factorial(num){
// 	if(num===1){
// 		return 1
// 	}else{
// 		num *= factorial(num-1)
// 	}
// 	return num
// }
// console.log(factorial(5));
// //下一个数字是前两个数字的和
// function fib(n){
//   return n<=1?n:fib(n-1) + fib(n-2)
// }
// console.log(fib(77));//自上而下的动态规划
// function fib(n){
// 	let a = 1
// 	let b = 1
// 	for (let i = 3; i <=n; i++) {
// 		 let c = a+b
// 		 a = b
// 		 b = c

// 	}
// return b
// }
// let list = {
// 	value: 1,
// 	next: {
// 	  value: 2,
// 	  next: {
// 		value: 3,
// 		next: {
// 		  value: 4,
// 		  next: null
// 		}
// 	  }
// 	}
//   };

//   function printList(list) {
// 	 if(!list.next){
// 		 console.log(list.value);
// 	 }else{
// 		 printList(list.next)
// 		 console.log(list.value);
// 	 }

//   }

//   printList(list);
// function ReverseList(pHead) {
// 	let cur = pHead;
// 	if (cur == null || cur.next == null) return cur;
// 	let next = null;
// 	let pre = nul;
// 	while (cur) {
// 		next = cur.next;
// 		cur.next = pre;
// 		next = pre;
// 		pre = next;
// 	}
// 	return next;
// }
// console.log(ReverseList({ }));
// function maopao(arr) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = 0; j < arr.length - i; j++) {
// 			if (arr[j] > arr[j + 1]) [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];
// 		}
// 	}
// 	return arr;
// }
//选择排序是从数组的开头开始，将第一个元素和其他元素作比较，检查完所有的元素后，最小的放在第一个位置，接下来再开始从第二个元素开始，重复以上一直到最后。
// function xuanze(arr){
// 	for (let i = 0; i < arr.length; i++) {
// 	  for (let j = i; j < arr.length; j++) {
// 		  if( arr[j]<arr[i]){
// 			  [arr[i],arr[j]] = [arr[j],arr[i]]
// 		  }

// 	  }

// 	}
// 	return arr
// }
// function charupaixu(arr) {
// 	// 插入排序核心–扑克牌思想： 就想着自己在打扑克牌，接起来一张，放哪里无所谓，再接起来一张，比第一张小，放左边，继续接，可能是中间数，就插在中间…依次
// 	for (let i = 1; i < arr.length; i++) {
// 		for (let j = i; j >0; j--) {
// 			if (arr[j] >arr[j - 1]) {
// 				[ arr[j ], arr[j-1] ] = [ arr[j-1], arr[j ] ];
// 			}
// 		}
// 	}
// 	return arr;
// }
/*选择一个基准元素，将列表分割成两个子序列；
对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
分别对较小元素的子序列和较大元素的子序列重复步骤1和2*/

// let arr = [ 1, 2, 31, 1, 3 ];
// function mappao(array) {
// 	for (let i = 0; i < array.length - 1; i++) {
// 		for (let j = 0; j < array.length - i; j++) {
// 			if (array[j] < array[j + 1]) {
// 				[ array[j + 1], array[j] ] = [ array[j], array[j + 1] ];
// 			}
// 		}
// 	}
// 	return array;
// }

// function charu(arr) {
// 	if (arr.length <= 0) {
// 		return arr;
// 	}
// 	let left = [],
// 		right = [],
// 		current = arr.splice(0, 1);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (current < arr[i]) {
// 			left.push(arr[i]);
// 		} else {
// 			right.push(arr[i]);
// 		}
// 	}
// 	return charu(left).concat(current, charu(right));
// }
// console.log(charu([ 3, 2, 1, 4 ]));
// let flotArr = [ 1, [ 3, 2, 3, [ 23, 1, [ 1, [ 2, [ 2 ] ] ] ] ] ];
// // console.log(flotArr.flat(2));
// // function myFlat(arr) {
// // 	return !Array.isArray(arr)
// // 		? arr
// // 		: arr.reduce((array, i) => {
// // 				return array.concat(myFlat(i));
// // 			}, []);
// // }
// console.log(myFlat(flotArr));
// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next: null
// 			}
// 		}
// 	}
// };
// function printList(list) {
//  while(list){
// 	console.log(list.value);
// 	list =  list.next
//  }
// console.log(list.value);
// if(list.next){
// 	printList(list.next)
// }
//  if(list.next){
// 	 printList(list.next)
//  }
//  console.log(list.value);
// while(list){
// 	list = list.next
// 	console.log(list.value);
// }
// 	let arr = [];
// 	let tmp = list;
// 	while (tmp) {
// 		arr.push(tmp.value);
// 		tmp = tmp.next;
// 	}
// 	for (let i = arr.length-1; i >= 0; i--) {
// 		console.log(arr[i]);
// 	}
// }
// // printList(list);
//  function sunAll(a,...args){
// 	 let sum = 0
// 	 console.log(args);
// 	 for (const i of args) {
// 		sum+=i
// 	 }
// 	 return sum
//  }
//  console.log(sunAll(1,2,3));
// function sunAll( ){
// 	console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
// }
// let obj = {
// 	0:'jon',
// 	length:1
// }
// // console.log([...obj]);//obj is not iterable
// console.log(Array.from(obj));//obj is not iterable
// let arr1= [1,2,3]
// let arrCopy = [...arr1]
// function sayHiBye(firstname,lastName){
// 	function getFullName(){
// 		return firstname+lastName
// 	}
// 	console.log('hello'+getFullName());
// 	console.log('bye'+getFullName());
// }
// console.log(sayHiBye('zhang','san'));
// function makeCounter(){
// 	let count = 0
// 	return function (){
// 		return count++
// 	}
// }
// let counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let  a
// var b
// console.log(a);
// a = 100
// console.log(a);
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     console.log(`${phrase}, ${user}`);
//   }
// }
// sayHi();
// function sum(a){

// 	return function (b){

// 		return  a+b
// 	}
// }
// console.log(sum(1)(2));
// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();
// function isBetween(a, b) {
// 	return function(x) {
// 		console.log(x);
// 		return x >= a && x <= b;
// 	};
// // }
// let arr = [ 1, 2, 3, 4, 5, 6, 7 ];
// // console.log(arr.filter(isBetween(3, 6))); // 3,4,5,6

// console.log(arr.filter(inArray([1, 2, 10]))); // 3,4,5,6
// function inArray(arr) {
// 	return function(x) {
// 		 return  arr.includes(x)
// 	};
// }
// let users = [
// 	{ name: "John", age: 20, surname: "Johnson" },
// 	{ name: "Pete", age: 18, surname: "Peterson" },
// 	{ name: "Ann", age: 19, surname: "Hathaway" }
//   ];
//   function byField(str){
// 	return function(a,b){
// 	return 	a[str]>b[str]?1:-1
// 	}
//   }
//   console.log(users.sort(byField('name')))
//   console.log(users.sort(byField('age')))
// function makeArmy() {
// 	let shooters = [];

// 	let i = 0;
// 	// while (i < 10) {
// 	// 	let _i = i

// 	//   }
// 	for (let i = 0; i < 10; i++) {
// 		let shooter = function() {
// 			// 创建一个 shooter 函数，
// 			console.log(i); // 应该显示其编号
// 		};
// 		shooters.push(shooter); // 将此 shooter 函数添加到数组中
// 	}
// 	return shooters;
// 	// ……返回 shooters 数组
// }

// let army = makeArmy();

// // ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
// army[0](); // 编号为 0 的 shooter 显示的是 10
// army[1](); // 编号为 1 的 shooter 显示的是 10
// army[2](); // 10，其他的也是这样。
// //i引用的变量并没有修改
// if(true){
// 	var test = true
// }
// console.log(test);
// function sayHi(){
// 	console.log(phrase);
// 	var phrase = 'hello'
// }
// sayHi()
// var a = 1
// var a = 2
// let b  =1
// let b = 2
// const c = 1
// cnst c = 2
// (function say(){
// 	var a = 1
// 	console.log(a);
// })()
// // cons
// var a  = 1
// let b = 1
// console.log(global.a);
// console.log(globalThis.b);
// function sayHi(){
// 	console.log('hi');
// 	let count = 0
// 	count++//和sayHi.count不是同一个东西
// 	sayHi.count++//和let count 不是同一个东西
// }
// sayHi.count = 0
// sayHi()
// console.log(sayHi.count)
// function
// makeCounter() {
//   // 不需要这个了
//   let count = 0
//     function counter() {
//     return counter.count++;
//   };

//   return counter;
// }

// let counter = makeCounter();
// counter.count = 10;

// console.log( counter() ); // 0
// console.log( counter() ); // 1
// let sayHi = function(who){
// 	console.log(`hello ,${who}`);
// }
// let sayHi2  = function func(who){//制定内部函数
// 	 if(who){
// 		 console.log(who);
// 	 }else{
// 		 func('no')//可以自己调用自己
// 	 }

// }
//  let wellcome = sayHi2
//  sayHi2 = null
// wellcome(123)
// function makeCounter() {
// 	let 
// 	function counter() {
// 		counter.set = function(num) {
// 			counter.count = num;
// 		};
// 		counter.decrease = function() {
// 			return counter.count--;
// 		};
// 		return counter.count++;
// 	}

// 	return counter;
// }
// let counter = makeCounter();
// // counter.count = 10;
// counter();
// console.log(counter.count);
// counter.set(20);
// console.log(counter.count);
// counter.decrease();
// console.log(counter.count);
// // sum(0)(1)(2)(3)(4)(5) == 15//
// function sum(a){
// 	let num = a
//     function f (b){
// 		num += b
// 		return f
// 	}
// 	f.toString = function(){
// 		return num
// 	}
// 	return f
// }

// console.log(sum(1)(2)(3)==6);
let obj = {
	a:1,
	b:1

}
console.log(obj.toJSON());