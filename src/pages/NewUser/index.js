import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function NewUser(){

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.TituloPage}>Cadastrar Usuário</Text>

            <TextInput
                placeholder="Nome"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="CPF"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Endereço"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Telefone"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Contato Recado"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Contato Tefone"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />

            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text 
                    style={styles.txtSubmitForm}
                    // onPress={() => {navigation.navigate('Menu')}}
                >
                Foto
                </Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text 
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Menu')}
                }>
                Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        backgroundColor: '#fff'
    },
    TituloPage: {
        fontSize: 30,
        color: "#f7f8fc",
        marginBottom: 20,
    },
    imgLogo: { 
        width: 200,
        height: 200,
        marginBottom: 70
    },
    inputForm:{
        backgroundColor: "#f7f8fc",
        width: "90%",
        marginBottom: 15,
        height: 50,
        borderRadius: 6,
        color:'#BD3804',
        fontSize: 18,
        padding: 10,
    },
    btnSubmitForm:{
        backgroundColor: '#BD3804',
        width: '90%',
        marginBottom: 10,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSubmitForm:{
        color: '#fff',
        fontSize: 22
    },
    linkNewUser:{
        marginTop: 25,
        fontSize: 18,
        color: '#BD3804',
    }
})