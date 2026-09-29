const studentName = "Noman";
const obtainedMarks = 62;
const totalMarks = 100;

let percentage;
let grade;
let Status;

if (obtainedMarks > totalMarks) {
    console.log("Error: Obtained marks cannot be greater than total marks");
} else {
    percentage = (obtainedMarks / totalMarks) * 100;



if (obtainedMarks >= 90){
    grade = "A+";
}
else if (obtainedMarks >=80){
    grade = "A"
} 
else if (obtainedMarks >=70){
    grade = "B"
} 
else if (obtainedMarks >=60){
    grade = "C"
} 
else if (obtainedMarks >=50){
    grade = "D"
} 
else {
    grade = "F"
} 

if (percentage >=50){
    Status = "Pass";
}
else {
    Status ="Fail";
}

console.log("Name:", studentName);
console.log("Marks:",`${obtainedMarks}/${totalMarks}`);
console.log("Percentage:", `${percentage}`+ "%");
console.log("Grade:", grade);
console.log("Status:", Status);
}