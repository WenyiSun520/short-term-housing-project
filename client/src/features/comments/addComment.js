import React from "react";
import { Formik, Form} from "formik";
import { commentAdded } from "./commentSlice";
import { useDispatch } from "react-redux";
import { MyTextArea } from "../../formik/formikComponents";
import * as Yup from "yup";

const PostComment = ({ postId }) => {
  const dispatch = useDispatch();
  return (
    <section className="addCommentSection formSection">
      <Formik
        initialValues={{ creator: "anoymous", content: "", postId: postId }}
        validationSchema={Yup.object({
          content: Yup.string().max(
            500,
            "Your description beyonds the limit of 500 characters"
          ),
        })}
        onSubmit={(values,actions) => {
          dispatch(commentAdded(values.creator,values.content,values.postId));
          actions.resetForm({content:""})
        }}
      >
        {(formik) => (
          <Form className="form" onSubmit={formik.handleSubmit}>
            <MyTextArea
              label="Leave your comment"
              name="content"
              placeholder={"Notes lengther must less than 500 characters"}
            />
            <button type="submit">Post your Comment</button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default PostComment;
