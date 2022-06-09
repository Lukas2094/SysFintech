import styled from 'styled-components/native';
import React from 'react';

export const Container = styled.View`
    background-color: #8000ff;
    padding-top: 22px;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 44px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const Text = styled.Text`
    font-size: 18;
    color: #FFF;
    font-weight: bold;
`;

export const Touch = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: rgba(255 , 255, 255 , 0.5);
    align-items: center;
    justify-content: center;
    border-radius: 44px;
`;