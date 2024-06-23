class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}\nAuthor: ${this.author}\nPages: ${this.pages}`);
    }
}

// Пример использования класса
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
book1.displayInfo();
// Вывод:
// Title: To Kill a Mockingbird
// Author: Harper Lee
// Pages: 281

const book2 = new Book("1984", "George Orwell", 328);
book2.displayInfo();
// Вывод:
// Title: 1984
// Author: George Orwell
// Pages: 328






class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade

