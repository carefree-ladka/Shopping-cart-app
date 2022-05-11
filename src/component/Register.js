import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

const labelStyle = {
  display: "block",
};

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  cnfPassword: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const id = useId();
  let navigate = useNavigate();

  let spaceRegex = "^\\S*$";
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.password.match(spaceRegex)) {
      setErrorMsg("Password should not contain spaces");
      return;
    }

    if (formData.password.length < 6 && formData.cnfPassword.length) {
      setErrorMsg("Password should be of minimum 6 characters");
      return;
    }

    if (formData.password !== formData.cnfPassword) {
      setErrorMsg("Both passwords do not match");
      return;
    }
    if (
      formData.email === "" ||
      !formData.email.match("/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,15}/g)")
    ) {
      setErrorMsg("Email is invalid");
      return;
    }
    setFormData(initialState);
    setErrorMsg(null);
    navigate("/");
  };
  return (
    <div className="register__form">
      <div className="register__left">
        <h2>SignUp</h2>
        <p>We do not share your personal details with anyone.</p>
      </div>
      <form noValidate={false}>
        <div>
          <label htmlFor={id + "-fname"} style={labelStyle}>
            First Name
          </label>
          <input
            name="fname"
            type="text"
            id={id + "-fname"}
            required
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={id + "-lname"} style={labelStyle}>
            Last Name
          </label>
          <input
            name="lname"
            type="text"
            id={id + "-lname"}
            required
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={id + "-email"} style={labelStyle}>
            Email
          </label>
          <input
            name="email"
            type="email"
            id={id + "-email"}
            minLength="6"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={id + "-password"} style={labelStyle}>
            Password
          </label>
          <input
            name="password"
            type="password"
            id={id + "-password"}
            minLength="6"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor={id + "-cnfPassword"} style={labelStyle}>
            Confirm Password
          </label>
          <input
            name="cnfPassword"
            type="password"
            id={id + "-cnfPassword"}
            minLength="6"
            required
            value={formData.cnfPassword}
            onChange={handleChange}
          />
        </div>
        <footer>
          <p className="error-msg">{errorMsg && errorMsg}</p>
        </footer>
        <button type="submit" onClick={handleSubmit}>
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Register;
