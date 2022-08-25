class Instructor{
    name;
    designation = " Web Course Instruction";
    team = "Web team";
    location;
    constructor(name,location)
    {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please creat quiz for module ${module}`);
    }   
}

const amir = new Instructor("amir","mumbai");
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(60);