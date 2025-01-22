import {Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import RedErrorMessage from "./RedErrorMessage";

const Form2 = () => {
  const [formData, setFormData] = useState({});
  const newValidation = Yup.object({
    name: Yup.string().min(3).max(20).required(),
    age: Yup.number().min(18).max(60).required(),
    password: Yup.string().min(8).max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"use uppercase,Lowercase,special-character and number").required("password must be strong"),
    cpass: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match"),
    gender: Yup.string().required(),
    hobby: Yup.array().min(1).required(),
    country: Yup.string().required("country is must"),
    comment: Yup.string().max(100).required("comment is must"),
  });
  console.log(formData);
  return (
    <div>
      <Formik
        validationSchema={newValidation}
        initialValues={{
          name: "",
          age: "",
          password: "",
          cpass:"",
          gender: "",
          hobby: [],
          country: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          setFormData(values);
        }}
      >
        <Form>
          <label htmlFor="name">Enter Your Name</label>
          <Field type="text" name="name" />
         <RedErrorMessage name="name"/>
          <br /> <br />
          <label htmlFor="age">Enter Your Age</label>
          <Field type="number" name="age" />
          <RedErrorMessage name="age"/>
          <br /> <br />
          <label htmlFor="password">Enter Your password</label>
          <Field type="password" name="password" />
          <RedErrorMessage name="password"/>
          <br/>
          <label htmlFor="cpass">Enter Your confirm password</label>
          <Field type="password" name="cpass" />
          <RedErrorMessage name="cpass"/>
          <br />
          <br />
          <label htmlFor="gender">Enter Your Gender</label>
          <br />
          <label htmlFor="male">male</label>
          <Field type="radio" name="gender" value="male" />
          <br />
          <label htmlFor="female">Female</label>
          <Field type="radio" name="gender" value="female" />
          <RedErrorMessage name="gender"/>
          <br />
          <br />
          <label htmlFor="hobby">Hobby</label>
          <br />
          <label htmlFor="reading">Reading</label>
          <Field type="checkbox" name="hobby" value="reading" />
          <br />
          <label htmlFor="writing">writing</label>
          <Field type="checkbox" name="hobby" value="writing" />
          <br />
          <label htmlFor="sleeping">sleeping</label>
          <Field type="checkbox" name="hobby" value="sleeping" />
          <RedErrorMessage name="hobby" />
          <br />
          <lable htmlFor="checkbox">Select Country</lable>
          <br />
          <Field name="country" as="select">
            <option value="">Select Country</option>
            <option value="canada">canada</option>
            <option value="usa">usa</option>
            <option value="uk">uk</option>
          </Field>
          <RedErrorMessage name="country"/>
          <br />
          <lable htmlFor="comment">Comment:</lable>
          <br />
          <Field as="textarea" name="comment" />
          <RedErrorMessage name="comment"/>
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Form2;
