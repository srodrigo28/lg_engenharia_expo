import React from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Veiculo(){

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.TopoView}>
                <Text style={styles.TituloPage}>Cadastrar Veiculo</Text>
            </View>

            <TextInput
                placeholder="Proprietário"
                style={styles.inputFormColumn}
                autoCorrect={false}
                onChangeText={ () => {} }
            />
            <View style={styles.viewRow}>
                <TextInput
                    placeholder="Fabricante"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
                <TextInput
                    placeholder="Modelo"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
            </View>
            <View style={styles.viewRow}>
                <TextInput
                    placeholder="Placa"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
                <TextInput
                    placeholder="Ano"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
            </View>
            <View style={styles.viewRow}>
                <TextInput
                    placeholder="Média Álcool"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
                <TextInput
                    placeholder="Média Gasolina"
                    style={styles.inputFormRow}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
            </View>
            <TextInput
                    placeholder="Média na Gasolina"
                    style={styles.inputFormColumn}
                    autoCorrect={false}
                    onChangeText={ () => {} }
                />
                <TouchableOpacity style={styles.btnSubmitForm}>
                    <Text 
                        style={styles.txtSubmitForm}
                        // onPress={() => {navigation.navigate('Menu')}}
                    >
                    4 Fotos do Carro
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
    },
    TopoView:{
        width: "100%",
        marginTop: -10,
        backgroundColor: "red",
        flex: 3,
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
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
    viewRow:{
        height: 70,
        flexDirection: "row",
        alignContent: "flex-start"
    },
    inputFormRow:{
        backgroundColor: "#f7f8fc",
        width: "42%", height: 50,
        marginLeft: 10,
        marginRight: 15,
        borderRadius: 6,
        color:'#BD3804',
        fontSize: 18,
        padding: 10,
    },
    viewColumn:{
        flex: 2,
        flexDirection: "column",
        alignContent: "center"
    },
    inputFormColumn:{
        backgroundColor: "#f7f8fc",
        width: "90%", height: 50,
        marginBottom: 15,
        borderRadius: 6,
        color:'#BD3804',
        fontSize: 18,
        padding: 10,
    },
    btnSubmitForm:{
        backgroundColor: '#BD3804',
        width: 350,
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