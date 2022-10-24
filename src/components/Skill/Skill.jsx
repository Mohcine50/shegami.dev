import React, { useEffect, useState } from "react";
import "./skill.css";
function Skill({ level, skillName }) {
  const [levelRange, setLevlRange] = useState("");
  const levelN = level;
  useEffect(() => {
    if (levelN <= 30) {
      setLevlRange("Beginner");
    } else if ((levelN < 70) & (levelN > 30)) {
      setLevlRange("Regular");
    } else if (levelN >= 70) {
      setLevlRange("Advanced");
    }
  }, []);
  return (
    <div className='skill'>
      <div className='skill-info'>
        <h1>{skillName}</h1>
        <span id='level'>{`${levelRange}`}</span>
      </div>
      <div className='level-line'>
        <span style={{ width: `${level}%` }}></span>
      </div>
    </div>
  );
}

export default Skill;
