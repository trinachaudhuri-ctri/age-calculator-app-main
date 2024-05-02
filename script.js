function getDOB() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  if (day && month && year) {
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12) {
      let today = new Date();
      let dob = new Date(year, month - 1, day);
      let ageInMilliseconds = today - dob;
      let ageInYears = Math.floor(
        ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
      );
      let remainingMilliseconds =
        ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25);
      let ageInMonths = Math.floor(
        remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12))
      );
      remainingMilliseconds %= 1000 * 60 * 60 * 24 * (365.25 / 12);
      let ageInDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24));
      displayAge(ageInYears, ageInMonths, ageInDays);
    } else {
      console.log("Invalid date");
    }
  } else {
    console.log("Please enter all fields");
  }
}
function displayAge(years, months, days) {
  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
}
