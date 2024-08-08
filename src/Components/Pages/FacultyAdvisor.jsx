import React from "react";
import "../Style/facultyAdvisor.css";
import useFetch from "../../Hooks/useFetch";
import { renderTeamMember } from "../../utils/renderTeamMember";
import { BASE_URL } from "../../data/constant";

export default function FacultyAdvisor() {
  const ugHeadUrl =
    BASE_URL + "api/fetch-students?role=head&type=student&year=2024";

  const { error: headError, data: heads } = useFetch(ugHeadUrl);
  return (
    <div className="facultyAdvisor">
      {heads && heads.response.length > 0 && (
        <div className="box">
          <div className="faculty_heading">Faculty Advisors</div>
          <div className="info_about_team_container">
            {heads.response.map((ele) => {
              return renderTeamMember(ele);
            })}
          </div>
        </div>
      )}
    </div>
  );
}
