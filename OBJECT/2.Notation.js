const student = {
    name : "Rahim Mia",
    age : 15,
    class : "Ten",
    marks : {
        math : 78,
        physics : 89,
        chemistry : 65,
    },
}

const marks = student.marks;
const math = student.marks.math;

//bracket notation
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];//if you don't give this bracket there will show error
console.log(chemistry);