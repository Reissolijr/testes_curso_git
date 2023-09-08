import React from 'react';
import { View, Text } from 'react-native';
import CustomMenu from '../components/CustomMenu';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <CustomMenu navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen Content</Text>
            </View>
        </View>
    );
};

export default HomeScreen;
