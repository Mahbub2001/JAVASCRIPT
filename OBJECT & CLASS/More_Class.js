class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = " Web Course Instruction";
  team = "Web team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please creat quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = " Web Course Instruction";
  team = "Web team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please developer the  ${feature}`);
  }
  createQuiz(version) {
    console.log(`Please release the ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "JOb Placement Commandos";
  team = "Job PLcement Team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  ProvideResume(feature) {
    console.log(`Please developer the  ${feature}`);
  }
  prepareStudent(version) {
    console.log(`Please release the ${version}`);
  }
}

const alia = new Developer("Alia Bhat","Dhaka","React");
console.log(alia);
alia.provideFeedback();
const bipasa = new JobPlacement('Biapasa','Kolkata','India');
console.log(bipasa);

