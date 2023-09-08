import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomMenu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('Clientes')}
            >
                <Text>Clientes</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('Orcamento')}
        >
            <Text>Orçamentos</Text>
        </TouchableOpacity>
            {/* Adicione mais itens de menu conforme necessário */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CustomMenu;
