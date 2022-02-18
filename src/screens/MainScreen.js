/* Fundamentals */
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function MainScreen(props) {

    const params = props?.route?.params;
    const navigation = props?.navigation;

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column"
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
            fontSize: width > height ? scale(height / width * 30) : verticalScale(width / height * 60),
            fontWeight: "bold"
        },
        innerText: {
            textAlignVertical: "center",
            fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Times New Roman',
        },
        button: {
            backgroundColor: "#eeeeee",
            width: "50%",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            borderRadius: 10
        },
        buttonText: {
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            color: "#999999",
            fontWeight: "bold",
            textAlign: "center",
        }
    });

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
                    <TouchableOpacity
                        style={[styles.button, { opacity: 0.5 }]}
                        activeOpacity={0.7}
                        disabled={true}
                    >
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}