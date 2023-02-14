import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleRentPage = ({ match }) => {
  const urlParams = useParams();
  let rentId = urlParams.rentId;
  const singleProfile = useSelector((state) =>
    state.rentsInfo.find((info) => info.id === rentId)
  );

  return (
    <section className="singleRentinfo">
      <h1 className="rent-title">{singleProfile.title}</h1>
      <p className="creator-info">
        {singleProfile.creater}, published on
        {singleProfile.create_date}
      </p>
      <p className="description">{singleProfile.description}</p>
      <div className="contact">
       Contact:
        {singleProfile.contact.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>

      <p className="social-media">
        {singleProfile.social_media.type}: 
        {singleProfile.social_media.account}
      </p>
    </section>
  );
};

export default SingleRentPage;
