import React from 'react';
import ReactDOM from 'react-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import AccessibleGlobalSearch from './AccessibleGlobalSearch';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccessibleGlobalSearch/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders a form with the correct props.className', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AccessibleGlobalSearch/>);
    const result = renderer.getRenderOutput();
    
    expect(result.type).toBe('form');
    expect(result.props.className).toBe('global-search-js');

});




