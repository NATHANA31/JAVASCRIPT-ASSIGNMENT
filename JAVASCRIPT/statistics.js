const students = ["SAM", "VICKY", "THEO", "CHARLES", "BLESSING", "MARK", "ANGELA", "STEPHAN", "JULIUS", "ELENA"];
let scores = [100, 60, 75, 82, 80, 95, 80,69, 98, 75];
console.log("the students and their scores are: ");
for (let i = 0; i < scores.length; i++)
{
   
    console.log(students[i], scores[i]);
}
let number = 0;
function compareFunction(a, b)
{
    return a - b;  
}
scores.sort(compareFunction);
console.log(scores);
let total = 0;
let mean = 0;

for (let i = 0; i < scores.length; i++) 
{
    
total = total + scores[i];
mean = total / scores.length;
if (scores[i] == scores[(i + 1)]) 
{
    console.log( "the modal scores are", scores[(i + 1)]);
}

}

if (scores.length %2 == 0)
{
    let median = ((scores[((scores.length / 2) - 1)]) + scores[(scores.length / 2)]) / 2;
    console.log("the median of the scores is: ", median);
    
} else if(scores.length % 2 != 0)
{
    let median = scores[((scores.length / 2) - 0.5)];
    console.log("the median of the scores is: ", median);
}
let range = scores[(scores.length - 1)] - scores[0];
console.log("the range of the scores is:",range)
console.log("the mean of the scores is:", mean);




