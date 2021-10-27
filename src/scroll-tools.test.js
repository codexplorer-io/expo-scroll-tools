import React from 'react';
import { injectable } from 'react-magnetic-di';
import {
    mountWithDi,
    createMockComponent
} from '@codexporer.io/react-test-utils';
import {
    ScrollTools,
    HorizontalScroll,
    HorizontalSpacer,
    Label,
    Root,
    Touchable
} from './scroll-tools';

describe('ScrollTools', () => {
    const FirstDummyIcon = createMockComponent('FirstDummyIcon');
    const SecondDummyIcon = createMockComponent('SecondDummyIcon');
    const deps = [
        injectable(HorizontalScroll, createMockComponent('HorizontalScroll')),
        injectable(HorizontalSpacer, createMockComponent('HorizontalSpacer')),
        injectable(Label, createMockComponent('Label')),
        injectable(Root, createMockComponent('Root')),
        injectable(Touchable, createMockComponent('Touchable'))
    ];
    const defaultProps = {
        actions: [
            {
                title: 'First Action',
                icon: <FirstDummyIcon />,
                handler: jest.fn()
            },
            {
                title: 'Second Action',
                icon: <SecondDummyIcon />,
                handler: jest.fn(),
                disabled: true
            }
        ]
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render tools', () => {
        const wrapper = mountWithDi(
            <ScrollTools {...defaultProps} />,
            { deps }
        );

        /* eslint-disable lodash/prefer-lodash-method */
        expect(wrapper.find('HorizontalScroll')).toHaveLength(1);
        expect(wrapper.find('HorizontalScroll').prop('horizontal')).toBe(true);
        expect(wrapper.find('HorizontalSpacer')).toHaveLength(3);
        expect(wrapper.find('Touchable')).toHaveLength(2);
        expect(wrapper.find('Touchable').find('Label')).toHaveLength(2);
        /* eslint-enable lodash/prefer-lodash-method */
    });

    it('should render first action', () => {
        const wrapper = mountWithDi(
            <ScrollTools {...defaultProps} />,
            { deps }
        );

        /* eslint-disable lodash/prefer-lodash-method */
        const touchable = wrapper.find('Touchable');
        expect(touchable.find('FirstDummyIcon')).toHaveLength(1);
        expect(touchable.at(0).prop('onPress')).toBe(defaultProps.actions[0].handler);
        expect(touchable.at(0).prop('disabled')).toBeUndefined();
        expect(touchable.find('Label').at(0).props()).toEqual({ children: 'First Action' });
        /* eslint-enable lodash/prefer-lodash-method */
    });

    it('should render second action', () => {
        const wrapper = mountWithDi(
            <ScrollTools {...defaultProps} />,
            { deps }
        );

        /* eslint-disable lodash/prefer-lodash-method */
        const touchable = wrapper.find('Touchable');
        expect(touchable.find('SecondDummyIcon')).toHaveLength(1);
        expect(touchable.at(1).prop('onPress')).toBe(defaultProps.actions[1].handler);
        expect(touchable.at(1).prop('disabled')).toBe(true);
        expect(touchable.find('Label').at(1).props()).toEqual({ children: 'Second Action' });
        /* eslint-enable lodash/prefer-lodash-method */
    });
});
