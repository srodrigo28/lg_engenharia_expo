import React from 'react';
import { 
    StyleSheet,
    Text,
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function Tarefas2() {
    
  return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Tarefa v-2
            </Text>

            <TextInput
                style={styles.textoInput}
                placeholder="Nova Tarefa"
                placeholderTextColor="#555"
            />

            <TouchableOpacity
                style={styles.botao}
                activeOpacity={0.7}
            >
                <Text style={styles.botaoTexto}>Adicionar</Text>
            </TouchableOpacity>

            <Text style={ [styles.titulo, { marginVertical: 50} ] }>
                Todas Tarefas
            </Text>
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
