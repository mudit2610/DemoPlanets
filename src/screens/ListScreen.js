import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Cell from '../components/DetailCell';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
});
export default function ListScreen({ navigation }) {

    const { listData } = navigation.state.params;

    const allData = useSelector(state => {
        return state.detail.data
    });
    const listDataDetails = listData.reduce((acu, url) => {
        const data = allData[url];
        if (data) { acu[url] = data; }
        return acu;
    }, {});
    return (
        <View style={styles.container}>
            {listData.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}

                    data={listData}
                    renderItem={({ item, index }) => {

                        return <Cell data={listDataDetails[item]} url={item} />

                    }}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    keyExtractor={(item, index) => {
                        let key = `${index}`;
                        return key;
                    }}
                    bounces={false}

                />
            ) : null
            }

        </View >
    );
}
ListScreen.navigationOptions = (nav) => {
    return ({
        headerTitle: nav.navigation.state.params.title,
    })
}