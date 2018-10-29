import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import AccessibleGlobalSearch from './AccessibleGlobalSearch';

const test_renderer = TestRenderer.create(<AccessibleGlobalSearch/>);
const test_instance = test_renderer.root;
const instance = test_renderer.getInstance();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccessibleGlobalSearch/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('has the correct props', () => {
    expect(instance.state.search_options.select_type).toBe('Select a search type');
    expect(instance.state.website_search_url).toBe('http://www.nationalarchives.gov.uk/search/results');
    expect(instance.state.discovery_search_url).toBe('http://discovery.nationalarchives.gov.uk/results/');
});

it('renders a form with the correct className and action', () => {
    const rendered_component = test_renderer.toJSON();
    expect(rendered_component.type).toBe('form');
    expect(rendered_component.props.className).toBe('global-search-js');
    expect(rendered_component.props.role).toBe('search');
    expect(rendered_component.props.action).toBe('http://www.nationalarchives.gov.uk/search/results');
});

it(`contains a 'select-search-type' fieldset and legend with the correct text`, () => {
    const fieldset = test_instance.findByProps({id: 'select-search-type'});
    expect(fieldset.type).toBe('fieldset');

    const legend = fieldset.findByType('legend');
    expect(legend.type).toBe('legend');
    expect(legend.children[0]).toBe(instance.state.search_options.select_type);
});

it('contains a radio button and label for website search', () => {
    const website_search_radio = test_instance.findByProps({id: 'website_search'});
    expect(website_search_radio.type).toBe('input');

    const website_search_label = test_instance.findByProps({htmlFor: 'website_search'});
    expect(website_search_label.type).toBe('label');
});

it('contains a radio button and label for discovery search', () => {
    const discovery_search_radio = test_instance.findByProps({id: 'discovery_search'});
    expect(discovery_search_radio.type).toBe('input');

    const discovery_search_label = test_instance.findByProps({htmlFor: 'discovery_search'});
    expect(discovery_search_label.type).toBe('label');
});

it('changes the form action to Discovery when that option is selected', () => {

    // Test that the component is updated in response to a change event
    // Have posted a question on Stack Overflow:
    // https://stackoverflow.com/questions/53026675/

});

it(`contains a 'search-query' fieldset and legend with the correct text`, () => {
    const fieldset = test_instance.findByProps({id: 'search-query'});
    expect(fieldset.type).toBe('fieldset');

    const legend = fieldset.findByType('legend');
    expect(legend.type).toBe('legend');
    expect(legend.children[0]).toBe(instance.state.search_query);
});

it(`contains a labelled search element with the correct properties`, () => {
    const fieldset = test_instance.findByProps({id: 'search-query'});
    const search_field = fieldset.findByProps({role: 'search'});
    expect(search_field.props.type).toBe('search'); // This tests the 'type' attribute
    expect(search_field.type).toBe('input');
    expect(search_field.props['aria-label']).toBe(instance.state.active_search_label);
});

