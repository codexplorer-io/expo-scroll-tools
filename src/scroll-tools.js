import React, { Fragment } from 'react';
import { di } from 'react-magnetic-di';
import styled from 'styled-components/native';
import map from 'lodash/map';
import { Surface, Text } from 'react-native-paper';

export const Root = styled(Surface)`
    background-color: ${({ theme }) => theme.colors.background};
    elevation: 4;
`;

export const HorizontalScroll = styled.ScrollView`
    flex: 0 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const HorizontalSpacer = styled.View`
    width: 10px;
`;

export const Touchable = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    min-width: 100px;
    opacity: ${({ disabled }) => disabled ? 0.5 : 1};
`;

export const Label = styled(Text)`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    padding-top: 10px;
`;

export const ScrollTools = ({ actions }) => {
    di(HorizontalScroll, HorizontalSpacer, Label, Root, Touchable);

    return (
        <Root>
            <HorizontalScroll horizontal>
                <HorizontalSpacer />
                {map(actions, (action, actionIndex) => (
                    <Fragment key={`fragment-${actionIndex}`}>
                        {actionIndex !== 0 && (
                            <HorizontalSpacer />
                        )}
                        <Touchable
                            onPress={action.handler}
                            disabled={action.disabled}
                        >
                            {action.icon}
                            <Label>{action.title}</Label>
                        </Touchable>
                    </Fragment>
                ))}
                <HorizontalSpacer />
            </HorizontalScroll>
        </Root>
    );
};
