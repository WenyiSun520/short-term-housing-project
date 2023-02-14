import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form} from "formik";
import { rentInfoAdded } from "./rentSlice";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
  MyTextArea
} from "../formik/formikComponents";

const AddRentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="addRentSection formSection">
      <Formik
        initialValues={{
          creater: "",
          title: "",
          description: "",
          contact: ['',''],
          social_media: { type: "", account: "" },
        }}
        onSubmit={values => {
            dispatch(
              rentInfoAdded(
                values.creater,
                values.title,
                values.description,
                values.contact,
                values.social_media
              )
            );
            navigate('/')
        }}
      >
        {(formik) => (
          <Form className="addRentForm form" onSubmit={formik.handleSubmit}>
            <h1>Share a new Rent</h1>
            <MyTextInput label="Title" name="title"/>
            <MyTextArea
              label="Description"
              name="description"
              placeholder={"Notes lengther must less than 300 characters"}
            />
            Contact Me via:
            <MyOtherInput
              label="Email"
              id="email"
              name="contact[0]"
              type="email"
            />
            <MyOtherInput
              label="Phone Number"
              id="phone"
              name="contact[1]"
              type="tel"
              placeholder="0000000000"
            />
            <MySelection label="Social Media" name="social_media.type">
              <option value="">Choose Social Media</option>
              <option value="instagram">Instgram</option>
              <option value="facebook">Facebook</option>
              <option value="snapchat">Snapchat</option>
              <option value="discord">Discord</option>
              <option value="other">other</option>
            </MySelection>
            <MyTextInput
              label="Account"
              placeholder="your account "
              name="social_media.account"
            />
            <button type="submit" className="rentSubmitBtn">
              <span>Save Profile</span>
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default AddRentForm;
