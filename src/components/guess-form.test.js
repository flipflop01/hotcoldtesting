import React from 'react';
import { shallow, mount } from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Renders wihout crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onMakeGuess callback when form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 15;

        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
});
