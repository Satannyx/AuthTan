import { StyleSheet } from 'react-native';

const WelcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#889D9D',
    },
    welcomeText: {
        fontSize: 46,
        marginBottom: 50,
    },
    logo: {
        width: 100,
        height: 180,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        margin: 12,
        borderRadius: 20,
        width: 300,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default WelcomeStyles;