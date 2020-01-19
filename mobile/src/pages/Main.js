import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from "@expo/vector-icons";


export default function Main(props) {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
                setCurrentRegion({
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }
        loadInitialPosition();
    }, []);

    if (currentRegion === null) {
        return null;
    }

    return (
        <>
            <MapView initialRegion={ currentRegion } style={ style.map }>
                <Marker coordinate={ {latitude: -21.2122774, longitude: -47.7779956} }>
                    <Image style={ style.avatar } source={ {uri: 'https://avatars3.githubusercontent.com/u/6883793?s=460&v=4'} } />
                    <Callout onPress={ () => { props.navigation.navigate('Profile', {github_username: 'NetoBraghetto'}) } }>
                        <View style={ style.callout }>
                            <Text style={ style.calloutName }>Neto Braghetto</Text>
                            <Text style={ style.calloutBio }>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                            <Text style={ style.calloutSkills }>Nodejs, React, PHP</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
            <View style={ style.searchForm }>
                <TextInput
                    style={ style.searchInput }
                    placeholder="Buscar devs por tecnologia"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={ false }
                />
                <TouchableOpacity style={ style.loadButton }>
                    <MaterialIcons name="my-location" size={ 20 } color="white" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const style = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white'
    },
    callout: {
        width: 250,
        borderRadius: 5
    },
    calloutName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    calloutBio: {
        color: '#666',
    },
    calloutSkills: {
        marginTop: 5
    },
    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row'
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: 'white',
        color: '#000',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8e4dff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: 10
    },
});
