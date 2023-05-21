import { Button, StyleSheet, Text, TextInput, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Login" />
                <TextInput style={styles.input} placeholder="Password" />
                <Button title="Login" color="#FF6C00" />
                <Text style={styles.text}>Don't have an account? Register</Text>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 36,
        fontFamily: 'Inter-Medium',
        marginBottom: 20,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 20,
        textAlign: 'center'

    },
    form: {
        backgroundColor: '#fff',
        height: '40%',
        width: '100%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 40,
        paddingHorizontal: 20,

    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'whitesmoke',
        marginBottom: 30,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },

});