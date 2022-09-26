import React, { useMemo } from "react";
import { useTable } from "react-table";
import { IShortmeData } from "../types/shortme";
import ShortmeService from '../services/ShortmeService';
import "./style.css"

type Props = {
  data: IShortmeData[];
};

const columns: any[] = [
  {
    Header: "Gekürzter Code",
    accessor: "code",
  },
  {
    Header: "Originale URL",
    accessor: "originalUrl",
  },
  {
    Header: "Erstellt am",
    accessor: "createdAt",
  },
];

function Table(props: Props) {
  const data = useMemo(() => props.data, [props.data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  
    const onClickRedir = async (code:string) => {
      await ShortmeService.getRedirected(code);
    }
    
  return (
    <table className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope="col">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
              if(cell.column.Header?.toString() == "Gekürzter Code"){
                return <td {...cell.getCellProps()}><a href ="#" onClick={() => {onClickRedir(cell.value)}}>{cell.render("Cell")}</a></td>;
              } else {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
