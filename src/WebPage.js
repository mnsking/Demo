import React from "react";
import CourseDescription from "./CourseDescription";
import TestSeries from "./TestSeries";
import RecordedClass from "./RecordedClass";

const WebPage = () => {
  return (
    <div>
      <h1>Course Information</h1>
      <CourseDescription />
      <TestSeries />
      <RecordedClass />
    </div>
  );
};

export default WebPage;
