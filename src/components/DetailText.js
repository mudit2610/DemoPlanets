import React, { useMemo } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from 'react-navigation-hooks';
import Screen from '../constants/Layout';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingRight: 16,
        paddingTop: 13,
        paddingBottom: 16,
        marginBottom: 16,
        width: Screen.window.width - 40,
        backgroundColor: '#fff',

    },

});

const DetailText = ({ data }) => {
    const { push } = useNavigation();

    const keys = Object.keys(data);
    const onSelect = () => { };
    return (
        <View style={[styles.container, { flexDirection: "column", paddingLeft: 20, paddingRight: 20 }]}>
            {keys.map((key) => {

                return (<React.Fragment key={`${data.url}${key}`}>{Array.isArray(data[key]) ? (<Button
                    title={`${key}(${data[key].length}) `}
                    onPress={() => {
                        if (data[key].length <= 0) {
                            alert("No data to show")
                        }
                        else {
                            push("ListScreen", { listData: [...data[key]], title: `${key}` })

                        }
                    }}
                />) : (<View style={{ flexDirection: "row" }}><Text style={{ fontWeight: "bold" }}>{`${key} : `}</Text><Text style={{ flex: 1, flexWrap: 'wrap' }}>{`${data[key]} `}</Text></View>)


                }
                </React.Fragment>
                )
            })}

        </View>
    );
};
export default DetailText;



