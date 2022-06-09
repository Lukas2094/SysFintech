import React ,{ useState } from 'react';
import { Container , Textos ,Content , Label , Value , Expenses , Skeleton} from './styles';
import { MotiView , AnimatePresence , MotiText } from 'moti';
import { StyleSheet } from 'react-native';

export default function Movements({ data }) {

    const [showValue , setshowValue] = useState(false);

    return(
        <Container onPress={ () => setshowValue(!showValue)}>
            <Textos>{data.date}</Textos>
            <Content>
               <Label>{data.label}</Label>
                { showValue ? (
                    <AnimatePresence exitBeforeEnter>
                        {data.type === 1 ? <MotiText style={styles.text}>
                            R$ {data.value}</MotiText> : <MotiText style={styles.red}>R$ -{data.value}</MotiText>}
                    </AnimatePresence>
                ) : (

                    <AnimatePresence exitBeforeEnter>
                        <Skeleton>
                        </Skeleton>
                    </AnimatePresence>
                )}

                  
            </Content>
        </Container>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },

    red: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold',
    }
})