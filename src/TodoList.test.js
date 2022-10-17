import React from 'react';
import {render, fireEvent, getByText} from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
    const sampleTodos =[
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'rreact-testing-library',
            done: true,
        }
    ];
    it('has two todos', () => {
        const {getByText} = render(<TodoList todos={sampleTodos} />);
        getByText(sampleTodos[0].text);
        getByText(sampleTodos[1].text);
    });
});