import React from "react";

const TableData = () => {
  return (
    <>
      <table className="border-collapse border border-slate-500 ">
        <thead>
          <tr>
            <th className="border border-slate-600 ">Id</th>
            <th className="border border-slate-600 ">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-slate-700 ...">1</td>
            <td class="border border-slate-700 ...">Indianapolis</td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Update
              </button>
            </td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">2</td>
            <td class="border border-slate-700 ...">Columbus</td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Update
              </button>
            </td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td class="border border-slate-700 ...">3</td>
            <td class="border border-slate-700 ...">Detroit</td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Update
              </button>
            </td>
            <td class="border border-slate-700 ...">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-3">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableData;
