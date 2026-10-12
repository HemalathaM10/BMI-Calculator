function calculateBMI() {
    let weight = prompt("Enter your weight in kg");
    let heightCm = prompt("Enter your height in cm");

    weight = parseFloat(weight);
    heightCm = parseFloat(heightCm);

    let height = heightCm / 100;

    let bmi = weight / (height * height);

    document.getElementById("result").innerHTML =
        `Your BMI is: ${bmi.toFixed(2)}`;
}