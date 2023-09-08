import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ClientesScreen = ({ navigation }) => {
    const handleNovoCliente = () =>{
        navigation.navigate('NovoCliente')
    };
    return (
        <View style={styles.view}>
            <Text>Clientes Screen</Text>
            <Button title="Novo Cliente" onPress={handleNovoCliente} />
        </View>
    );
};
const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});
export default ClientesScreen;
