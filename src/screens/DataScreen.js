/* Fundamentals */
import { Platform, Dimensions, StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
/* Externals */
import Jhr from '../libs/Jhr';

export default function DataScreen(props) {

    const params = props?.route?.params;

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

    const request = {
        name: params?.request?.name,
        method: params?.request?.method
    };

    const [data, setData] = useState(null);

    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/" + request.name;
        const myJhr = new Jhr(url, request.method ? request.method : 'undefined');

        const data = async () => await myJhr.fetchResponse()

        if (request.method === 'GET') {
            data()
                .then(result => setData(result.data))
                .catch(err => setData([]));
        }
    }, [request.name]);

    console.log("Test");

    const isDataEmpty = data && data.length > 0;

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
            justifyContent: isDataEmpty ? "space-evenly" : "center",
            alignItems: isDataEmpty ? "stretch" : "center",
            backgroundColor: "#4A6572",
        },
        dataContainer: {
            width: "70%",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            backgroundColor: "#eeeeee",
            borderRadius: 10,
            marginVertical: 8
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
        keyText: {
            color: "#666666",
            marginLeft: "3%",
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            fontWeight: "bold",
        },
        dataText: {
            color: "#aaaaaa",
            marginLeft: "3%",
            fontSize: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            fontWeight: "bold",
        }
    });

    const DataItem = ({ data }) => (
        <View style={styles.dataContainer}>
            {
                Object.keys(data).map((key, index) => {
                    return (
                        <View style={{ flexDirection: "row", flexWrap: "wrap" }} key={index}>
                            <Text style={styles.keyText}>{key}</Text>
                            <Text style={styles.keyText}>:</Text>
                            <Text style={styles.dataText}>
                                {
                                    typeof data[key] === 'object' ?
                                        data[key].toString() :
                                        data[key]
                                }
                            </Text>
                        </View>
                    )
                })
            }
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>{request.name ? request.name.toUpperCase() : "UNDEFINED"}</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                {
                    request.name ?
                        (isDataEmpty ?
                            (
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => <DataItem data={item}></DataItem>}
                                    numColumns={data.length}
                                    key={data.length}
                                    columnWrapperStyle={{
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                />
                            ) :
                            (
                                <View style={styles.dataContainer}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={styles.keyText}>error</Text>
                                        <Text style={styles.keyText}>:</Text>
                                        <Text style={styles.dataText}>No Data</Text>
                                    </View>
                                </View>
                            )
                        ) :
                        (
                            <View style={styles.dataContainer}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.keyText}>error</Text>
                                    <Text style={styles.keyText}>:</Text>
                                    <Text style={styles.dataText}>Undefined</Text>
                                </View>
                            </View>
                        )
                }
            </View>
        </View>
    );
}

