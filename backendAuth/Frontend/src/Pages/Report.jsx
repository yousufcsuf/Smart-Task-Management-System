import React from "react";

const Report = () => {
  return (
    <>
      <div class="report-section">
        <div class="report-header">Monthly Performance Report</div>
        <div class="report-content">
          <div class="report-item">
            <h3>Task Completion Rate</h3>
            <p>85% of tasks were completed on time this month.</p>
          </div>
          <div class="report-item">
            <h3>Team Efficiency</h3>
            <p>Average task completion time improved by 12%.</p>
          </div>
          <div class="report-item">
            <h3>Project Deliverables</h3>
            <p>3 out of 4 key deliverables were met successfully.</p>
          </div>
          <div class="report-item">
            <h3>Client Feedback</h3>
            <p>Overall client satisfaction score: 4.5/5.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
