import React from 'react';
import { Container , Txt , Touch , ButtonLabel} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFolderPlus , faTags, faCreditCard ,faBarcode ,faGear } from '@fortawesome/free-solid-svg-icons';

export default function Actions() {
    return(
       <Container horizontal={true} showsHorizontalScrollIndicator={false}>
           <Touch>
               <Txt>
                  <FontAwesomeIcon icon={faFolderPlus} size={26} color="#000"/>
               </Txt>

               <ButtonLabel>Entradas</ButtonLabel>
           </Touch>

           <Touch>
               <Txt>
                  <FontAwesomeIcon icon={faTags} size={26} color="#000"/>
               </Txt>

               <ButtonLabel>Compras</ButtonLabel>
           </Touch>

           <Touch>
               <Txt>
                  <FontAwesomeIcon icon={faCreditCard} size={26} color="#000"/>
               </Txt>

               <ButtonLabel>Crédito</ButtonLabel>
           </Touch>

           <Touch>
               <Txt>
                  <FontAwesomeIcon icon={faBarcode} size={26} color="#000"/>
               </Txt>

               <ButtonLabel>Boletos</ButtonLabel>
           </Touch>

           <Touch>
               <Txt>
                  <FontAwesomeIcon icon={faGear} size={26} color="#000"/>
               </Txt>

               <ButtonLabel>Conta</ButtonLabel>
           </Touch>
       </Container>
    )
}