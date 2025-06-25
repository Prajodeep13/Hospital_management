import React from "react";
import TeamGrid from "../TeamGrid";

const OurTeam = () => (
  <>
  <div className="text-center">
    <h2 className="text-3xl font-bold text-cyan-700 mb-4">Our Team</h2>
    <p className="text-gray-600">Our team is composed of highly trained doctors, researchers, and support staff.</p>
  </div>
  <TeamGrid />
  </>
);

export default OurTeam;
