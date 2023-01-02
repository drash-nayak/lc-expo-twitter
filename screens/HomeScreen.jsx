import React, {useEffect, useState} from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    ActivityIndicator
} from "react-native";
import {EvilIcons} from '@expo/vector-icons';
import axios from "axios";
import {formatDistanceToNowStrict} from "date-fns";
import locale from 'date-fns/locale/en-US'
import formatDistance from "../helpers/formatDistanceCustom";

export default function HomeScreen({navigation}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        getAllTweets();
    }, [])

    function getAllTweets() {
        axios.get('http://lc-backend-twitter.test/api/tweets').then(
            response => {
                setData(response.data);
                setIsLoading(false);
                setIsRefreshing(false);
            }).catch(error => {
            console.log(error);
            setIsLoading(false);
            setIsRefreshing(false);
        });
    }

    function handleRefresh() {
        setIsRefreshing(true);
        getAllTweets();

    }


    function gotoProfile() {
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet() {
        navigation.navigate('Tweet Screen');
    }

    const renderItem = ({item: tweet}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity
                onPress={
                    () => gotoSingleTweet()
                }>
                <Image style={styles.avatar}
                       source={{
                           uri: tweet.user.avatar
                       }}>
                </Image>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TouchableOpacity style={styles.flexRow}>
                    <Text numberOfLines={1} style={styles.tweetName}>
                        {tweet.user.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@{tweet.user.username}</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>
                        {formatDistanceToNowStrict(new Date(tweet.created_at), {
                            locale: {
                                ...locale,
                                formatDistance,
                            },
                        })}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        {tweet.body}
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
            {isLoading ? (<ActivityIndicator style={{marginTop: 10}} size="large" color="gray"></ActivityIndicator>) : (
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                />)}
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