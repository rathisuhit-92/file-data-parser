import React from 'react';
import {maxTableColumns, emptyString} from '../../Shared/Constants';

function TableData(props) {
  const delimiterArray = props.line;
  let finaldelimiterArray = [];
  for(let i=0; i< maxTableColumns; i++)
  {
    finaldelimiterArray.push(delimiterArray[i] ? delimiterArray[i] : emptyString);
  }
        return (
            <>
            {
                finaldelimiterArray.map((word, i) => <td key={i}>{word}</td>)
            }
            </>
        );
}
export default TableData;