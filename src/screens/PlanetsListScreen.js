import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button, ActivityIndicator } from 'react-native';
import { getPlanets } from '../redux/actions/planets';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import DetailCell from '../components/DetailCell';
import theme from '../utils/theme'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default function Planets() {
    const dispatch = useDispatch();
    const { navigate } = useNavigation();

    const planetsData = useSelector(state => state.planets.data);
    const next = useSelector(state => state.planets.next);
    const count = useSelector(state => state.planets.count);
    const [isLazyLoading, setIsLazyLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [planets, setPlanets] = useState([]);
    const loadData = () => {
        setIsLoading(true);
        dispatch(getPlanets()).then((response) => {
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <View style={styles.container}>
            {planetsData.length > 0 ? (
                <FlatList
                    data={planetsData}

                    removeClippedSubviews={false}
                    renderItem={({ item, index }) => {

                        return <DetailCell data={item} />

                    }}
                    showsVerticalScrollIndicator={false}

                    keyExtractor={(item, index) => {
                        const key = `${item.url || ""}${index}`;
                        return key;
                    }}
                    onEndReached={() => {
                        if (count > planetsData.length && !isLazyLoading) {
                            setIsLazyLoading(true);
                            dispatch(getPlanets(next)).then((response) => {
                            })
                                .finally(() => {
                                    setIsLazyLoading(false);
                                });
                        }
                    }}
                    onEndReachedThreshold={0.8}
                    ListFooterComponent={

                        <View style={{ height: 60, backgroundColor: "white", flexDirection: "row" }}>
                            {isLazyLoading ? <ActivityIndicator size="large" color={theme.colors.loading} /> : null}
                            <Text style={{ textAlign: 'center', fontSize: 20, textAlignVertical: "center" }}>{isLazyLoading ? "Loading more..." : (count <= planetsData.length && !isLazyLoading) ? 'List Completed' : ""}</Text>

                        </View>

                    }
                    onRefresh={() => {
                        setIsRefreshing(true);
                        dispatch(getPlanets()).finally(() => {
                            setIsRefreshing(false);

                        })
                    }}
                    refreshing={isRefreshing}
                />
            ) : isLoading ? <ActivityIndicator size="large" color={theme.colors.loading} /> : <Button
                title={`Retry`}
                onPress={() => {
                    loadData();
                }}
            />

            }

        </View >
    );
}


