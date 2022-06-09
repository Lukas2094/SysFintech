import styled from 'styled-components/native';
import React from 'react';


export const Container = styled.ScrollView`
       max-height: 84px;
       margin-bottom: 14;
       margin-top: 18;
       padding-left: 14;
       padding-right: 14px;
`;
export const Touch = styled.TouchableOpacity`
       align-items: center;
       margin-right: 32px;
`;
export const Txt = styled.View`
       background-color: #ecf0f1;
       width: 60px;
       height: 60px;
       border-radius: 30px;
       justify-content: center;
       align-items:center ;
`;
export const ButtonLabel = styled.Text`
       margin-top: 4px;
       text-align: center;
       font-weight: bold;
`;