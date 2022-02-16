import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={[styles.topContainer]}>
                <View style={[styles.topWindow]}>
                    <Text style={styles.mainText}>
                        <Text>{"{ "}</Text>
                        <Text style={styles.innerText}>JSON</Text>
                        <Text>{" }"}</Text>
                    </Text>
                    <Text style={styles.subText}>
                        <Text style={styles.innerText}>PlaceHolder</Text>
                    </Text>
                    <Text style={styles.subText}>
                        <Text style={styles.innerText}>Mobile</Text>
                    </Text>
                </View>
            </View>

            <View style={[styles.bottomContainer]}>
                <View style={[styles.bottomWindow]}>
                    <TouchableOpacity style={[styles.button, {opacity : 0.5}]} activeOpacity={0.7} disabled={true}>
                        <Text style={styles.buttonText}>KAYIT OL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>GİRİŞ YAP</Text>
                    </TouchableOpacity>
                </View>
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
        flexDirection : "column"
    },
    topContainer: {
        flex: 6,
        width: "100%",
        backgroundColor: "#4A6572",
    },
    bottomContainer: {
        flex: 4,
        width: "100%",
        backgroundColor: "#344955",
    },
    topWindow: {
        flex: 1,
        width: "100%",
        backgroundColor: "#344955",
        borderBottomStartRadius: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    bottomWindow: {
        flex: 1,
        width: "100%",
        backgroundColor: "#4A6572",
        borderTopEndRadius: 100,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    mainText: {
        color: "#eeeeee",
        fontSize: width > height ? scale(height / width * 60) : verticalScale(width / height * 120),
        fontWeight: "bold",
    },
    subText: {
        color: "#eeeeee",
        fontSize:  width > height ? scale(height / width * 30) : verticalScale(width / height * 60),
        fontWeight: "bold"
    },
    innerText: {
        textAlignVertical: "center",
        fontFamily: "Times New Roman",
    },
    button: {
        backgroundColor: "#eeeeee",
        textAlign: "center",
        width: "50%",
        padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
        borderRadius: 10
    },
    buttonText: {
        fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
        color: "#999999",
        fontWeight: "bold",       
    }
})