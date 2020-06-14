import React from 'react';
import TableData from '../TableData/TableData';
import './GridView.css';
import {emptyString} from '../../Shared/Constants';

function GridView(props) {
  const { inputText, delimiter, lines } = props;
  const filteredInputText = inputText.length < lines ?  inputText : inputText.slice(0, lines) ;
  if(delimiter === emptyString) {
        return (
            <table>
                <tbody>{filteredInputText.map((line, i) => <tr key={i}><td>{line}</td></tr>)}  
                </tbody>
            </table>
        );
    } else {
        return (
            <table>
                <tbody>{filteredInputText.map((line, i) => 
                    <tr key={i}>
                        <TableData line={line.split(delimiter)} />
                    </tr>)}  
                </tbody>
            </table>
        );
    }
}

export default GridView;