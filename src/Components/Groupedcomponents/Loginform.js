import React, { useState } from "react";
import Signin from "../Signin";
import Signup from "../Signup";
import "../Styles/Loginform.css"; 

const Loginform = () => {
  const [currentForm, setCurrentForm] = useState("signin");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="login-forms">
      <div>
        {currentForm === "signin" ? (
          <Signin onFormSwitch={toggleForm} />
        ) : (
          <Signup onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Loginform;
