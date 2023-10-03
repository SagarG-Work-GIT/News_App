import { Text, View, TouchableOpacity } from 'react-native'
import React, { PureComponent } from 'react'
import { styles } from './style'

export default class TextLabel extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            pressable: false,
            onPress: undefined,
            label: "",
            containerStyle: null,
            labelColor: null,
            labelStyle: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            pressable: props.hasOwnProperty("pressable") ? props.pressable : false,
            onPress: props.hasOwnProperty("onPress") ? props.onPress : undefined,
            label: props.hasOwnProperty("label") ? props.label : "",
            containerStyle: props.hasOwnProperty("containerStyle") ? props.containerStyle : null,
            labelColor: props.hasOwnProperty("labelColor") ? props.labelColor : null,
            labelStyle: props.hasOwnProperty("labelStyle") ? props.labelStyle : null
        }
    }


    render() {
        if (this.state.pressable) {
            return (
                <TouchableOpacity style={this.state.containerStyle} onPress={this.state.onPress}>
                    <Text style={[styles.label, this.state.labelStyle, this.state.labelColor && { color: this.state.labelColor }]}>{this.state.label}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={this.state.containerStyle}>
                <Text style={[styles.label, this.state.labelStyle, this.state.labelColor && { color: this.state.labelColor }]}>{this.state.label}</Text>
            </View>
        )
    }
}