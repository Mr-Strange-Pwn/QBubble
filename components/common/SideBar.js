import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native'

const SideBar = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <ImageBackground style={styles.headerBackground} source={{ uri: "https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png" }} >
                    <Image
                        style={styles.headerLogo}
                        source={{ uri: "https://cdn.pixabay.com/photo/2017/02/20/13/33/alphabet-2082507__340.png" }}

                    />
                </ImageBackground>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label="About" onPress={() => alert('In Development')} />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Text style={styles.footerText}>QBubble</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: { flex: 1 },
    header: {
        width: "100%",
        height: '30%'
    },
    headerBackground: {
        width: "100%",
        height: "100%",
        alignSelf: "stretch",
        justifyContent: "center",
        alignItems: "center"
    },
    headerLogo: {
        height: 80,
        width: 70,
        borderColor: 'black'
    },

    footer: { width: "100%", height: '10%', backgroundColor: 'brown', alignItems: 'center' },
    footerText: { fontSize: 25, color: 'white' }
})

export default SideBar