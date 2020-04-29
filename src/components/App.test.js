import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from '../App';


test("Select Season Button Renders Season", ()=> {
    const {getByText} = render(<Dropdown/>);

    fireEvent.click(getByText(/season/i));
});


