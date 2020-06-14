import React, { Component } from 'react';
import GridView from '../GridView/GridView';
import {defaultDelimiter, deaultNoOfLines} from '../../Shared/Constants';

class UserForm extends Component {
    constructor(props) {
      super(props);
      this.state = { inputText: this.props.inputText, delimiter: defaultDelimiter, lines: deaultNoOfLines };
      this.handleDelimiterChange = this.handleDelimiterChange.bind(this);
      this.handleLinesChange = this.handleLinesChange.bind(this);
    }

    handleLinesChange = (e) => {
        this.setState({lines : e.target.value});
    }
  
    handleDelimiterChange = (e) => {
      this.setState({delimiter : e.target.value});
    }
  
    render() {
        return (<div>
                    Delimiter: <input type="text" value={this.state.delimiter} onChange={this.handleDelimiterChange} />
                    Lines: <input type="text" value={this.state.lines} onChange={this.handleLinesChange} />
                    <br/>
                    <br/>
                    <GridView {...this.state} />
                </div>);
    }
  }

export default UserForm;