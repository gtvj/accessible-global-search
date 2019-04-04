import React, {Component} from 'react';
import '../search_option/SearchOption';
import './AccessibleGlobalSearch.css';
import SearchOption from "../search_option/SearchOption";

class AccessibleGlobalSearch extends Component {

    constructor(props) {
        super(props);
        this.handle_search_selection = this.handle_search_selection.bind(this);
        this.state = {

            active_search: {}, // This is assigned to the first option below

            search_selector: {
                label: 'Show search options',
                id: 'show_options',
            },

            search_selector_visible: false,

            component_label: 'Search our website or catalogue',
            search_query_legend: 'Enter search term',
            search_options: {
                group_name: 'search_type',
                select_type: 'Select a search type',
                options: [
                    {
                        label: 'Search the website',
                        id: 'website_search',
                        url: 'http://www.nationalarchives.gov.uk/search/results'
                    },
                    {
                        label: 'Search Discovery, our catalogue',
                        id: 'discovery_search',
                        url: 'http://discovery.nationalarchives.gov.uk/results/r'
                    }
                ]
            }
        };

        this.state.active_search = this.state.search_options.options[0];
    }

    handle_search_selection(e) {

        if ((e.target.type) === 'checkbox') {
            this.setState({search_selector_visible: e.target.checked})
        }

        if (e.target.type === 'radio') {
            let selection = this.state.search_options.options.find((i) => {
                return (e.target.id === i.id);
            });
            this.setState({active_search: selection});
        }
    }

    render() {
        return (
            <form aria-labelledby="global_search_label" role="search" className="global-search-js"
                  action={this.state.active_search.url}
                  onChange={this.handle_search_selection}>
                <fieldset id="show-search-options">
                    <legend>{this.state.search_selector.label}</legend>
                    <label htmlFor={this.state.search_selector.id}>{this.state.search_selector.label}</label>
                    <input type="checkbox" id={this.state.search_selector.id}
                           aria-label={this.state.search_selector.label}/>
                </fieldset>
                <span id="global_search_label">{this.state.component_label}</span>
                <fieldset id="select-search-type" aria-hidden={!this.state.search_selector_visible}>
                    <legend>{this.state.search_options.select_type}</legend>
                    <SearchOption group_name={this.state.search_options.group_name}
                                  options={this.state.search_options.options}/>
                </fieldset>
                <fieldset id="search-query">
                    <legend>{this.state.search_query_legend}</legend>
                    <input type="search" autoComplete="off" role="search" name="_q" aria-label={this.state.active_search.label}/>
                    <input type="submit"/>
                </fieldset>
            </form>
        );
    }
}

export default AccessibleGlobalSearch;


