/* Fundamentals */
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function MenuScreen(props) {

    const params = props?.route?.params;
    const navigation = props?.navigation;

    console.log(props);

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

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
    });

    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>MENU</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate({
                        name: 'Data',
                        params: {
                            request: {
                                name: "users",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>USERS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate({
                        name: 'Data',
                        params: {
                            request: {
                                name: "posts",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>POSTS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate({
                        name: 'Data',
                        params: {
                            request: {
                                name: "albums",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>ALBUMS LIST</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate({
                        name: 'Data',
                        params: {
                            request: {
                                name: "comments",
                                method: "GET"
                            }
                        },
                        merge: true
                    })}
                >
                    <Text style={styles.buttonText}>COMMENTS LIST</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}