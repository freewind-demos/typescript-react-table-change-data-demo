import React, {useState} from 'react'

import {useTable} from 'react-table';
import columnsDefs from './columnDefs';
import {data1, data2} from './data';

export default function Hello() {

  const [data, setData] = useState(data1)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columnsDefs,
    data
  })

  function changeData() {
    setData(data => data === data1 ? data2 : data1)
  }

  return <div>
    <h1>Hello React-Table</h1>
    <button onClick={changeData}>Change Data</button>
    <table {...getTableProps()}>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        }
      )}
      </tbody>
    </table>
  </div>
};
