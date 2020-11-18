import React from "react";
import TableHead from "./Head";
import TableBody from "./Body";

import "./index.scss";

const Table = ({ columns, data }) => {
  return (
    <table className="table table-striped">
      <TableHead columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
