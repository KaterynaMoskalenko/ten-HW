'use.strict';
/*
Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.
*/

const user = {
    name: "John Doe",
    age: 30,
    location: "Germany",
    getUserInfo: function() {
        return `Name: ${this.name}, Age: ${this.age}, Location: ${this.location}`;
    },
    displayUserInfo: function() {
        console.log(this.getUserInfo());
    }
};

// Отримання та відображення інформації про користувача
user.displayUserInfo();

/*
Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Фільтруємо парні числа
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Виведе: [2, 4, 6, 8, 10]


/*
Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.
*/

const contactBook = {
    contacts: [
        { name: "Alice Smith", phone: "+49-123-456-7890", email: "alice@example.com" },
        { name: "Bob Johnson", phone: "+49-234-567-8901", email: "bob@example.com" }
    ],

    findContactByName: function(name) {
        return this.contacts.find(contact => contact.name === name);
    },

    addContact: function(name, phone, email) {
        this.contacts.push({ name, phone, email });
    },

    displayContacts: function() {
        console.log(this.contacts);
    }
};

// Додавання нового контакту
contactBook.addContact("Charlie Brown", "+49-345-678-9012", "charlie@example.com");

// Пошук контакту за ім'ям
const foundContact = contactBook.findContactByName("Alice Smith");
console.log(foundContact);

// Відображення всіх контактів
contactBook.displayContacts();
