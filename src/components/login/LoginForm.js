import { Password } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";

function LoginForm({ isLoggedIn, setIsLoggedIn, user, setUser }) {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
  const [formErrors, setformErrors] = useState({});

  const trueCredential = { Email: "admin@gmail.com", Password: "Admin@12345" };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formValues);
    setformErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      if (
        formValues.Email === trueCredential.Email &&
        formValues.Password === trueCredential.Password
      ) {
        setUser([...user, formValues]);
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setIsLoggedIn(false);
        setIsSubmit(false);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Login credentials incorrect!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const ptn = /^\w+$/;
    const digitPtn = /[0-9]/;
    const alphaptn = /[a-z]/;
    const capalpha = /[A-Z]/;
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (values.UserName && values.Password && values.Email) {
      if (!ptn.test(values.UserName)) {
        errors.UserName =
          "Username must contain only letters, numbers and underscores";
        formValues.UserName = "";
      } else if (!emailPattern.test(values.Email)) {
        errors.Email = "Invaild email address";
      } else if (values.Password.length < 8) {
        errors.Password = "Password must contain at least eight characters";
        formValues.Password = "";
      } else if (values.Password === values.UserName) {
        errors.Password = "Password must be different from Username";
        formValues.Password = "";
      } else if (!digitPtn.test(values.Password)) {
        errors.Password = "Password must contain at least one number (0-9)";
        formValues.Password = "";
      } else if (!alphaptn.test(values.Password)) {
        errors.Password =
          "Password must contain at least one lowercase letter (a-z)";
        formValues.Password = "";
      } else if (!capalpha.test(values.Password)) {
        errors.Password =
          "Password must contain at least one uppercase letter (A-Z)";
        formValues.Password = "";
      }
    } else {
      if (!values.Email) {
        errors.Email = "Email is required";
      }
      if (!values.UserName) {
        errors.UserName = "Username is required";
      }
      if (!values.Password) {
        errors.Password = "Password  is required";
      }
      return errors;
    }
    return errors;
  };

  return (
    <div className="container  ">
      <div className="row form-row body ">
        <div className="col-4 offset-4  ">
          <form className="main-form" onSubmit={submitHandler}>
            <h1 className="text-center header">EMS</h1>
            <div className="mb-3">
              <label htmlFor="exampleInputUsername1" className="htmlForm-label">
                Username
              </label>
              <input
                type="username"
                className="form-control"
                id="exampleInputUsername1"
                aria-describedby="username"
                onChange={(e) =>
                  setFormValues({ ...formValues, UserName: e.target.value })
                }
                value={formValues.UserName}
              />
              {formErrors.UserName && (
                <p className="errormsg">{formErrors.UserName}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="htmlForm-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) =>
                  setFormValues({ ...formValues, Email: e.target.value })
                }
                value={formValues.Email}
              />
              {formErrors.Email && (
                <p className="errormsg">{formErrors.Email}</p>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="htmlForm-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) =>
                  setFormValues({ ...formValues, Password: e.target.value })
                }
                value={formValues.Password}
              />
              {formErrors.Password && (
                <p className="errormsg">{formErrors.Password}</p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
