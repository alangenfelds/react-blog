// --------------------------------------------------------------
    // function applyForVisa(documents) {
    //   console.log('Processing visa request...')

    //   let promise = new Promise( (resolve, reject) => {
    //     setTimeout( ()=> {
    //         Math.random() > 0.1 ? resolve({}) : reject('Visa Rejected');
    //     }, 1500);
    //   });

    //   return promise;
    // }

    // let getVisa = (visa) => {
    //   console.info('Visa received')
    //   return new Promise( (resolve, reject) => {
    //     setTimeout( ()=> {
    //       resolve(visa)
    //     }, 2000)
    //   });
    // }

    // function bookHotel(visa) {
    //   console.log(visa)
    //   console.log('Booking hotel')
    //   return Promise.resolve(visa);
    // }

    // function buyTickets(booking) {
    //   console.log('Buying tickets')
    //   console.log('Reservation Nr.: ', booking)
    // }

    // applyForVisa({})
    //   .then(getVisa)
    //   .then(bookHotel)
    //   .then(buyTickets)
    //   .catch(error => console.error(error))
    //   .then( ()=> console.log('I\'m stil here'))


    // function isEmpty(obj) {
    //     return Object.keys(obj).length === 0;
    // }
    
    // var schedule = {};
    
    // alert( isEmpty(schedule) ); // true
    
    // schedule["8:30"] = "подъём";
    
    // alert( isEmpty(schedule) ); // false

    // var salaries = {
    //   "Вася": 100,
    //   "Петя": 300,
    //   "Даша": 250
    // };

    // var nosalaries = {};

    // var calc = (obj) => {
    //   var sum = 0;
    //   for (var keys in obj) {
    //     sum += obj[keys];
    //   }
    //   return sum;
    // }

    // console.log(calc(salaries));
    // console.log(calc(nosalaries));

    // var nameMax = "";
    // var max = 0;
    
    // for (var name in salaries) {
    //   if (salaries[name] > max) {
    //     max = salaries[name];
    //     nameMax = name;
    //   }

    //   }

    // alert (nameMax || "no employees");


  //   var menu = {
  //     width: 200,
  //     height: 300,
  //     title: "My menu"
  //   };
    
  //   multiplyNumeric(menu);

  //   function isNumeric(n) {
  //     return !isNaN(parseFloat(n)) && isFinite(n)
  //   }


  //   function multiplyNumeric(menu) {

  //   for (let  key in menu) {
  //     if (isNumeric(menu[key])) {
  //       menu[key] *= 2;
  //     }
  //   }

  //   for (let key in menu) {
  //     console.log(menu[key]);
  //   }
  // }

//   var user = { name: "Вася" }; // в переменной - ссылка

//   var admin = user; // скопировали ссылку
// console.log(admin.name);
//   user.name = "TEST";
//   console.log(admin.name);


// var goods = ['A', 'B', 'C'];
// console.log(goods);
// console.log(goods.pop());
// console.log(goods);
// goods.push('D')
// console.log(goods);

// var styles = ['Jazz', 'Blues'];
// console.log(styles)
// styles.push('Rock\'N Roll')
// console.log(styles)
// styles[styles.length > 2 ? styles.length-2 : 0] ='Classic'
// console.log(styles)
// styles.shift();
// console.log(styles)
// styles.unshift('Rap', 'Reggie')
// console.log(styles)


// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * (arr.length));
// console.log(arr[rand]);

// var numbers = [];

// while (true) {
//   var value = prompt('Enter value', 0);
//   console.log(value);

//   if (value === "" || value === null || isNaN(value) ) break;

//   numbers.push(+value);
// }

// var sum = 0;

// for( let i=0; i < numbers.length; i++){
//   sum += numbers[i];
// }

// console.log(numbers);
// console.log(sum);

// var arr = ["test", 2, 1.5, false];

// function find(array, value) {

//   if (array.indexOf) { // если метод существует
//     return array.indexOf(value);
//   }

//   for (let i=0; i < array.length; i++) {
//     if (array[i] === value) return i;
//   }

//   return -1;
// }

// console.log(find(arr,'test'));
// console.log(find(arr,2));
// console.log(find(arr,1.5));
// console.log(find(arr,0));


// var arr = [5, 4, 3, 8, 0];

// function filterRange(array, min, max) {
//   var resultArray = [];
//     for (let i = 0; i < array.length; i++) {
//       if (min <= array[i] && array[i] <= max) {
//         resultArray.push(array[i]);
//       }
//     }
//   return resultArray;
// }

// var filtered = filterRange(arr, 3, 5);

// console.log(arr);
// console.log(filtered);


// var arr = ["Я", "изучаю", "JavaScript"];

// console.log(arr.splice(1,1));

// var a = 3;
// var b = 7;

// a = a + b;  // 10
// b = a - b; // 3
// a = a - b; // 7
// console.log(a);
// console.log(b);

// var obj = {
//   className: 'open menu'
// }

// function addClass(object, cls) {
//   var classes = object.className.split(' ');

//   if (classes.indexOf(cls) === -1) {
//     classes.push(cls);
//     object.className  = classes.join(' ');
//   }

  
// }

// addClass(obj, 'new'); // obj.className='open menu new'
// addClass(obj, 'open'); // без изменений (класс уже существует)
// addClass(obj, 'me'); // obj.className='open menu new me'
// console.log('\'' + obj.className + '\'')

// function camelize(str) {
//     var arr = str.split('-');
    
//   for(let i = 1; i < arr.length ; i++){
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//   }
//     console.log('result=' + arr.join(''));
// }

// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")


// function removeClass(obj, cls) {
  
//   var arr = obj.className.split(' ');
  
//   while(arr.indexOf(cls) !== -1) {
//     arr.splice(arr.indexOf(cls),1);
//   }
//   console.log(arr);
  
//   console.log('\'' + arr.join(' ') + '\'');
// }

// var obj = {
//   className: 'open my menu menu'
// };

// removeClass(obj, 'menu');
// removeClass(obj, 'blabla');

// var arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// function filterRangeInPlace(arr, min, max) {
//   for (let i = 0; i < arr.length ; i++) {
//     if (arr[i] < min || arr[i] > max) {
//       arr.splice(i,1);
//     }
//   }

//   console.log(arr);
// }

// var arr = [5, 2, 1, -10, 8];

// function numericSort(a,b) {
//   return a-b;
// }

// arr.sort(numericSort);
// arr.reverse();
// console.log(arr);


// var arr = ["HTML", "JavaScript", "CSS"];
// var newArr = arr.concat();
// newArr.sort();
// console.log(arr);
// console.log(newArr);


// var arr = [1, 2, 3, 4, 5];

// function rendomize(a,b) {
//   return Math.random() < 0.5 ? -1 : 1;
// }

// arr.sort(rendomize);

// console.log(arr);

// var vasya = { name: "Вася", age: 23 };
// var masha = { name: "Маша", age: 18 };
// var vovochka = { name: "Вовочка", age: 6 };

// var people = [ vasya , masha , vovochka ];

// function peopleSort(personA,personB) {
//   return personA.age - personB.age
// }

// console.log(people[0].age);
// people.sort(peopleSort);
// console.log(people[0].age);


// var list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// //1
// function printList(list) {
//   var obj = list;
//   while(obj.next !== null) {
//     if (obj.next !== null) {
//       console.log(obj.value);
//       obj = obj.next
//     } else {
//       break;
//     }
//   }
// }

// printList(list);

// // 2
// function printListRecursion(list) {
//   console.log(list.value);
//   if (list.next) {
//     printListRecursion(list.next);
//   }
// }

// printListRecursion(list)

// // 3
// function printListRecursionBack(list) {
  
//   if (list.next) {
//     printListRecursion(list.next);
//   }
//   console.log(list.value);
// }

// printListRecursionBack(list)



// var arr = ["Яблоко", "Апельсин", "Груша"];

// arr.forEach( (item, i, arr) =>  {
//   alert( i + ": " + item + " (массив:" + arr + ")" );
// });

// var arr = [1, -1, 2, -2, 3];
// var positiveNumbers = arr.filter (item =>  item < 0 );
// console.log(positiveNumbers);

// var names = ['HTML', 'CSS', 'JavaScript'];
// var nameLengths = names.map (name => name.length);
// console.log(nameLengths);

// var arr = [1, -1, 2, -2, 3];

// function isPositive(number) {
//   return number > 0;
// }

// console.log(arr.every(isPositive))
// console.log(arr.some(isPositive))


// var arr = [1,2,3,4,5];

// var getSums = (arr) => {

//   var resultArr = [];

//   for (let i = 0; i < arr.length ; i++) {
//     var temp = [];

//     for (let x = 0; x <= i; x++) {
//       temp[x] = arr[x];
//     }

//     resultArr[i] = temp.reduce((sum, current) => {
//       return sum + current;
//     })
    
//   }

//   console.log(resultArr)
// }

// function getSums(arr) {
//   var result = [];
//   if (!arr.length) return result;

//   var totalSum = arr.reduce(function(sum, item) {
//     result.push(sum);
//     return sum + item;
//   });

//   result.push(totalSum);

//   // console.log(result);
//   // return result;
// }

// getSums(arr);
// getSums([-2,-1,0,1]);

// var now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getDay());
// now.setFullYear(2016);
// console.log(now.getFullYear());


// function makeCounter() {
//   var currentCount = 1;

//   return function() {
//     return currentCount++;
//   };
// }

// var counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());


// var value = 11;

// function f() {
//   if (1) {
//     value = 22;
//   } else {
//     var value = 33;
//   }

//   alert( value );
// }

// f();


// var sum = new Function('a, b', ' return a + b; ');

// var a = 1, b = 2;

// alert( sum(a, b) ); // 3

// function sum(a) {
//   return function(b) {
//     return a+b;
//   }
// }

// console.log(sum(5)(-1));

// function makeBuffer() {
//   var result = "";

//   function xxx(piece) {
//     if (arguments.length === 0) {
//       return result;
//     } 

//     result += piece;
//   };

//   xxx.clear = function() {
//     result = "";
//   }

//   return xxx;
// }

// var buffer = makeBuffer();

// buffer("Тест");
// buffer(" тебя не съест ");

// console.log( buffer() ); // ""
// buffer.clear();

// console.log( buffer() ); // ""

// добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');

// console.log(buffer());

// var buffer2 = makeBuffer();
// buffer2(0);
// buffer2(1);
// buffer2(0);

// console.log(buffer2() );


// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];

// users.sort( (a,b) => a.name > b.name ? 1 : -1);
// users.sort( (a,b) => a.age > b.age ? 1 : -1 );
// console.log(users);

// function byField(field){
//   return (a,b) => {
//     // console.log(a[field])
//     return a[field] > b[field] ? 1 : -1;
//   }
// } 

// users.sort(byField('age'));
// console.log("age: \n", users);

// users.sort(byField('name'));
// console.log("name: \n", users);



/* .. ваш код для filter, inBetween, inArray */
// var arr = [1, 2, 3, 4, 5, 6, 7];

// alert(filter(arr, function(a) {
//   return a % 2 === 0
// })); 
// 2,4,6

// function filter(arr, func) {
//   return arr.filter( item => func(item) )
// }

// function inBetween(a,b) {
//   return function(x) {
//     return x >=a && x <=b;
//   }
// }

// function inArray(arr) {
//   return function(x) {
//     return arr.indexOf(x) !== -1;
//   }
// }

// // alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
// alert( filter(arr, inArray([1, 2, 10])) ); // 1,2



// function makeArmy() {

//   var shooters = [];

//   for (var i = 0; i < 10; i++) {
//     var shooter = new Function('', 'alert( ' + i + ' );'); // функция-стрелок выводит свой номер
//     // var shooter = function me() { // функция-стрелок

//     //   alert( me.i ); // выводит свой номер
//     // };

//     // shooter.i = i;
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// var army = makeArmy();

// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9


// function Calculator(){
  
//   var a,b;

//   this.read = function() {
//     a = +prompt('Input A: ', 0);
//     b = +prompt('Input B: ', 0);
//   }

//   this.sum = function() {
//     return a+b;
//   }

//   this.mul = function() {
//     return a*b;
//   }

// }

// var calculator = new Calculator();
// calculator.read();

// alert( "Сумма=" + calculator.sum() );
// alert( "Произведение=" + calculator.mul() );


// function Accumulator(startValue) {

//   this.value = +startValue;

//   this.read = function() {
//     this.value += +prompt('Enter value: ', 0);
//   }
// }

// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение


// function Calculator() {

//   var methods = {
//     '-' : function(a,b) {
//       return a-b;
//     },
//     '+': function(a,b) {
//       return a+b;
//     }
//   }

//   this.calculate = function(str) {

//     var arr = str.split(' '),
//     a = +arr[0],
//     op = arr[1],
//     b = +arr[2];

//     if (!methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return methods[op](a,b);
//   }

//   this.addMethod = function(name, func) {
//     methods[name] = func;
//   }
// }

// // var calc = new Calculator();

// // alert( calc.calculate("3 + 7") ); // 10


// var powerCalc = new Calculator();

// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });

// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8



// function User(fullName) {
  
//   this.fullName = fullName;

//   Object.defineProperty(this, "firstName", {
//     set: function(firstName) {
//       this.fullName = firstName + " " + this.fullName.split(' ')[1];
//     },
//     get: function() {
//       return this.fullName.split(' ')[0];
//     }
//   });

//   Object.defineProperty(this, "lastName", {
//     set: function(lastName) {
//       this.fullName = this.fullName.split(' ')[0] + " " + lastName;
//     },
//     get: function() {
//       return this.fullName.split(' ')[1];
//     }
//   });



// }

// var vasya = new User("Василий Попкин");

// console.log(vasya.firstName);
// console.log(vasya.lastName);

// vasya.lastName = 'Сидоров';
// console.log(vasya.fullName);

// vasya.firstName = 'Test';
// console.log(vasya.fullName);


// function work(a,b) {

// }

// var log = [];

// function makeLogging(f, log) {

//   function wrapper() {
//     log.push([].slice.call(arguments));
//     return f.call(this, arguments);
//   }

//   return wrapper;
  
// }

// work = makeLogging(work, log);

// work(1, 2); // 3
// work(4, 5); // 9
// work(3, 7, 10); // 20

// log.map(item => console.log( 'Лог:' + item.join() ))

// function printNumbersInterval() {
//   var counter = 0;
//   var timerId = setInterval(()=> {
//     console.log(++counter)
//     if (counter === 20) {
//       clearInterval(timerId);
//     }
//   },100)
// }



// function printNumbersInterval() {
//   var counter = 1;
//   var timerId = setTimeout(function f() {
//     console.log(counter)
//     if (counter !== 20) {
//       setTimeout(f, 100)
//     }
//     counter++;
//   },100)
// }

// printNumbersInterval();


// function f(x) {
//   alert( x );
// }

// function delay(func, time){
//   return function() {
//     var savedThis = this;
//     var savedArgs = arguments;
//     setTimeout(function() {
//       func.apply(savedThis, savedArgs);
//     }, time)
//   }
  
// }

// var f1000 = delay(f, 1000);
// var f1500 = delay(f, 1500);

// f1000("тест", "тест"); // выведет "тест" через 1000 миллисекунд
// f1500("тест2"); // выведет "тест2" через 1500 миллисекунд



