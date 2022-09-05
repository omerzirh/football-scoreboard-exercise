import React from "react";
import { upperCaseFirstLetter } from "../../helpers/helper";
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
              <TableData>{upperCaseFirstLetter(match.status)}</TableData>
            </tr>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
