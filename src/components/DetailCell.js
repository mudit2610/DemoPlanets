import React, { useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { getDetail } from '../redux/actions/details';
import DetailText from './DetailText';
import { useSelector, useDispatch } from 'react-redux';
import theme from '../utils/theme';
import Screen from '../constants/Layout';

const styles = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingTop: 13,
        paddingBottom: 16,
        marginBottom: 16,
        minHeight: 100,
        backgroundColor: theme.colors.primary,
        width: Screen.window.width - 40,

    },

});

const DetailCell = ({ url, data }) => {
    const [dataLocal, setDataLocal] = useState(data);
    const [displayMessage, setDisplayMessage] = useState("Loading...");
    const [isLoading, setIsLoading] = useState(false);

    const detailData = useSelector(state => {
        return state.detail.data[url]
    });
    const dispatch = useDispatch();


    useEffect(() => {
        if (!detailData && url) {
            setIsLoading(true);

            dispatch(getDetail(url)).then(([data]) => {
                setDataLocal(data);
            }).catch(() => {
                setDisplayMessage("Some error Occured");
            }).finally(() => {
                setIsLoading(false);
            });
        }
        else if (detailData) {
            //data found in redux store
            setDataLocal(detailData);
        }

    }, [])


    return (
        <View style={[styles.container]}>

            {isLoading ? (<View> <ActivityIndicator size="large" color={theme.colors.loading} />
                <Text style={{ textAlign: "center" }}>{displayMessage}</Text>
            </View>) : dataLocal ? <DetailText data={dataLocal} /> : <Text style={{ textAlign: "center" }}>{displayMessage}</Text>}

        </View>
    );
};
export default DetailCell;