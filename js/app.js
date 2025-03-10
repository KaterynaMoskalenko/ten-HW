  'use.strict';

let arrOrders = Array.from(mapOrders);
console.log(arrOrders)

/* 1.1
Кількість замовлень кожного користувача
Використовуйте reduce, щоб створити об’єкт:
*/

const sumItemsEveryUser = arrOrders.reduce((acc, currentVal) => {
   // console.log(acc);
    //console.log(currentVal);
   // console.log(currentVal[1].length); 
  //  console.log(currentVal[0])   
    return {
         ...acc,
         [currentVal[0]]:currentVal[1].length,
    }
},{})

console.log(sumItemsEveryUser);

/* 1.2 
Використовуйте Map:
Замість об’єкту використовуємо Map, де ключ - ім’я користувача, а значення - кількість його замовлень*/

 let mapOrders2 = new Map (Object.entries(sumItemsEveryUser));
 console.log(mapOrders2)

 /* 2.1
  Сума замовлень кожного користувача
Використати map + reduce, щоб створити об’єкт 
*/

 //console.log(orders)
// console.log(mapOrders)
// console.log(arrOrders)
// console.log(sumItemsEveryUser)
// console.log(mapOrders2)

console.log('this way is not correkt')
let amountOfOrdersUser = arrOrders.map((elem,index) => {
  //console.log(index); 
   //console.log(elem)
   elemName = elem[0];
   //console.log(elemName)
   elemPrice = elem[1]
   //console.log(elemPrice)
  
   let priceEveryUser = elemPrice.reduce((acc, value) => {
           // console.log(acc);
            //console.log(value);
            //console.log(value.price)
            acc +=value.price;
            // console.log(acc)
            return acc;
        },0);
        return elem = `${elemName} : ${priceEveryUser}`
     
    });

console.log(amountOfOrdersUser);


console.log('next try...');
//console.log(orders)

const arrPrice = orders.map(order => {
  //console.log(order)
  const prices = order.items.map(item => {
   // console.log(item.price)
    return item.price;  //[500, 20]    
  });
    const totalPrice = prices.reduce((sum, price) => {
    //console.log(sum, price);
    return sum + price; //520
  },0)
  // return new object
  return {user: order.user, total: totalPrice};        
});
console.log(arrPrice) // имена User повторяются

// об'єднати повторні об'єкти імен User

const amountOfOrdersUser2 = arrPrice.reduce((acc, current) => {
  // Перевіряємо, чи вже є цей користувач у підсумковому об'єкті
  //console.log(acc)
  //console.log(current)
  //console.log(current.user)
  //console.log(acc[current.user]) // в созданном (поначалу пустом обьекте acc)
  if (acc[current.user]) {
    // Додаємо поточну суму до вже існуючої
    acc[current.user] += current.total; // total наша сумма посчитанная в пред функции
  } else {
    // Якщо користувача ще нема, створюємо нову властивість
    acc[current.user] = current.total;
  }
  return acc;
}, {});
console.log(amountOfOrdersUser2);


/* 2.2
Використовуємо Map, де ключ - им’я користувача, а значення - сума його покупок
*/

let amountOfOrdersUser3 = new Map (Object.entries(amountOfOrdersUser2));
console.log(amountOfOrdersUser3)


/* 
Завдання  3. Унікальні товари
Створюємо Set, щоб отримати унікальні товари
Set { 'Phone', 'Case', 'Laptop', 'Headphones', 'Monitor' }
*/
let uniqueItems = new Set ();

orders.forEach(order => order.items.forEach(item => {

  ((!uniqueItems.has(item.name))) ? uniqueItems.add(item.name) : uniqueItems;

},{}))
console.log(uniqueItems)


/*
Завдання 4. Хто витратив більше за всіх?
Використовуйте reduce, щоб знайти користувача з найбільшими витратами.
*/
function getMaxPrice(object) {
  //console.log(amountOfOrdersUser2)
  return Object.entries(object).reduce((max, [currentUser, currentPrice]) => {
    console.log(max)
    let maxPrice = max[1];
    let user = max[0]
   console.log(maxPrice)
    console.log(user)
 
  console.log(currentPrice);
  //console.log(currentUser)
  if (currentPrice > maxPrice) {
    return {currentUser, currentPrice}
  }
 });

}
getMaxPrice(amountOfOrdersUser2); // не получается!!!!!!!











