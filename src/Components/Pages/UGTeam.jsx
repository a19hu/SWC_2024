import React, { useEffect, useState } from "react";
import "../Style/ugteam.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../../data/constant";
import useFetch from "../../Hooks/useFetch";
import { renderTeamMember } from "../../utils/renderTeamMember";
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
