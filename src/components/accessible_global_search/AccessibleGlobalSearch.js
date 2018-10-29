import React, {Component} from 'react';
import '../search_option/SearchOption';
import './AccessibleGlobalSearch.css';
import SearchOption from "../search_option/SearchOption";

class AccessibleGlobalSearch extends Component {

    constructor(props) {
        super(props);
        this.handle_search_selection = this.handle_search_selection.bind(this);
        this.state = {

            active_search_url: 'http://www.nationalarchives.gov.uk/search/results',
            active_search_label: 'Search the website',

            search_query: 'Enter search term',
            website_search_url: 'http://www.nationalarchives.gov.uk/search/results',
            discovery_search_url: 'http://discovery.nationalarchives.gov.uk/results/',
            search_options: {
                group_name: 'search_type',
                select_type: 'Select a search type',
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

    handle_search_selection(e) {
        console.log(`The element was ${e.target.id}`);

        if (e.target.id === 'discovery_search') {
            this.setState({
                active_search_url: this.state.discovery_search_url,
                active_search_label: 'Search Discovery'
                });
        }

        if (e.target.id === 'website_search') {
            this.setState({
                active_search_url: this.state.website_search_url,
                active_search_label: 'Search the website'
            });
        }
    }

    render() {
        return (
            <form role="search" className="global-search-js" action={this.state.active_search_url}
                  onChange={this.handle_search_selection}>
                <fieldset id="select-search-type">
                    <legend>{this.state.search_options.select_type}</legend>
                    <SearchOption group_name={this.state.search_options.group_name}
                                  options={this.state.search_options.options}/>
                </fieldset>
                <fieldset id="search-query">
                    <legend>{this.state.search_query}</legend>
                    <input type="search" role="search" aria-label={this.state.active_search_label}/>
                </fieldset>
            </form>
        );
    }
}

export default AccessibleGlobalSearch;


