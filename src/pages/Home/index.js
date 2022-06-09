
import { Text, View , StyleSheet , FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '02/09/2022',
    type: 0 // despesas
  },

  {
    id: 2,
    label: 'Pix Cliente',
    value: '2.500,00',
    date: '17/09/2022',
    type: 1 // receita / entradas
  },

  {
    id: 3,
    label: 'Salário',
    value: '7.300,00',
    date: '20/09/2022',
    type: 1 // receita / entradas
  },
  
]

export default function Home() {
  return (
    <View style={styles.container}>
       <Header name={'Lucas Silva'}/> 
       <Balance saldo={'9.250,00'} gastos={'-527,00'}/>
       <Actions/>
       
       <Text style={styles.title}>Últimas movimentações</Text>

       <FlatList style={styles.list} 
       data={list} 
       keyExtractor={ (item) => String(item.id)}
       showsVerticalScrollIndicator={false}
       renderItem={ ({ item }) => <Movements  data={item}/> }
       />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14, 
  }
})
