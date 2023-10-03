import { FlatList, Text, View, RefreshControl } from 'react-native'
import React, { Component, PureComponent } from 'react'
import { styles } from './style'

export default class FlatListContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            renderItem: undefined,
            itemSeparatorComponent: undefined,
            onRefresh: undefined,
            style: null,
            refreshing: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            data: props.hasOwnProperty("data") ? props.data : [],
            style: props.hasOwnProperty("style") ? props.style : null,
            renderItem: props.hasOwnProperty("renderItem") ? props.renderItem : undefined,
            itemSeparatorComponent: props.hasOwnProperty("itemSeparatorComponent") ? props.itemSeparatorComponent : undefined,
            onRefresh: props.hasOwnProperty("onRefresh") ? props.onRefresh : undefined,
            refreshing: props.hasOwnProperty("refreshing") ? props.refreshing : false,
        }
    }

    render() {
        if (this.state.renderItem) {
            return (
                <FlatList
                    ref={this.props.setRef}
                    data={this.state.data}
                    renderItem={this.state.renderItem}
                    keyExtractor={(item, index) => index}
                    contentContainerStyle={styles.contentContainerStyle}
                    style={this.state.style}
                    ItemSeparatorComponent={this.state.itemSeparatorComponent}
                    // ListEmptyComponent={() => <Text>No Data</Text>}
                    // onRefresh={this.state.onRefresh}
                    // refreshing={this.state.refreshing}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.state.onRefresh} />
                      }
                />
            )
        }
        return null

    }
}