import React, {Component} from 'react';
import '../search_option/SearchOption';
import './AccessibleGlobalSearch.css';
import SearchOption from "../search_option/SearchOption";

class AccessibleGlobalSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            select_type: 'Select a search type',
            website_search_url: 'http://www.nationalarchives.gov.uk/search/results',
            discovery_search_url: 'http://discovery.nationalarchives.gov.uk/results/',
            search_options: {
                group_name: 'search_type',
                options: [
                    {
                        label: 'Search Discovery',
                        id: 'discovery_search'
                    },
                    {
                        label: 'Search the website',
                        id: 'website_search'
                    }
                ]
            }
        }
    }

    render() {
        return (
            <form className="global-search-js">
                <fieldset>
                    <legend>{this.state.select_type}</legend>
                    <SearchOption group_name={this.state.search_options.group_name} options={this.state.search_options.options}/>
                </fieldset>
            </form>
        );
    }
}

export default AccessibleGlobalSearch;


