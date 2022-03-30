import React from 'react';
import {
    Text,
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function Tarefas0() {
     
  return (
        <View>
            <Text>
                Tarefa v-0
            </Text>

            <TextInput
            />

            <TouchableOpacity
            >
                <Text>Adicionar</Text>
            </TouchableOpacity>

            <Text>
                Todas Tarefas
            </Text>
        </View>
  );
}