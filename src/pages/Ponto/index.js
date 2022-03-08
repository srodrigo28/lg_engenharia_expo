import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Ponto(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.TopoView}>
                <Text style={styles.TituloPage}>Registro de Ponto</Text>
            </View>
            
                <TouchableOpacity style={styles.btnSubmitForm}>
                    <Text 
                        style={styles.txtSubmitForm}
                        onPress={() => {navigation.navigate('Menu')}
                    }>
                    Entrada
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmitForm}>
                    <Text 
                        style={styles.txtSubmitForm}
                        onPress={() => {navigation.navigate('Menu')}
                    }>
                    Intervalo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmitForm}>
                    <Text 
                        style={styles.txtSubmitForm}
                        onPress={() => {navigation.navigate('Menu')}
                    }>
                    Retorno
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmitForm}>
                    <Text 
                        style={styles.txtSubmitForm}
                        onPress={() => {navigation.navigate('Menu')}
                    }>
                    Saída
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
    TopoView:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",

        width: "100%",
        marginTop: -10,
        backgroundColor: "red",
    
    },
    TituloPage: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        marginTop: 100,
    },
    imgLogo: { 
        width: 80,
        height: 80,
    },
    btnSubmitForm:{
        backgroundColor: '#BD3804',
        width: "90%", height: 100,
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