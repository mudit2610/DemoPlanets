import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Cell from '../components/DetailCell';
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
    return (
        <View style={styles.container}>
            {listData.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}

                    data={listData}
                    renderItem={({ item, index }) => {
                        return <Cell url={item} />

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