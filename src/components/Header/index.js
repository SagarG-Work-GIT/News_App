import React, { Component, PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { normalize } from '../../utils/variables'
import { colors } from '../../utils/colors'

export default class Header extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            screenName: "",
            showBack: false,
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            screenName: props.screenName,
            showBack: props.hasOwnProperty("showBack") ? props.showBack : false,
        }
    }

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableOpacity style={[styles.flex02, styles.centerMiddle]}>
                    {
                        this.state.showBack &&
                        <Ionicons name="arrow-back" size={normalize(25)} color={colors.black} />
                    }
                </TouchableOpacity>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>
                        {this.state.screenName}
                    </Text>
                </View>
                <View style={styles.flex02}>

                </View>
            </View>
        )
    }
}