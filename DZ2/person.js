function Person(Name, Surname, Age, height){
    this.fillingInData = () =>{
        this.name = Name;
        this.surname = Surname;
        this.age = Age;
        this.height = height;   
        console.log('Data filled in');
    }

    this.print = () =>{
            console.log('Name: ' + this.name + ', Surname: ' + this.surname + ', Age: ' + this.age + ', Height: ' + this.height);
    }
}

module.exports = {
    Person: Person, 
}