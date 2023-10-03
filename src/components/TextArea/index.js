import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { styles } from './style'
import { normalize } from '../../utils/variables'
import TextLabel from '../TextLabel'

export class TextArea extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editable: false,
            multiline: false,
            value: "",
            label: "",
            onChangeText: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {

        return {
            editable: props.hasOwnProperty("editable") ? props.editable : false,
            multiline: props.hasOwnProperty("multiline") ? props.multiline : false,
            value: props.hasOwnProperty("value") ? props.value : "",
            label: props.hasOwnProperty("label") ? props.label : "",
            onChangeText: props.hasOwnProperty("onChangeText") ? props.onChangeText : undefined
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevProps.editable);
    //     if(prevProps.editable !== this.props.editable){
    //         this.myTextInput.focus()
    //     }
    // }    

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.label !== "" &&
                    <TextLabel
                        label={this.state.label}
                        containerStyle={{
                            marginTop: normalize(15),
                        }}
                        labelStyle={{
                            paddingLeft: 0,
                        }}
                    />
                }
                {
                    this.state.editable ?
                        <TextInput
                            ref={(ref) => { this.myTextInput = ref }}
                            editable={this.state.editable}
                            style={[styles.input, this.state.editable && styles.border]}
                            value={this.state.value}
                            multiline={this.state.multiline}
                            onChangeText={this.state.onChangeText}
                            textBreakStrategy={"highQuality"}
                            autoFocus                            
                        />
                        :
                        <Text style={styles.text} textBreakStrategy='highQuality'>{this.state.value}</Text>
                }

            </View>
        )
    }
}



export default TextArea
