import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions,TextInput,FlatList, ScrollView,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import SplashScreen from 'react-native-splash-screen'
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const lists = [
    {
        title: '居家维修保养',
        img:require('../../assets/icon/service2.jpg')
    },
    {
        title: '住宿优惠',
        img:require('../../assets/icon/service3.jpg')
    },
    {
        title: '出行接送',
        img:require('../../assets/icon/service4.jpg')
    },
    {
        title: 'E族活动',
        img:require('../../assets/icon/service5.jpg')
    },
]
export default class Home extends Component {
    componentDidMount(){
        SplashScreen.hide();
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <View style={styles.search}>
                            <Icon name='search' size={20} color="#fff"/>
                            <TextInput 
                                placeholder="请输入您要搜索的关键字"
                                placeholderTextColor='#fff'
                                style={{
                                    width: 490*s,height: 80*s,
                                }}
                                onChangeText={(val)=>{setVal(val)}}
                            />
                        </View>
                        <Icon name='shopping-cart' size={24} color="#fff"/>
                    </View>
                    <View style={styles.swiper}>
                        <Swiper 
                            showsButtons={true} 
                            autoplay={true}
                            showsButtons={false} 
                            horizontal={true}
                            dot={<View style={{           //未选中的圆点样式
                                backgroundColor: '#fff',
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginLeft:9
                            }}/>}
                                activeDot={<View style={{    //选中的圆点样式
                                backgroundColor: 'red',
                                width: 10,
                                height: 10,
                                borderRadius:5,
                                marginLeft:9
                            }}/>}
                        >
                            <Image source={require('../../assets/icon/service1.jpg')} style={styles.imgs}/>
                            <Image source={require('../../assets/icon/service1.jpg')} style={styles.imgs}/>
                            <Image source={require('../../assets/icon/service1.jpg')} style={styles.imgs}/>
                        </Swiper>
                    </View>
                    {
                        lists.map((item,index)=>{
                            return(
                                <TouchableOpacity>
                                    <View style={styles.list}>
                                        <View style={{width:600*s,flexDirection:'row',alignItems:'center'}}>
                                            <Image source={item.img} style={styles.img}/>
                                            <Text style={{fontSize:20,marginLeft:30*s}}>{item.title}</Text>
                                        </View>
                                        <Icon name='chevron-right'/>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    <View style={styles.bottom}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color:'#fff',fontSize:22}}>发布需求</Text>
                        </TouchableOpacity>
                        <Text style={{marginTop:100*s,fontSize:16,color:'gray',marginBottom:28*s}}>©E族之家 版权所有</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height: 72*s,
        backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    search:{
        width: 526*s,
        height: 51*s,
        backgroundColor: '#fbb8b8',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius:25,
        paddingLeft:20*s,
        marginRight:24*s
    },
    swiper:{
        height:274*s,
    },
    imgs:{
        width:644*s,
        height:274*s
    },
    list:{
        height:120*s,
        backgroundColor:'#fff',
        marginTop:10*s,
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width:110*s,
        height:110*s,
        marginLeft:15*s,
    },
    bottom:{
        marginTop:36*s,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:544*s,
        height:68*s,
        backgroundColor:'#cc00ff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10*s
    }
})