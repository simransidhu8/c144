import React, {Component} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {Card} from 'react-native-elements'
import axios from axios
import {RFValue} from 'react-native-responsive-fontsize'

export default class Popular extends Component{
    constructor(props){
        super(props)
        this.state={
            data: []
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    timeConvert(num) {
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return `${hours} hrs ${minutes} mins`;
    }

    getData = () => {
        const url = 'http://localhost:5000/popular-movies'
        axios
            .get(url)
            .then(async response => {
                this.setState({
                    data : response.data.data
                })
            })
            .catch(error => {
                console.log('error')
            })
    }

    keyExtractor = (item, index) => index.toString()

    renderItems = ({item, index}) => {
        return(
            <Card 
                key = {`card-${index}`}
                image = {{uri: item.poster_link}}
                imageProps = {{resizeMode: 'cover'}}
                featuredTitle = {item.orginial_title}
                containerStyle= {styles.cardContainer}
                featuredTitleStyle = {styles.title}
                featuredSubtitle = {`${item.release_date.split('-')[0]} | or ${this.timeConvert(item.duration)}`}
                featuredSubtitleStyle = {styles.subtitle}
            >

            </Card>
        )
    }

    render(){
        const {data} = this.state
        return(
            <View style = {styles.container}>
                <FlatList 
                    data = {data}
                    keyExtractor = {this.keyExtractor}
                    renderItem = {this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1, 
        justifyContent: 'center',
        borderRadius: RFValue(10),
        height: RFValue(100),
        marginBottom: RFValue(20)
    },
    title: {
        color: 'red',
        alignSelf: 'center',
        fontSize: RFValue(25),
        paddingLeft: RFValue(10),
        marginTop: RFValue(50)
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: RFValue(15),
        paddingLeft: RFValue(10),
        alignSelf: 'flex-start'
    },
    container: {
        flex:1,
        backgroundColor: 'gray'
    }
})