import React from "react";

function DynamicSchedule() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const currentDayOfWeek = daysOfWeek[today.getDay()];

  let greeting = "";
  switch (currentDayOfWeek) {
    case "Sunday":
      greeting = "Happy Sunday!, Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Monday":
      greeting = "Happy Monday!,  Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Tuesday":
      greeting = "Happy Tuesday!,  Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Wednesday":
      greeting = "Happy Wednesday!,  Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Thursday":
      greeting = "Happy Thursday!, Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Friday":
      greeting = "Happy Friday!,  Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
      break;
    case "Saturday":
      greeting = "Happy Saturday!,Today's schedule is Brazilian Jiu-jitsu:, Muay Thai:, Boxing:, Armed Combatives:, Wrestling: ";
      break;
    default:
      greeting = " Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
  }

  return <h1>{greeting}</h1>;
}

export default DynamicSchedule;
