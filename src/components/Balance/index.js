import React from 'react';
import { View , StyleSheet  } from 'react-native';
import { Container , Item , ItemTitle , Views , TextSymbol , Balances, Gastos} from './styles';
import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }) {
    return (
        <MotiView style={styles.container}
          from={{
              rotateX: '-100deg',
              opacity: 0,
          }}

          animate={{
              rotateX: '0deg',
              opacity: 1,
          }}

          transition={{
              type: 'timing',
              delay: 300,
              duration: 900,
          }}
        >
            <Item>
                <ItemTitle>Saldo</ItemTitle>
              
              <Views>
                  <TextSymbol>R$</TextSymbol>
                  <Balances>{saldo}</Balances>
              </Views>

            </Item>

            <Item>
                <ItemTitle>Gastos</ItemTitle>
              
              <Views>
                  <TextSymbol>R$</TextSymbol>
                  <Gastos>{gastos}</Gastos>
              </Views>

            </Item>
        </MotiView>
    )
};

const styles = StyleSheet.create({
    container: {
        background: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: -24,
        marginLeft:  14,
        marginRight: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    }
})