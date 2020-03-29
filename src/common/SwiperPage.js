import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
export default class SwiperPage extends Component {
    start = ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    }
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                    <TouchableOpacity onPress={this.start} style={styles.start}>
                        <Text style={{color:'#fff',fontSize:16}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    start:{
        justifyContent:'center',
        alignItems:'center',
        bottom:150,
        width:150,
        height:40,
        backgroundColor:'#cc00ff',
        borderRadius:20
    }
})