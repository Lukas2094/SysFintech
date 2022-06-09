import React from 'react';
import { Container , Content , Text , Touch } from './styles';
import{ View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBold, faUser } from '@fortawesome/free-solid-svg-icons'; 
import { MotiView, MotiText} from 'moti';

export default function Header({ name }) {
    return (
        <View>
            <Container>
                <MotiView style={styles.content}
                  from={{
                      translateY: -150,
                      opacity: 0,
                  }}
                  
                  animate={{
                      translateY: 0,
                      opacity: 1,
                  }}

                  transition={{
                      type: 'spring',
                      duration: 800,
                      delay: 300,
                  }}
                >
                    <MotiText style={styles.text}
                      from={{
                          translateX: -300,
                      }}

                      animate={{
                          translateX: 0,
                      }}

                      transition={{
                        type: 'timing',
                        duration: 800,
                        delay: 800,
                    }}
                    >
                        {name}</MotiText>

                    <Touch>
                        <FontAwesomeIcon icon={faUser} size={22} color="#FFF"/>
                    </Touch>
                </MotiView>
            </Container>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },

    text: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
  })
  
