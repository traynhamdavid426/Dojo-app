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
      greeting = (
        <div>
          Happy Saturday!,Today's schedule is
          <p>
            Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm,
            <br />
            Muay Thai: 8am-930am, 530pm-7pm,
            <br />
            Boxing: 7pm-8pm,
            <br />
            Armed Combatives: 8pm-845pm,
            <br />
            Wrestling: 845pm-945pm
          </p>
        </div>
      );
      break;
    default:
      greeting =
        " Today's schedule is Brazilian Jiu-jitsu: 6am-745am, 4pm-5pm, Muay Thai: 8am-930am, 530pm-7pm, Boxing: 7pm-8pm, Armed Combatives: 8pm-845pm, Wrestling: 845pm-945pm";
  }

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <style jsx>{`
        .container {
          margin: 20px auto;
          width: 100%;
          max-width: 600px;
          padding: 20px;
          box-shadow: 7px 7px gray;
          border: 5px solid #ccc;
          border-radius: 15px;
        }

        h2 {
          text-align: center;
          font-size: 1.5rem;
        }

        p {
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}

export default DynamicSchedule;

