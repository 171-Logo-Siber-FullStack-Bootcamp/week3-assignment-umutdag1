import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.mainText}>MENÜ</Text>
                <TouchableOpacity style={[styles.button]} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>KAYIT OL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>KAYIT OL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button]} activeOpacity={0.7}>
                    <Text style={styles.buttonText}>KAYIT OL</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

/*********************************************/
// util'se yazılacak
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;
/*********************************************/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#344955"
    },
    subContainer: {
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: width > height ? height - (height / 5) : height - (height / 10),
        width: width > height ? width - (width / 10) : width - (width / 5),
        borderRadius: 10,
        backgroundColor: "#4A6572",
    },
    mainText: {
        color: "#eeeeee",
        fontSize: width > height ? moderateScale(25) : moderateScale(50),
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#eeeeee",
        textAlign: "center",
        width: "50%",
        padding: width > height ? moderateScale(10) : moderateScale(20),
        borderRadius: 10
    },
    buttonText: {
        fontSize: width > height ? moderateScale(15) : moderateScale(20),
        color: "#999999",
        fontWeight: "bold",
    }
})