import { useCallback, React } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// STYLE/COMPO
import welcomeStyles from '../styles/WelcomeStyles';
import { useFonts, Poppins_400Regular, Poppins_900Black, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import CustomButton from '../components/CustomButton';
import * as SplashScreen from 'expo-splash-screen';


const WelcomeScreen = () => {
    const navigation = useNavigation();
    SplashScreen.preventAutoHideAsync();


    let [fontsLoaded, fontError] = useFonts({
        Poppins_900Black, Poppins_400Regular, Poppins_600SemiBold,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
     

            <View style={welcomeStyles.container} onLayout={onLayoutRootView}>
                <Image source={require('../img/Logo/horde.png')} style={welcomeStyles.logo} />
                <Text style={welcomeStyles.welcomeText}>
                    <Text style={[{ fontFamily: 'Poppins_900Black' }]}>HORDE</Text>
                </Text>
                <CustomButton
                    title="Login"
                    onPress={() => { navigation.navigate('Login') }}
                    style={{ backgroundColor: '#C41F3B', width: 300 }}
                    textStyle={{ color: 'black', fontFamily: 'Poppins_600SemiBold' }}
                />

                <CustomButton
                    title="Sign Up"
                    onPress={() => { navigation.navigate('Register') }}
                    style={{ backgroundColor: '#C41F3B', width: 300 }}
                    textStyle={{ color: 'black', fontFamily: 'Poppins_600SemiBold' }}
                />
            </View>
    );
};

export default WelcomeScreen;