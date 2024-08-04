import React, { useEffect, useState } from "react";
import "../Style/ugteam.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../../data/constant";
import useFetch from "../../Hooks/useFetch";
// Assuming you have a placeholder image

export default function UGTeam() {
  const ugHeadUrl =
    BASE_URL + "api/fetch-students?role=head&type=student&year=2024";
  const ugAssistantHeadUrl =
    BASE_URL + "api/fetch-students?role=assistant_head&type=student&year=2024";
  const ugStudentGuidUrl =
    BASE_URL + "api/fetch-students?role=student_guide&type=student&year=2024";

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const { error: headError, data: heads } = useFetch(ugHeadUrl);
  const { error: assistantHeadError, data: assistantHeads } =
    useFetch(ugAssistantHeadUrl);
  const { error: studentGuideError, data: studentGuides } =
    useFetch(ugStudentGuidUrl);

  const renderTeamMember = (member) => (
    <div
      className="info_about_team"
      data-aos="fade-up"
      data-aos-duration="1000"
      key={member.email}
    >
      <img
        src={member.photo || "https://placehold.co/600x400"}
        alt={member.name}
        className="team_img"
      />
      <div className="team_details">
        <div className="team_details_name">{member.name}</div>
        <div className="team_content">
          <FaWhatsapp color="green" size={20} style={{ marginRight: 7 }} />
          {member.phone}
        </div>
        <div className="team_content">
          <span style={{ fontWeight: 600 }}> Hometown :</span> {member.hometown}
        </div>
        <div className="team_content">
          <span style={{ fontWeight: 600 }}> Branch : </span> {member.branch}
        </div>
        <div className="team_content_small">{member.description}</div>
        <div className="team_content_icon">
          <Link to={`mailto:${member.email}`}>
            <MdOutlineEmail size={20} />
          </Link>
          {member.instagram && (
            <Link to={`https://instagram.com/${member.instagram}`}>
              <IoLogoInstagram size={19} />
            </Link>
          )}
          {member.linkedin && (
            <Link to={`https://linkedin.com/in/${member.linkedin}`}>
              <TiSocialLinkedin size={22} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ugteam">
      <div className="ugteam_heading">UG Team</div>

      {heads && heads.response.length > 0 && (
        <div className="box">
          <div className="ugteam_heading">Student Heads</div>
          <div className="info_about_team_container">
            {heads.response.map((ele) => {
              return renderTeamMember(ele);
            })}
          </div>
        </div>
      )}

      {assistantHeads && assistantHeads.response.length > 0 && (
        <div className="box">
          <div className="ugteam_heading">Student Assistant Heads</div>
          <div className="info_about_team_container">
            {assistantHeads["response"].map(renderTeamMember)}
          </div>
        </div>
      )}

      {studentGuides && studentGuides.response.length > 0 && (
        <div className="box">
          <div className="ugteam_heading">Student Guides</div>
          <div className="info_about_team_container_ug">
            {studentGuides["response"].map(renderTeamMember)}
          </div>
        </div>
      )}
    </div>
  );
}
