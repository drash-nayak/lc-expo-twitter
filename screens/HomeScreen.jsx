import React from "react";
import {View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity, Platform} from "react-native";
import {EvilIcons} from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
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

    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet() {
        navigation.navigate('Tweet Screen');
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity
                onPress={
                    () => gotoSingleTweet()
                }>
                <Image style={styles.avatar}
                       source={{
                           uri: 'https://reactnative.dev/img/tiny_logo.png'
                       }}>
                </Image>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.flexRow}>
                    <Text numberOfLines={1} style={styles.tweetName}>
                        {item.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@drash_nayak</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi consequuntur cupiditate
                        ipsum nisi optio, qui quo rem sint veritatis!
                    </Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={styles.flexRow}>
                        <EvilIcons name="comment" size={22} color="gray" style={{marginRight: 2}}/>
                        <Text style={styles.textGray}>456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray"/>
                        <Text style={styles.textGray}>32</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray"/>
                        <Text style={styles.textGray}>4,456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={22}
                                   color="gray"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    flexRow: {
        flexDirection: "row"
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        marginHorizontal: 8,
        color: 'gray'
    },
    tweetContentContainer: {
        marginTop: 4
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetContent: {
        lineHeight: 20
    },
    textGray: {
        color: 'gray'
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12
    },
    ml4: {
        marginLeft: 16
    }
})