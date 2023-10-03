import { Text, View, Image, StatusBar, TouchableOpacity, Linking, Keyboard } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { colors } from '../../utils/colors'
import TextArea from '../../components/TextArea'
import TextLabel from '../../components/TextLabel'
import { noImageUrl, normalize } from '../../utils/variables'
import NewsService from '../../services/NewsService'

export default class DetailsScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenName: "",
      itemDetails: null,
      itemIndex: null,
      isEditable: false,
      description: "",
    }

  }

  static getDerivedStateFromProps(props, state) {
    return {
      screenName: props.route.name,
      itemDetails: props.route.params.itemDetails,
      itemIndex: props.route.params?.itemIndex ?? null
    }
  }

  componentDidMount() {
    this.setState({
      description: this.state.itemDetails?.description
    })
  }

  onChangeDescription = (value) => {
    this.setState({
      description: value
    })
  }

  onEdit = () => {
    this.setState({ isEditable: !this.state.isEditable })
  }

  onSubmit = async () => {
    await NewsService._updateNewsItem(this.state.description, this.state.itemIndex)
    
    let itemDetails = this.state.itemDetails
    itemDetails.description = this.state.description

    this.props.navigation.setParams({
      itemDetails: itemDetails
    })
    Keyboard.dismiss()
    this.onEdit()
  }


  render() {
    const date = new Date(this.state.itemDetails?.publishedAt).toLocaleDateString()
    return (
      <KeyboardAwareScrollView enableAutomaticScroll contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <StatusBar
          animated={true}
          translucent
          // hidden
          backgroundColor={"rgba(0,0,0,0.1)"}
        />

        <View style={styles.imageContainer}>
          <View style={styles.overlay} />
          <Image source={{ uri: this.state.itemDetails?.urlToImage ?? noImageUrl }} style={styles.image} resizeMode='cover' />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.newsDetails}>
            <Text style={styles.details}>By {this.state.itemDetails?.author}</Text>
            <Text style={styles.details}>
              Published on {date}
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.itemDetails?.title}</Text>
          </View>

          <TextArea
            value={this.state.isEditable ? this.state.description : this.state.itemDetails?.description}
            multiline
            editable={this.state.isEditable}
            onChangeText={this.onChangeDescription}
            label="Description :"
          />

          <TextLabel
            label="Go to link"
            pressable
            onPress={() => Linking.openURL(this.state.itemDetails?.url)}
            containerStyle={{
              marginTop: normalize(15),
            }}
            labelColor={colors.blue1}
          />

          <TextLabel
            label={"Source: " + this.state.itemDetails?.source?.name}
            containerStyle={{
              marginTop: normalize(15),
            }}
          />

          <TextLabel
            label="Edit Info"
            pressable
            onPress={this.onEdit}
            containerStyle={{
              marginTop: normalize(15),
            }}
          />

        </View>

        {
          this.state.isEditable &&
          <TouchableOpacity style={styles.submitBtn} onPress={this.onSubmit}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        }

      </KeyboardAwareScrollView>
    )
  }
}