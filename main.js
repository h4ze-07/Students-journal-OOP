
function Student(name, surname, age, marks) {
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.marks = marks,
    this.presence = []
}

Student.prototype.getAge = function() {
    let date = new Date();
    let year = date.getFullYear();
    console.log(`Your current age is ${year - this.age}`);
}

Student.prototype.getAvgMark = function() {
    console.log(`Your avg mark is: ${avgMark(this.marks) / this.marks.length}`)
}

Student.prototype.present = function() {
    if (this.presence.length < 25) {
        this.presence.push(true)
    } else if (this.presence.length >= 25) {
        this.presence.splice(0, 1)
        this.presence.push(true)
    } 
}

Student.prototype.absent = function() {
    if (this.presence.length < 25) {
        this.presence.push(false)
    } else if (this.presence.length >= 25) {
        this.presence.splice(0, 1)
        this.presence.push(false)
    } 
}

Student.prototype.summary = function() {
    let avgStudentMarks = avgMark(this.marks) / this.marks.length;

    let totalPresences = 0;
    for (let el of this.presence) {
        el === true ? totalPresences += 1 : totalPresences += 0;
    }

    let summaryTotalPresents = totalPresences / 25;

    if (avgStudentMarks > 90 && summaryTotalPresents > 0.9) {
        console.log(`Well done!\nYours achiev's: (Avg mark: ${avgStudentMarks}, avg presence: ${summaryTotalPresents})`)
    } else if (avgStudentMarks > 90 || summaryTotalPresents > 0.9) {
        console.log(`Good, but it can be better!\nYours achiev's: (Avg mark: ${avgStudentMarks}, avg presence: ${summaryTotalPresents})`)
    } else {
        console.log(`Radish!\nYours achiev's: (Avg mark: ${avgStudentMarks}, avg presence: ${summaryTotalPresents})`)
    }
}

const avgMark = (arr) => {
    let total = 0;
    for (let el of arr) {
        total += el;
    }
    return total;
}

//TESING 1

let John = new Student('John', 'Locke', 1976, [100, 90, 100, 100, 90, 90, 100, 90]);

//Перевіряємо, що всі поля виводяться:
console.log(John.name, John.surname, John.age, John.marks);

//Перевіряємо методи отримання віку студента та його середнього балу:
John.getAvgMark()
John.getAge()

//Перевіряємо метод .summary():
//У першому випадку виведеться `Good, but it can be better!`, оскільки
//середня оцінка буде більша за 90, а відвідуванність буде пустою, бо ми
//жодного разу не задали її за домогою методів .present() та .absent()
John.summary()

//Задамо відвідуванність(23 true):
for (let i = 0; i < 23; i++) {
    John.present()
}
console.log(John.presence) //Виведе масив з 23 true

//Перевіряємо метод .summary() ще раз:
//Тепер виведеться `Well done!`, оскільки середня
//оцінка буде більша за 90 і відвідуванність > 0.9
John.summary()

//Тепер зробимо перевірку на те, щоб масив мав максимальну довжину
//в 25 символів. Добавимо к масиву 5 false:
for (let i = 0; i < 5; i++) {
    John.absent()
}
console.log(John.presence) // Виведе массив з 20 true та 5 false


//TESING 2

let Jessie = new Student('Jessie', 'Pinkman', 1997, [10, 20, 50, 30, 70, 60, 20]);

console.log(Jessie.name, Jessie.surname, Jessie.age, Jessie.marks);

Jessie.getAvgMark()
Jessie.getAge()

Jessie.summary()

for (let i = 0; i < 10; i++) {
    Jessie.present()
}
console.log(Jessie.presence)

Jessie.summary()

for (let i = 0; i < 10; i++) {
    Jessie.absent()
}
console.log(Jessie.presence)