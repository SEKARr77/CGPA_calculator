const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "RA": 0
};

function calculateCGPA() {
    let table = document.getElementById("gradeTable");
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i < table.rows.length; i++) {
        let credits = parseInt(table.rows[i].cells[1].innerText);
        let grade = table.rows[i].cells[2].querySelector("select").value;

        if (grade !== "") {
            totalCredits += credits;
            totalPoints += gradePoints[grade] * credits;
        }
    }

    if (totalCredits === 0) {
        document.getElementById("result").innerHTML = "CGPA: 0.00";
        return;
    }

    let cgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById("result").innerHTML = "CGPA: " + cgpa;
}