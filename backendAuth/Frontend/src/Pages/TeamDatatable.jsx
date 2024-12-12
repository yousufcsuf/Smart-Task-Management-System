import React from "react";

const TeamDatatable = (props) => {
  const data = [
    {
      users: [],
      taskOwner: "no user",
      __v: 0,
    },
    {
      name: "team2",
      description: "this team is for devops",
      users: ["user1", "user2"],
      taskOwner: "no user",
      __v: 0,
    },
  ];
  const dataTwo = props.data.data ? props.data.data : data;
  console.log("props.data TEAMS", dataTwo);
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
            </tr>
          </thead>
          <tbody>
            {dataTwo.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>
                  {row.users.map((user) => {
                    return <li>{user}</li>;
                  })}
                </td>
                <td>{row.taskOwner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamDatatable;
