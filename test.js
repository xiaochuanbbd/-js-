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
// let obj = {
//   name:'xl',
//   age:12
// }
// let arr = [1,2,3,4]
// for (const key in obj) {
// console.log(key);
// }
 
// for (const iterator of arr) {
//   console.log(iterator);
// }
