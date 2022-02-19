/* Fundamentals */
import { Platform, Dimensions, StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, { useState, useEffect } from 'react';
/* Externals */
import FirebaseConn from '../../firebase';

export default function LoginScreen(props) {

    const params = props?.route?.params;
    const navigation = props?.navigation;

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

    const [user, setUser] = useState({
        email: 'test@gmail.com',
        password: ''
    });

    console.log(user);

    const loginAuth = async () => {
        console.log(user);
        const usersSnapShot = await FirebaseConn.getDocs(
            FirebaseConn.collection(FirebaseConn.db, "users")
        );
        const resultDoc = usersSnapShot.docs.find(doc => {
            const docData = doc.data();
            return docData.email === user.email &&
                docData.password === user.password
        });
        const result = resultDoc?.data();
        if (result) {
            console.log(result);
            navigation.navigate({
                name: 'Layout',
                params: { 
                    fullName: `${result.name} ${result.surname}`
                 },
                merge: true,
            });
        } else {
            setUser({
                email: '',
                password: ''
            });
        }
    }
    console.log("dsadasd");

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#344955"
        },
        topContainer: {
            flex: 2,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#344955",
        },
        bottomContainer: {
            flex: 8,
            flexDirection: "column",
            justifyContent: "center",
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
        inputContainer: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            backgroundColor: "#dddddd",
            textAlign: "center",
            width: "60%",
            fontSize: width > height ? scale(height / width * 12) : verticalScale(width / height * 24),
            padding: width > height ? scale(height / width * 10) : verticalScale(width / height * 20),
            marginVertical: 10
        },
        buttonContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: width > height ? scale(height / width * 30) : verticalScale(width / height * 60)
        },
        button: {
            backgroundColor: "#eeeeee",
            textAlign: "center",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            borderRadius: 10,
            fontWeight: "bold",
            width: "25%",
            marginHorizontal: 12
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
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>LOGIN</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Email"}
                        onChangeText={email => setUser(prev => ({ ...prev, email }))}
                        value={user.email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry={true}
                        onChangeText={password => setUser(prev => ({ ...prev, password }))}
                        value={user.password}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.button]}
                        activeOpacity={0.7}
                        onPress={() => loginAuth()}
                    //onPress={() => navigation.navigate('Layout')}
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button]}
                        activeOpacity={0.7}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>BACK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}