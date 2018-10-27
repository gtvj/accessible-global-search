import React, { Component } from 'react';
import './AccessibleGlobalSearch.css';

class AccessibleGlobalSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      select_type: 'Select a search type'
    }
  }

  render() {
    return (
      <form className="global-search-js">
        <fieldset>
          <legend>{this.state.select_type}</legend>
        </fieldset>
      </form>
    );
  }
}

export default AccessibleGlobalSearch;


