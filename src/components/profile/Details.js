import React, { useContext } from "react";
import userContext from "../../store/user-context";
import { v4 as uuidv4 } from "uuid";

function Details() {
  const {
    state: { chosenUser },
  } = useContext(userContext);

  const { education, workExperience } = chosenUser;
  // const { institution, startYear, endYear, degree } = education;

  console.log(chosenUser);
  return (
    <>
      <h4>Education</h4>
      <div>
        {education &&
          education.map((item) => (
            <div key={uuidv4()}>
              <div>
                {`${item.startYear}-${item.endYear} `}
                {item.institution} ({item.degree})
              </div>
            </div>
          ))}
      </div>
      <h4>Experience</h4>
      <div>
        {workExperience &&
          workExperience.map((item) => (
            <div key={uuidv4()}>
              <div>
                {`${item.startYear}-${item.endYear ?? "Present"} `}
                {item.institution} ({item.title})
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Details;
