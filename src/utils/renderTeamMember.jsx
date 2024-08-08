import { FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

export const renderTeamMember = (member, key) => {

  return (
    <div
      className="info_about_team"
      data-aos="fade-up"
      data-aos-duration="1000"
      key={key}
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
};
