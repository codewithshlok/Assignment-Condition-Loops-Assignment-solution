// Q2. Write a program that grades students based on their marks
// 1. If greater than 90 then A Grade
// 2. If between 70 and 90 then a B grade
// 3. If between 50 and 70 then a C grade
// 4. Below 50 then an F grade



let marks = 55;

if (marks > 90) {
    console.log("Grade A")
}
else if (marks > 70 && marks <= 90) {
    console.log("Grade B")
}
else if(marks >50 && marks < 70){
    console.log("Grade C")
}
else if(marks < 50 ){
    console.log("Gade F")
} else{
    console.log("Fail")
}