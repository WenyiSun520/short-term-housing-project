import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyOtherInput,
  MySelection,
} from "../../formik/formikComponents";

const AddRentForm = () => {
  return (
    <section className="addRentSection">
      <Formik
        initialValues={{
          creater: "",
          create_date: new Date(),
          title: "",
          description: "",
          contact: [],
          social_media: { type: "", account: "" },
        }}
        onSubmit={(value) => {
          alert(value);
        }}
      >
        {(formik) => (
          <Form className="addRentForm">
            <h1>Share a new Rent</h1>
            
          </Form>
        )}
      </Formik>
    </section>
  );
};
