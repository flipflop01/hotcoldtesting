import React from 'react';
import { shallow } from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('should render without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('should render a list of guesses', () => {
        const values = [15, 25, 40];
        const wrapper = shallow(<GuessList guesses={values} />);
        const items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        });
    });
});

