const person ={name:'jack Willam',age: 177,job:"faceboker",gfName:"Eliana",address:'kochukhet'};
//const gfName=person.gfName
const age1=person.age
const {age,gfName,salary}=person;
console.log(person.gfName);
console.log(person.gfName);
console.log(gfName,age,salary);

const complexObject={
    name:'abd',
    info:{
        address:'kola bagan'
        leader:'tiger bhai'
    }
}
const {leader}=complexObject.info;
const friends= ['Sakmin khan','amir khan','bhaat khan','nasta khan'];
const[chotoFriend,boroFriends, ...restfriends]=friends;
console.log(chotoFriend,boroFriends,restfriends);