/* Fundamentals */
import { Dimensions, StyleSheet, View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function DataScreen(props) {

    const params = props?.route?.params;

    const { width, height } = Dimensions.get('window');
    const { scale, verticalScale, moderateScale } = props?.scales;

    console.log(params);

    const requestName = params?.request?.name ? params.request.name : 'undefined';
    const requestUrl = params?.request?.url ? params.request.url : 'undefined';
    const requestMethod = params?.request?.method ? params.request.method : 'undefined';


    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
    ];

    const flatListCondition = DATA.length > 2;

    const DataItem = ({ data }) => (
        <View style={styles.dataContainer}>
            <Text>
                <Text style={styles.keyText}>id</Text>
                <Text style={styles.keyText}>:</Text>
                <Text style={styles.dataText}>{data.id}</Text>
            </Text>
            <Text>
                <Text style={styles.keyText}>title</Text>
                <Text style={styles.keyText}>:</Text>
                <Text style={styles.dataText}>{data.title}</Text>
            </Text>
        </View>
    );

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
            justifyContent: flatListCondition ? "flex-start" : "space-evenly",
            alignItems: flatListCondition ? "stretch" : "center",
            backgroundColor: "#4A6572",
        },
        dataContainer: {
            width: "70%",
            padding: width > height ? scale(height / width * 15) : verticalScale(width / height * 30),
            backgroundColor: "#eeeeee",
            borderRadius: 10,
            marginVertical: flatListCondition ? 8 : 0
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



    return (
        <View style={styles.container}>
            <View style={[styles.topContainer, styles.shadow]}>
                <Text style={styles.mainText}>{requestName.toUpperCase()}</Text>
            </View>
            <View style={[styles.bottomContainer]}>
                {
                    flatListCondition ?
                        (
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) => <DataItem data={item}></DataItem>}
                                keyExtractor={item => item.id}
                                numColumns={DATA.length}
                                columnWrapperStyle={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            />
                        ) :
                        (
                            DATA.map((item, index) => (
                                <DataItem data={item} key={index}></DataItem>
                            ))
                        )
                }
            </View>

        </View>
    );
}

