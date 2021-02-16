import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = (props) => {

    return (
        <View style={styles.ir} >
            <TextInput {...props} style={{ ...styles.input, ...props.style }} />
        </View>
    )
}

const styles = StyleSheet.create({
    ir: {
        padding: 2,
        marginVertical: 5,
        borderRadius: 5,
        borderWidth: 1,
    },
    input: {
        width: '100%',
        height: 35,
        backgroundColor: 'ghostwhite',
    }
})

export default Input