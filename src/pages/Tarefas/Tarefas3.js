import React, { useState } from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export default function Tarefas3() {
    const [tarefa, setTarefa] = useState('');
    const [listaTarefa, setListatTarefas] = useState([]);

    function AdicionarTarefa(){
        setListatTarefas(addTarefa => [...addTarefa, tarefa]);
    }
    
  return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Tarefa v-3
            </Text>

            <TextInput
                style={styles.textoInput}
                placeholder="Nova Tarefa"
                placeholderTextColor="#555"
                onChangeText={setTarefa}
            />

            <TouchableOpacity
                style={styles.botao}
                activeOpacity={0.7}
                onPress={AdicionarTarefa}
            >
                <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>

            <Text style={ [styles.titulo, { marginVertical: 50} ] }>
                Todas Tarefas
            </Text>
            <ScrollView>
            {
                listaTarefa.map(item => (
                    <TouchableOpacity key={item} style={ styles.botaoTarefa}>
                        <Text style={ styles.listaTarefa }>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  titulo: { 
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
  },
  textoInput:{
      backgroundColor: '#1f1e25',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
      //   padding: Platform.OS === 'ios' ? 15: 10,
      padding: 10,
      borderRadius: 5,
  },
  botao: {
      marginTop: 20,
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center'
  },
  botaoTexto: { 
      color: '#fff',
      fontWeight:'bold',
      fontSize: 17,
 },
 botaoTarefa:{
    padding: 15,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: 'center',
    backgroundColor: '#1f1e25',
 },
 listaTarefa:{
     color: '#fff',
     fontSize: 22,
     fontWeight: 'bold',
 }

});
