var isAgreed = confirm("Do you agree to share your personal information with our site?");

if (isAgreed) {
    var nickname = "Karen";
    var heightInches = 62;
    var weightKg = 50;

    var feet = Math.floor(heightInches / 12);
    var inches = heightInches % 12;
    var height = feet + "'" + inches + "\"";

    var weightLbs = weightKg * 2.20462;

    console.log("Name: " + nickname);
    console.log("Height: " + height);
    console.log("Weight: " + weightLbs.toFixed(3) + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}