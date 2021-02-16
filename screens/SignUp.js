import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'

import Card from '../components/common/Card'
import Input from '../components/common/Input'
import Button from '../components/common/Button'

const SignUp = () => {
    const [userData, setUserData] = useState({
        userName: '',
        contactNO: '',
        email: '',
        password: '',
    })

    const checkConformPassword = () => {
        return;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Card>
                    <Text>Register your self 🙂 </Text>
                    <Input placeholder="User Name" value={userData.userName} onChangeText={val => setUserData({ ...userData, userName: val })} />
                    <Input placeholder="Contect No " keyboardType='number-pad' value={userData.contactNO} onChangeText={val => setUserData({ ...userData, contactNO: val })} />
                    <Input placeholder="email id" keyboardType='email-address' value={userData.email} onChangeText={val => setUserData({ ...userData, email: val })} />
                    <Input placeholder="password" secureTextEntry value={userData.password} onChangeText={val => setUserData({ ...userData, password: val })} />
                    <Input placeholder="Conform password" secureTextEntry value={userData.password} onChangeText={val => checkConformPassword(val)} />
                    <Button >Register</Button>
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
})

export default SignUp