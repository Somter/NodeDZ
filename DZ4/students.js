function Student(Name, Surname, Age) {
    this.name = Name;
    this.surname = Surname;
    this.age = Age;

    this.GetName = () => {
        return this.name;
    }

    this.GetSurname = () => {
        return this.surname;
    }

    this.GetAge = () => {
        return this.age;
    }
}

var stud1 = new Student('Pavel', 'Durov', 39);
var stud2 = new Student('Elon', 'Musk', 52);
var stud3 = new Student('Mark', 'Zuckerberg', 40);

var Students = [stud1, stud2, stud3];


console.log("Начальный массив студентов:");
console.log(Students);

exports.Edit = (Students) => {
    const addStudent = () => {
        var stud4 = new Student('Alexander', 'Shevtsov', 19);
        Students.push(stud4);
        console.log("Добавлен новый студент:");
        console.log(stud4);
    }

    const removeStudent = (index) => {
        if (index >= 0 && index < Students.length) {
            const removedStudent = Students.splice(index, 1);
            console.log("Удален студент:");
            console.log(removedStudent[0]);
        } else {
            console.log("Неверный индекс для удаления.");
        }
    }

   
    const displayStudents = () => {
        console.log("Текущий список студентов:");
        Students.forEach((student, index) => {
            console.log(`${index + 1}. ${student.GetName()} ${student.GetSurname()}, ${student.GetAge()} лет`);
        });
    }
}

