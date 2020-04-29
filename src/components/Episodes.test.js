import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

test("renders Episodes", () => {
    render(<Episodes episodes={[]} />);
});

test("Episodes renders episodes", () => {
    const mockData=[{name:"Chapter One"}];
    const {queryAllByText, rerender} = render(<Episodes episodes={[]} />);

    let allEpisodes = queryAllByText(/chapter/i);
    expect(allEpisodes).toHaveLength(0);
    expect(allEpisodes).toStrictEqual([]);

    rerender(<Episodes episodes={mockData} />);
    allEpisodes= queryAllByText(/chapter/i);
    expect(allEpisodes).toHaveLength(1);
});

