/* Fundamentals */
import { Dimensions, StyleSheet, View, Text}from 'react-native';
import React from 'react'

export default function DataScreen(props) {
    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>DATA HEADER</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                
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
        backgroundColor: "#344955"
    },
    topContainer: {
        flex: 2,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#344955",
    },
    bottomContainer: {
        flex: 8,
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#4A6572",
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    mainText: {
        color: "#eeeeee",
        marginLeft: "3%",
        fontSize: width > height ? scale(height / width * 35) : verticalScale(width / height * 70),
        fontWeight: "bold",
        //fontFamily: "Times New Roman",
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