import React from 'react';
import { Text, Image, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import homePageStyles from '../styles/HomePageStyles';

const HomePageScreen = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        Alert.alert('Logout', 'You have been logged out successfully.');
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={homePageStyles.container}>
             <Image source={require('../img/Logo/horde.png')} style={homePageStyles.logo} />

            <Text style={homePageStyles.text}>
                    <Text style={[{ fontFamily: 'Poppins_900Black' }]}>Home Page</Text>
                </Text>
            <Text>
                Mama may I have cookie
            </Text>
            <CustomButton
                title="Logout"
                onPress={handleLogout}
                style={{ backgroundColor: '#C41F3B', width: 300, marginTop: 20 }}
                textStyle={{ color: 'black', fontFamily: 'Poppins_600SemiBold' }}
            />
        </ScrollView>
    );
};

export default HomePageScreen;
