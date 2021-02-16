import React, { useState } from 'react'
import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native'

import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const LogIn = (props) => {
    const [userCred, setUserCred] = useState({
        email: '',
        password: '',
    })

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Card>
                    <Text>Login </Text>
                    <Input placeholder="email" value={userCred.email} onChangeText={val => setUserCred({ ...userCred, email: val })} />
                    <Input placeholder="password" secureTextEntry value={userCred.password} onChangeText={val => setUserCred({ ...userCred, password: val })} />
                    <Button style={styles.button} >Log-IN</Button>
                    <Button style={styles.button} onPress={() => props.navigation.navigate('Sign-Up')} >Dont have a Account ?</Button>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        marginVertical: 5,
    }
})

export default LogIn
