import React from 'react';
import { shallow } from 'enzyme';
import Game from './game';

describe('<Game />', () => {
    it('should render without crashing', () => {
        shallow(<Game />);
    });

    it('can restart a new game', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [11, 22, 33],
            feedback: 'You is awesome',
            correctAnswer: -20
        });
        wrapper.instance().restartGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
        expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
    });

    it('can make guesses', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            correctAnswer: 100
        });

        wrapper.instance().makeGuess(25);
        expect(wrapper.state('guesses')).toEqual([25]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().makeGuess(100);
        expect(wrapper.state('guesses')).toEqual([25, 100]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});
