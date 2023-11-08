function getGrade(points) {
    if(points >= 0 && points < 55) {
        return "Your grade is 5";

    }
    else if(points >= 55 && points < 65) {
        return "Your grade is 6";

    }
    else if(points >= 65 && points < 75) {
        return "Your grade is 7";

    }
    else if(points >= 75 && points < 85) {
        return "Your grade is 8";

    }
    else if(points >= 85 && points < 95) {
        return "Your grade is 9";

    }
    else if(points >= 95 && points <= 100) {
        return "Great job, you got 10";

    }
    else return "Enter valid number of points";

}

console.log(getGrade("55"));
console.log(getGrade("Some string"));
console.log(getGrade("101"));
