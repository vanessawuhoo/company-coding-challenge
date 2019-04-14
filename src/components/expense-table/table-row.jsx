import React, { Component } from 'react';

class TableRow extends Component {
    render() {
      return (
        <tr>
          <td>{this.props.title}</td>
          <td className="revenue">{(this.props.type === 'revenue') ? this.props.value : ""}</td>
          <td className="expense">{(this.props.type === 'expense') ? this.props.value : ""}</td>
        </tr>
      );
    }
  }

export default TableRow;