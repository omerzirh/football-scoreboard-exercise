import React from "react";
import { Table, TableBody, TableData } from "./style.elements";

export default function Index(props) {
  return (
    <>
      <Table>
        <TableBody>
          {props.data.map((match, index) => (
            <tr key={index}>
              <TableData>{match.home}</TableData>
              <TableData>{match.away}</TableData>
              <TableData>{match.homeScore}</TableData>
              <TableData>{match.awayScore}</TableData>
              <TableData>{match.status}</TableData>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
