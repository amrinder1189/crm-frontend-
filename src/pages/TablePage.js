import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const TablePage = ({ Data }) => {
  // console.log("tictka", Data);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Status</th>
          <th>Added At</th>
        </tr>
      </thead>
      <tbody>
        {Data.length ? (
          Data.map((row) => (
            <tr row={row.id}>
              <Link to={`/ticketpage/${row.id}`}>
                <td>{row.id}</td>
              </Link>
              <td>{row.status}</td>
              <td>{row.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Tickets</td>
          </tr>
        )}
        {/* {Data.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.status}</td>
            <td>{row.addedAt}</td>
          </tr>
        ))} */}
      </tbody>
    </Table>
  );
};
