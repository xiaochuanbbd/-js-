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
let room = {
	number: 23
  };
  
  let meetup = {
	title: "Conference",
	occupiedBy: [{name: "John"}, {name: "Alice"}],
	place: room
  };
  
  // 循环引用
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  console.log( JSON.stringify(meetup, function replacer(key, value) {
 return (key!=='' && value ==meetup) ?undefined :value
  }));