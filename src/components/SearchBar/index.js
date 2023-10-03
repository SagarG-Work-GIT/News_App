import { Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import { colors } from '../../utils/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { normalize } from '../../utils/variables'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "",
            placeholder: "",
            onChangeText: undefined,
            containerStyle: null,
            onCancelSearch: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            value: props.hasOwnProperty("value") ? props.value : "",
            placeholder: props.hasOwnProperty("placeholder") ? props.placeholder : "",
            onChangeText: props.hasOwnProperty("onChangeText") ? props.onChangeText : undefined,
            onCancelSearch: props.hasOwnProperty("onCancelSearch") ? props.onCancelSearch : undefined,
            containerStyle: props.hasOwnProperty("containerStyle") ? props.containerStyle : null,
        }
    }

    render() {
        return (
            <View style={[styles.container, this.state.containerStyle]}>
                <TextInput
                    value={this.state.value}
                    onChangeText={this.state.onChangeText}
                    style={styles.textInput}
                    placeholder={this.state.placeholder}
                    placeholderTextColor={colors.grey3}
                />
                {
                    this.state.value !== "" ?
                    <TouchableOpacity style={styles.btn} onPress={this.state.onCancelSearch}>
                        <AntDesign name="closecircle" size={normalize(15)} color={colors.grey4} />
                    </TouchableOpacity>
                    :
                    null
                }

            </View>
        )
    }
}