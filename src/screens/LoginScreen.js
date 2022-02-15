import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.textContainer}>
                <Text style={styles.baseText}>
                    <Text style={styles.innerParanthesesText}>{'{'}</Text>
                    <Text style={[styles.innerText, styles.textColor]}>{' JSON '}</Text>
                    <Text style={styles.innerParanthesesText}>{'}'}</Text>
                </Text>
                <Text style={styles.baseText}>
                    <Text style={[styles.innerText, styles.textColor]}>{'PLACEHOLDER'}</Text>
                </Text>
            </View> */}

            <View style={styles.buttonContainer}>
                <Text style={styles.baseText}>
                    <Text style={styles.innerParanthesesText}>{'['}</Text>
                    <Text style={[styles.innerText, styles.buttonColor]}>{' \'KAYIT\' '}</Text>
                    <Text style={styles.innerParanthesesText}>{']'}</Text>
                </Text>
                <Text style={styles.baseText}>
                    <Text style={styles.innerParanthesesText}>{'['}</Text>
                    <Text style={[styles.innerText, styles.buttonColor]}>{' \'GİRİŞ\' '}</Text>
                    <Text style={styles.innerParanthesesText}>{']'}</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        //alignItems: "center"
    },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    baseText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
        fontWeight: "bold",
    },
    innerParanthesesText: {
        color: "#ff8040",
    },
    innerText: {
        textAlignVertical : "center",
        fontFamily: "Times New Roman",
    },
    textColor : {
        color: "#3f48cc",
    },
    buttonColor : {
        color : "#99d8ea",
    }
})