import { Text, View, TouchableOpacity, Image, Linking } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { noImageUrl, normalize } from '../../utils/variables'
import FlatListContainer from '../../components/FlatListContainer'
import BaseService from '../../api/BaseService'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../utils/colors'
import NewsService from '../../services/NewsService'



class ListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenName: "",
      news: [],
      totalresult: 0,
      searchlist: [],
      searchresult: 0,
      searchText: "",
      refreshing: false
    }
    this.baseService = new BaseService()

  }

  static getDerivedStateFromProps(props, state) {

    return {
      screenName: props.route.name,
      news: props.news ?? [],
      totalresult: props?.totalresult ?? 0,
      searchlist: props.searchlist ?? [],
      searchresult: props?.searchresult ?? 0
    }
  }

  renderItem = ({ item, index }) => {

    item.urlToImage ??= noImageUrl

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => this.onPressNews(item, index)}>
        <View style={styles.itemDescriptor}>
          {
            item?.urlToImage &&
            <Image source={{ uri: item?.urlToImage }} style={styles.image} resizeMode='cover' />
          }
          <View style={styles.description}>
            <View>
              <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.source}>Source: {item.source.name}</Text>
            </View>
          </View>

        </View>
        <View style={styles.icon}>
          <AntDesign name="rightcircle" size={normalize(15)} color={colors.black} />
        </View>
      </TouchableOpacity>
    )
  }

  setListRef = (ref) => {
    this.listRef = ref;
  }

  getData = async () => {
    this.setState({
      refreshing: true
    })

    await NewsService._getList().then(res => {
      this.setState({
        refreshing: false
      })
    }, err => {
      this.setState({
        refreshing: false
      })
    })
  }

  onSearch = (value) => {
    // console.log(value);
    this.setState({
      searchText: value
    }, () => {
      NewsService._searchNews(this.state.searchText)
    })
  }

  onCancelSearch = () => {
    this.setState({
      searchText: ""
    }, () => NewsService._cancelSearch())
    this.listRef.scrollToOffset({ animated: true, offset: 0 });
  }

  onPressNews = (item, index) => {
    this.props.navigation.navigate("Details", { itemDetails: item, itemIndex: index })
  }

  componentDidMount() {
    this.getData()
  }


  render() {
    return (
      <View style={styles.container}>
        <Header
          screenName={this.state.screenName}
          showBack={false}
        />
        <View style={styles.content}>
          <SearchBar
            value={this.state.searchText}
            onChangeText={this.onSearch}
            placeholder="Search here..."
            containerStyle={{
              marginVertical: normalize(15),
            }}
            onCancelSearch={this.onCancelSearch}
          />
          <Text style={styles.totalresult}>
            {
              this.state.searchText === "" ?
                this.state.totalresult + " "
                :
                this.state.searchresult + " Search "
            }
            Results</Text>
          <FlatListContainer
            setRef={this.setListRef}
            data={(this.state.searchText === "") ? this.state.news : this.state.searchlist}
            renderItem={this.renderItem}
            refreshing={this.state.refreshing}
            onRefresh={this.getData}
            style={{
              marginTop: normalize(15)
            }}
            itemSeparatorComponent={() => <View style={{ marginTop: normalize(20) }} />}
          />

        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    news: state.listReducer.news,
    totalresult: state.listReducer.totalResult,
    searchlist: state.listReducer.searchNews,
    searchresult: state.listReducer.searchResult,
  }
}

// `connect` returns a new function that accepts the component to wrap:
export default connect(mapStateToProps)(ListScreen)