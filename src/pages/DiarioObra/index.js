import React from "react";
import { Button, Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function DiarioObra(){

    const navigation = useNavigation();

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Cadastrar Diário de Obra</Text>

            <Button title="Salvar"   />
            {/* onPress={() => {navigation.navigate('Login')}} */}

        </View>
    )
}