import React from "react";
import "../App.css";

const Datatable = (props) => {
  console.log(props);

  const data = [
    {
      title: "",
      description: "",
      status: "",
      dueDate: "",
      __v: 0,
    },
    {
      title: "",
      description: "",
      status: "",
      dueDate: "",
      __v: 0,
    },
    {
      title: "",
      description: "",
      status: "",
      dueDate: "",
      __v: 0,
    },
  ];

  const dataTwo = props.data.data ? props.data.data : data;

  console.log("props.data", dataTwo);
  return (
    <>
      <div className="table-container">
        <h1>{props.heading}</h1>
        <table>
          <thead>
            <tr>
              <th>{props.cols.col1}</th>
              <th>{props.cols.col2}</th>
              <th>{props.cols.col3}</th>
              <th>{props.cols.col4}</th>
              <th>{props.cols.col5}</th>
            </tr>
          </thead>
          <tbody>
            {dataTwo.map((row, index) => (
              <tr key={index}>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>{row.status}</td>
                <td>{row.dueDate}</td>
                <td>{row.taskOwner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Datatable;
