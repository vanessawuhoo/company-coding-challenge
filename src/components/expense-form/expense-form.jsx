import React, { Component } from 'react';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.buttonClick= this.buttonClick.bind(this);
      }

    buttonClick() {
      var expValue = document.getElementById('expense-value').value;
      var expTitle = document.getElementById('expense-title').value;
      if ((!isNaN(expValue)) && (expTitle !== '')) {
        this.props.clickHandler(expTitle, expValue);
      } else {
        alert('Please enter a title and valid number for the entry');
      }
    }
  
    render() {
      return (
        <div>
            <h2 className="input-title">Expenses</h2>
            <div className="input-content">
              Title:
              <input type="text" id="expense-title" name="title"></input>
              Value:
              <input type="text" id="expense-value" name="value"></input>
              <button onClick={this.buttonClick}>Submit</button>
            </div>
        </div>
      );
    }
  }

export default ExpenseForm;