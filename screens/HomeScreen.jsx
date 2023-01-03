import React, {useEffect, useRef, useState} from "react";
import {
    View,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import axiosConfig from "../helpers/axiosConfig";

import RenderItem from "../components/RenderItem";

export default function HomeScreen({navigation}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [page, setPage] = useState(1);
    const [isAtEndOfScrolling, setIsAtEndOfScrolling] = useState(false);
    const flatListRef = useRef();

    useEffect(() => {
        getAllTweets();
    }, [page]);

    function getAllTweets() {
        axiosConfig.get(`/tweets?page=${page}`).then(
            response => {
                if (page === 1) {
                    setData(response.data.data);
                } else {
                    setData([...data, ...response.data.data]);
                }

                if (!response.data.next_page_url) {
                    setIsAtEndOfScrolling(true);
                }

                setIsLoading(false);
                setIsRefreshing(false);
            }).catch(error => {
            console.log(error);
            setIsLoading(false);
            setIsRefreshing(false);
        });
    }

    function handleRefresh() {
        setPage(1);
        setIsAtEndOfScrolling(false);
        setIsRefreshing(true);
        getAllTweets();
    }

    function handleEnd() {
        setPage(page + 1);
    }

    return (
        <View style={styles.container}>
            {isLoading ? (<ActivityIndicator style={{marginTop: 10}} size="large" color="gray"></ActivityIndicator>) : (
                <FlatList
                    ref={flatListRef}
                    data={data}
                    renderItem={props => <RenderItem {...props} />}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.tweetSeparator}></View>}
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                    onEndReached={handleEnd}
                    onEndReachedThreshold={0.2}
                    initialNumToRender={10}
                    ListFooterComponent={() => !isAtEndOfScrolling && (<ActivityIndicator size="large" color="gray"/>)}
                />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tweetSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb'
    },
})