You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money

function mostMoney(students) {
    if(students.length === 1) return students[0].name;
    students = students.map(student => {
      let total = 0;
      total += (student.fives * 5);
      total += (student.tens * 10);
      total += (student.twenties * 20);
      student.total = total;
      return Object.entries(student);
    }).sort((a,b) => b[b.length - 1][1] - a[a.length - 1][1]);
    let totalComparison = students[0][4][1];
    return students.every(student => student[student.length - 1][1] === totalComparison) ? "all" : students[0][0][1];
  }

  function mostMoney(students) {
    var res = ['',-1],tmp;
    students.forEach(x=>{
          tmp= x.fives*5+x.tens*10+x.twenties*20; 
          if(tmp ==res[1]){res[0]="all"; return null;}
          if(tmp > res[1]){res[0]=x.name; res[1]=tmp;}
          });
    return res[0];
  }