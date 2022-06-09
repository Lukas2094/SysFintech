import styled from 'styled-components/native';
import React from 'react';

export const Container = styled.View`
    background: #FFF;
    flex-direction: row;
    justify-content: space-between;
    padding-Left: 18;
    padding-right: 18;
    margin-top: -24;
    margin-left:  14px;
    margin-right: 14px;
    border-radius: 4px;
    padding-top: 22px;
    padding-bottom: 22px;
    z-index: 99;
`;

export const Item = styled.View`
      
`;

export const ItemTitle = styled.Text`
    font-size: 20;
    color: #dadada;
`;

export const Views = styled.View`
    flex-direction: row;
    align-items: center;

`;


export const TextSymbol = styled.Text`
    color: #dadada;
    margin-right: 6px;
`;

export const Balances = styled.Text`
    font-size: 22px;
    color: #2ecc71;
`;

export const Gastos = styled.Text`
    font-size: 22px;
    color: #e74c3c;
`;