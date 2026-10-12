
function calculateBMI() {
    let weight = parseFloat(prompt("Enter your weight in kg"));
    let heightCm = parseFloat(prompt("Enter your height in cm"));

    let height = heightCm / 100;
    let bmi = weight / (height * height);

    let message = "";

    if (bmi < 18.5) {
        message = "You are underweight";
    }
    else if (bmi < 25) {
        message = "You are normal weight";
    }
    else if (bmi < 30) {
        message = "You are overweight";
    }
    else {
        message = "You are obese";
    }

    document.getElementById("result").innerHTML =
        `Your BMI is: ${bmi.toFixed(2)}<br>${message}`;
}
