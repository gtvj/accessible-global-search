import React, {Component} from 'react';
import './AccessibleGlobalSearch.css';

class AccessibleGlobalSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select_type: 'Select a search type',
            website_search_url: 'http://www.nationalarchives.gov.uk/search/results',
            discovery_search_url: 'http://discovery.nationalarchives.gov.uk/results/'
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


