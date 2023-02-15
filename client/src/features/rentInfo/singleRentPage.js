import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TimeStamp from "../../util/timestamp";
import CommentSection from "../comments/commentSection";


const SingleRentPage = () => {
  const urlParams = useParams();
  let rentId = urlParams.rentId;
  const singleProfile = useSelector((state) =>
    state.rentsInfo.find((info) => info.id === rentId)
  );

  return (
    <section className="singleRentinfo">
      <h1 className="rent-title">{singleProfile.title}</h1>
      <p className="creator-info">
        By {singleProfile.creater}, published
        <TimeStamp date={singleProfile.create_date} />
      </p>
      <p className="description">{singleProfile.description}</p>
      <div className="contact">
        Contact:
        {singleProfile.contact.email}
        {singleProfile.contact.tel}
      </div>

      <p className="social-media">
        {singleProfile.social_media.type}:{singleProfile.social_media.account}
      </p>
      <section className="commentSection">
      <CommentSection postId={singleProfile.id} />
      </section>
    </section>
  );
};

export default SingleRentPage;
