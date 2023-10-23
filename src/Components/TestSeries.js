import React from "react";
const TestSeries = () => {
  const testSeriesData = [
    {
      title: "Web Development Fundamentals",
      description:
        "A comprehensive test series to help you build a strong foundation in web development.",
      tests: [
        "HTML Basics",
        "CSS Styling",
        "JavaScript Essentials",
        "Responsive Design"
      ]
    },
    {
      title: "React Mastery",
      description:
        "Master the art of building modern web applications with React.",
      tests: [
        "React Components",
        "State and Props",
        "Routing with React Router",
        "Redux for State Management"
      ]
    }
  ];

  return (
    <div className="test-series">
      <h2>Web Development Test Series</h2>
      {testSeriesData.map((series, index) => (
        <div key={index} className="test-series-item">
          <h3>{series.title}</h3>
          <p>{series.description}</p>
          <ul>
            {series.tests.map((test, testIndex) => (
              <li key={testIndex}>{test}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TestSeries;
