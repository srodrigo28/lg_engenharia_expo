import React, {useState} from "react";
import { Button, Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import {useNavigation} from '@react-navigation/native';
export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginSubmite = () => {
        if(email === "admin" && password === "2828"){
            
        }else{
            return alert("Sem permissão de acesso!");
        }
    }

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.imgLogo}
                    source={require('../../../assets/login.png')} 
                />
            </View>

            <TextInput
                style={styles.inputForm}
                placeholder="Usuário"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={ text => setEmail(text) }
            />
            <TextInput
                style={styles.inputForm}
                placeholder="Senha"
                autoCorrect={false}
                keyboardType="numeric"
                secureTextEntry={true}
                value={password}
                onChangeText={ text => setPassword(text) }
            />

            <TouchableOpacity 
                style={styles.btnSubmitForm}
                onPress={loginSubmite}
                >
                <Text 
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Menu')}}
                >
                    Acessar
                </Text>
            </TouchableOpacity>
            <Text 
                style={styles.linkNewUser}
                onPress={ () => {navigation.navigate('RecoverPassword')} }>
                Esqueceu sua senha?</Text>
            <Text
                style={styles.linkNewUser}
                onPress={ () => {navigation.navigate('NewUser')} }>
                Cadastrar
            </Text>
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
