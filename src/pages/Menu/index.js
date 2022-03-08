import React from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image, Text, View, StyleSheet } from "react-native";

export default function Menu(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.imgLogo}
                    source={require('../../../assets/login.png')} 
                />
            </View>
            <TouchableOpacity style={styles.btnSubmitForm}> 
                <Text
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Abastecer')}}
                > Abastecer </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('NewUser')}}
                > Cadastrar Usuário </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Veiculo')}}
                > Cadastro de Veiculo </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('DiarioObra')}}
                > Diário de Obra </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text
                    style={styles.txtSubmitForm}
                    onPress={() => {navigation.navigate('Ponto')}}
                > Ponto </Text>
            </TouchableOpacity>
            <Text style={styles.byDev}>App Desenvolvido por Seb Soluções </Text>
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
        marginTop: 80,
        marginBottom: 50,
        
    },
    btnSubmitForm:{
        backgroundColor: '#BD3804',
        width: '90%', height: 50,
        marginBottom: 10,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSubmitForm:{
        color: '#fff',
        fontSize: 22
    },
    byDev: {
        fontSize: 20,
        color: "#f7f8fc",
        marginTop: 120,
        color: '#BD3804',
    },
})