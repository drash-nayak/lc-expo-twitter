import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking, FlatList} from "react-native";
import {EvilIcons} from "@expo/vector-icons";

export default function ProfileScreen() {

    const header = () => (
        <View style={styles.container}>
            <Image style={styles.backgroundImage}
                   source={{
                       uri: 'https://images.unsplash.com/photo-1615097130643-12caeab3c625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80'
                   }}>
            </Image>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar}
                       source={{
                           uri: 'https://reactnative.dev/img/tiny_logo.png'
                       }}>
                </Image>
                <TouchableOpacity style={styles.followButton}>
                    <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.profileName}>Drashtant Nayak</Text>
                <Text style={styles.profileHandle}>@drash_nayak</Text>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.profileContainerText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eius est impedit natus officia
                    quasi tempore tenetur veritatis voluptatum. Suscipit.
                </Text>
            </View>
            <View style={styles.locationContainer}>
                <EvilIcons name="location" size={24} color="gray"/>
                <Text style={styles.textGray}>Calgary, Alberta</Text>
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    style={styles.linkItem}
                    onPress={
                        () => Linking.openURL('https://laracasts.com')
                    }
                >
                    <EvilIcons name="link" size={24} color="gray"/>
                    <Text style={styles.linkColor}>Laracasts.com</Text>
                </TouchableOpacity>
                <View style={[styles.linkItem, styles.ml4]}>
                    <EvilIcons name="calendar" size={24} color="gray"/>
                    <Text style={styles.textGray}>Joined March 2008</Text>
                </View>
            </View>
            <View style={styles.followContainer}>
                <View style={styles.followItem}>
                    <Text style={styles.followItemNumber}>599</Text>
                    <Text style={styles.followItemLabel}>Following</Text>
                </View>
                <View style={[styles.followItem, styles.ml4]}>
                    <Text style={styles.followItemNumber}>2,354</Text>
                    <Text style={styles.followItemLabel}>Followers</Text>
                </View>
            </View>
            <View style={styles.separator}></View>
        </View>
    )

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-481f-bd96-145571e29d72',
            title: 'Fourth Item',
        },
        {
            id: '58694a0f-3dav-481f-bd96-145571e29d72',
            title: 'Fifth Item',
        },
        {
            id: '58694a0f-3dav-421f-bd96-145571e29d72',
            title: 'Sixth Item',
        },
        {
            id: '58694a0f-3dav-411f-bd96-145571e29d72',
            title: 'Seventh Item',
        },
        {
            id: '58694a0f-3dab-411f-bd96-145571e29d72',
            title: 'Eighth Item',
        },
    ];

    const renderItem = ({item}) => (
        <View>
            <Text style={{width: 800, marginHorizontal: 10, marginVertical: 10}}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList data={DATA}
                  style={styles.container}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                  ListHeaderComponent={header}
        ></FlatList>
    )
}

const styles = StyleSheet.create({
    textGray: {
        color: 'gray'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundImage: {
        width: 800,
        height: 120
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'white',
        borderWidth: 5,
        marginTop: -34
    },
    followButton: {
        backgroundColor: '#0f1418',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 24
    },
    followButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    nameContainer: {
        paddingHorizontal: 10,
        paddingVertical: 2
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 12
    },
    profileHandle: {
        color: 'gray',
        marginTop: 1
    },
    profileContainer: {
        paddingHorizontal: 10,
        marginTop: 8
    },
    profileContainerText: {
        lineHeight: 22
    },
    locationContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 12
    },
    linkContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 4
    },
    ml4: {
        marginLeft: 16
    },
    linkColor: {
        color: '#1d9bf1'
    },
    linkItem: {
        flexDirection: 'row'
    },
    followContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 12
    },
    followItem: {
        flexDirection: 'row'
    },
    followItemNumber: {
        fontWeight: 'bold'
    },
    followItemLabel: {
        marginLeft: 4
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    }
})