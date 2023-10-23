import React, { useState } from "react";
const CoursesDescription = () => {
  const [selectedCourse, setSelectedCourse] = useState(""); // Initialize with an empty string

  const courseOptions = ["HTML5", "CSS3", "ReactJS", "JavaScript"];

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="courses-dropdown">
      <h2>Choose a Course</h2>
      <select value={selectedCourse} onChange={handleChange}>
        <option value="">Select a course</option>
        {courseOptions.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      {selectedCourse && <p>You selected: {selectedCourse}</p>}
    </div>
  );
};

export default CoursesDescription;
