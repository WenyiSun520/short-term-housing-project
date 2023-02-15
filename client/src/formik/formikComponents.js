import React from "react";
import {useField} from "formik";


export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label + ": "}</label>
      <input className="text-Input" {...field} {...props}/>
      {meta.touched && meta.error ? (
        <div className="formikErrorMsg">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyOtherInput = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label + ": "}</label>
      <input className="dropdown" type={type} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="formikErrorMsg">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MySelection = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label + ": "}</label>
      <select className="dropdown" {...field} {...props}></select>
      {meta.touched && meta.error ? (
        <div className="formikErrorMsg">{meta.error}</div>
      ) : null}
    </>
  );
};
export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label + ": "}</label>
      <textarea className="text-Input" {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className="formikErrorMsg">{meta.error}</div>
      ) : null}
    </>
  );
};
