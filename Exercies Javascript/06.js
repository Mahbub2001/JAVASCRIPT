// You and your friends Tom, Jane, Peter and John got their final exam
// results. Your total score is 85, Tom’s total score is 66, Jane’s total score is
// 95, Peter’s total score is 56 and John’s total score is 40. The grading
// chart is

var scores=[
    {name : "MyScore", score: 85},
    {name : "TomScore", score: 66},
    {name : "JaneScore", score: 95},
    {name : "PeterScore", score: 56},
    {name : "JohnScore", score: 40},
]


for (let i = 0; i < scores.length; i++) {
    if(scores[i].score >= 80)
    {
        console.log(`${scores[i].name}'s grade is A`);
    }
    else if(scores[i].score >= 60)
    {
        console.log(`${scores[i].name}'s grade is B`);
    }
    else if(scores[i].score >= 50)
    {
        console.log(`${scores[i].name}'s grade is C`);
    }
    else if(scores[i].score >= 40)
    {
        console.log(`${scores[i].name}'s grade is D`);
    }
    else
    {
        console.log(`${scores[i].name}'s grade is F`);
    }
}