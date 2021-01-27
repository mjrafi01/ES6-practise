class Student{
    constructor(sId,sName){
        this.id=sId;
        this.name=sName;
        this.school='kolimunnesa school'

    }


}

const Student1 = new Student(32,"mahi");
const Student2 = new Student(54,'yui');
console.log(Student1,Student2);
console.log(Student2.id);