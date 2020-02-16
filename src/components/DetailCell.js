import React, { useMemo, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, Alert, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { getDetail } from '../redux/actions/details';
import DetailText from './DetailText';
import { useSelector, useDispatch } from 'react-redux';
import theme from '../utils/theme';
import Screen from '../constants/Layout';
import { useNavigation } from 'react-navigation-hooks';
import { pure } from 'recompose';

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
    const { push } = useNavigation();


    const dispatch = useDispatch();


    useEffect(() => {
        if (!data && url) {
            setIsLoading(true);

            dispatch(getDetail(url)).then(([data]) => {
                setDataLocal(data);
            }).catch(() => {
                setDisplayMessage("Some error Occured");
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }, [])


    return (
        <View style={[styles.container]}>

            {isLoading ? (<View>
                <ActivityIndicator size="large" color={theme.colors.loading} />
                <Text style={{ textAlign: "center" }}>{`${displayMessage}`}</Text>
            </View>) : dataLocal ? <DetailText data={dataLocal} push={push} /> : <Text style={{ textAlign: "center" }}>{`${displayMessage}`}</Text>}

        </View>
    );
};
export default pure(DetailCell);

