import React from 'react';

class RevenueForm extends React.Component {
    constructor(props) {
      super(props);
      this.buttonClick= this.buttonClick.bind(this);
    }

    buttonClick() {
      var revValue = document.getElementById('revenue-value').value;
      var revTitle = document.getElementById('revenue-title').value;
      if ((!isNaN(revValue)) && (revTitle !== '')) {
        this.props.clickHandler(revTitle, revValue);
      } else {
        alert('Please enter a title and valid number for the entry');
      }
    }

    render() {
      return (
        <div>
            <h2 className="input-title">Earned Revenue</h2>
            <div className="input-content">
              Title:
              <input type="text" id="revenue-title" name="title"></input>
              Value:
              <input type="text" id="revenue-value" name="value"></input>
              <button onClick={this.buttonClick}>Submit</button>
            </div>
        </div>
      );
    }
  }

export default RevenueForm;