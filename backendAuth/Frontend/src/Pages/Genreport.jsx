import React, { useState } from "react";
import { useForm } from "react-hook-form";
const buttonStyle = {
  margin: "2px",
};
const Genreport = (props) => {
  const [report, setReport] = useState("");
  const [guidelines, setGuidelines] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleform = async (data) => {
    console.log("data", data);
    await generateReport(data);

    //setGuidelines(solution.data);
  };

  //setTasks(props.taskData.data);
  const generateReport = async (data) => {
    try {
      const passJson = {
        guidline: data,
      };
      console.log("passJson", passJson);

      const url = "http://localhost:8080/teams/generaterep";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(passJson),
      });
      const result = await response.json();
      console.log("result", result.data);
      setReport(result.data);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(err);
    }

    console.log("generated report:");
    //generatingReport(); // Trigger the fetch request
    console.log("report is generated: " + report);
  };

  return (
    <>
      <div className="table-container">
        <h1>Get help</h1>
        <table>
          <thead>
            <tr>
              <th>AI Assitant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <form onSubmit={handleSubmit(handleform)}>
                  <div class="form-group">
                    <label for="description">Prompt</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Enter task description"
                      {...register("description")}
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input type="submit" value="Generate Report" />
                  </div>
                </form>
              </td>
            </tr>
            <tr>
              <td>Ai guidelines: {report}</td>
            </tr>
            <div></div>
            <div></div>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Genreport;
