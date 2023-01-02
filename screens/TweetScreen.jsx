import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image, Platform} from "react-native";
import {Entypo} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';

export default function TweetScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.flexRow}>
                    <Image style={styles.avatar}
                           source={{
                               uri: 'https://reactnative.dev/img/tiny_logo.png'
                           }}>
                    </Image>
                    <View>
                        <Text style={styles.tweetName}>Drashtant Nayak</Text>
                        <Text style={styles.tweetHandle}>@drash_nayak</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="gray"/>
                </TouchableOpacity>
            </View>
            <View style={styles.tweetContentContainer}>
                <Text style={styles.tweetContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi
                    assumenda dignissimos dolore dolores excepturi impedit ipsam ipsum iusto laboriosam molestiae nisi,
                    officiis pariatur perferendis placeat porro provident quibusdam quis quisquam repellendus suscipit,
                    tenetur unde veniam, vero voluptatum? Non, perspiciatis.</Text>
            </View>
            <View style={styles.tweetEngagement}>
                <View style={styles.flexRow}>
                    <Text style={styles.tweetEngagementNumber}>628</Text>
                    <Text style={styles.tweetEngagementLabel}>Retweets</Text>
                </View>
                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>38</Text>
                    <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
                </View>
                <View style={[styles.flexRow, styles.ml4]}>
                    <Text style={styles.tweetEngagementNumber}>2,934</Text>
                    <Text style={styles.tweetEngagementLabel}>Likes</Text>
                </View>
            </View>

            <View style={[styles.tweetEngagement, styles.spaceAround]}>
                <TouchableOpacity>
                    <EvilIcons name="comment" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="retweet" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name="heart" size={32} color="gray"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <EvilIcons name={Platform.OS === 'ios' ? 'share-apple' : 'share-google'} size={32} color="gray"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    flexRow: {
        flexDirection: 'row',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 25
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222'
    },
    tweetHandle: {
        color: 'gray',
        marginTop: 4
    },
    tweetContentContainer: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetContent: {
        fontSize: 20,
        lineHeight: 25
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
    tweetEngagementNumber: {
        fontWeight: 'bold',
    },
    tweetEngagementLabel: {
        color: 'gray',
        marginLeft: 5
    },
    textGray: {
        color: 'gray'
    },
    spaceAround: {
        justifyContent: 'space-around'
    },
    ml4: {
        marginLeft: 16
    }
});