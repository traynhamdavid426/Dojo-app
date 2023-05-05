import React from "react";

function DynamicSchedule() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const currentDayOfWeek = daysOfWeek[today.getDay()];

  let greeting = "";
  switch (currentDayOfWeek) {
    case "Sunday":
      greeting = "Happy Sunday!";
      break;
    case "Monday":
      greeting = "Happy Monday!";
      break;
    case "Tuesday":
      greeting = "Happy Tuesday!";
      break;
    case "Wednesday":
      greeting = "Happy Wednesday!";
      break;
    case "Thursday":
      greeting = "Happy Thursday!";
      break;
    case "Friday":
      greeting = "Happy Friday!";
      break;
    case "Saturday":
      greeting = "Happy Saturday!";
      break;
    default:
      greeting = "Hello!";
  }

  return <h1>{greeting}</h1>;
}

export default DynamicSchedule;
