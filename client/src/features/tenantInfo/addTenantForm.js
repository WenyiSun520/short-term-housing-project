import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tenantInfoAdded } from "./tenantSlice";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
  MyTextArea
} from "../../formik/formikComponents";

const phoneRegex =/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const AddTenantForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <section className="addRentSection formSection">
      <Formik
        initialValues={{
          creater: "",
          title: "",
          description: "",
          contact: { email: "", tel: "" },
          social_media: { type: "", account: "" },
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().max(
            500,
            "Your description beyonds the limit of 500 characters"
          ),
          contact: Yup.object({
            email: Yup.string().email(
              "Your email syntax is invalid. Please review it"
            ),
            tel: Yup.string().matches(phoneRegex, "Your phone number is invalid, please review it"),
          }),
        })}
        onSubmit={(values) => {
          dispatch(
            tenantInfoAdded(
              values.creater,
              values.title,
              values.description,
              values.contact,
              values.social_media
            )
          );
          navigate("/");
        }}
      >
        {(formik) => (
          <Form className="addRentForm form" onSubmit={formik.handleSubmit}>
            <h1>Post your tenant Information</h1>
            <MyTextInput label="Title" name="title" className="titleInput" />
            <MyTextArea
              label="Description"
              name="description"
              placeholder={"Notes lengther must less than 500 characters"}
            />
            Contact Me via:
            <p>
              (All the fiedls below are <span className="bold">optional</span>,
              but we recommend you leave at least one contact information)
            </p>
            <MyOtherInput
              label="Email"
              id="email"
              name="contact.email"
              type="email"
            />
            <MyOtherInput
              label="Phone Number"
              id="phone"
              name="contact.tel"
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

export default AddTenantForm;
