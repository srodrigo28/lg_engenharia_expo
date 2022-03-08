import React from "react";
import { ActionSheetIOS, Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Abastecer(){

    const navigation = useNavigation();

    const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Generate number', 'Reset'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      }
    );

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View style={styles.TopoView}>
                <Text style={styles.TituloPage}>Abastecer</Text>
            </View>

            <TextInput
                placeholder="KM Odometro"
                style={styles.inputForm}
                keyboardType="numeric"
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Tipo de Combustivel"
                style={styles.inputForm}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Valor Combustivel"
                style={styles.inputForm}
                keyboardType="numeric"
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Valor Abastecimento"
                style={styles.inputForm}
                keyboardType="numeric"
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <TextInput
                placeholder="Previsão KM para Rodar" // Valor combustivel / valor Abastecimento
                style={styles.inputForm}
                keyboardType="numeric"
                autoCorrect={false}
                onChangeText={ () => {} }
            />

            <TouchableOpacity style={styles.btnSubmitForm}>
                <Text 
                    style={styles.txtSubmitForm}
                    // onPress={() => {navigation.navigate('Menu')}}
                >
                Foto Odômetro
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
    TopoView:{
        width: "100%",
        marginTop: -10,
        backgroundColor: "red",
        flex: 1,
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",

    },
    TituloPage: {
        fontSize: 30,
        color: "white",
        marginTop: 100,
        fontWeight: "bold"
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