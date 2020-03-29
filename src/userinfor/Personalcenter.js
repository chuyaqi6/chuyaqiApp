import React, { Component } from 'react'
import {View,Text,StyleSheet, Dimensions,TouchableOpacity,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const plist = [
    {
        title:'账户管理',
        name:'gear'
    },
    {
        title:'收货地址',
        name:'map-marker'
    },
    {
        title:'我的信息',
        name:'address-card-o'
    },
    {
        title:'我的订单',
        name:'file-text-o'
    },
    {
        title:'我的二维码',
        name:'qrcode'
    },
    {
        title:'我的积分',
        name:'database'
    },
    {
        title:'我的收藏',
        name:'star-o'
    },
]
export default class Personalcenter extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.personal}>
                    <View style={styles.ptop}>
                        <Icon name='user-o' size={26} color='#aeaeae'/>
                        <Text style={{fontSize:18,marginLeft:22*s}}>我的个人中心</Text>
                    </View>
                    <View style={[styles.listbox,{flexWrap:'wrap'}]}>
                        {
                            plist.map((item,index)=>{
                                return <TouchableOpacity>
                                        <View style={styles.list}>
                                            <Icon name={item.name} size={26} color='#aeaeae'/>
                                            <Text style={{marginTop:5,fontSize:14,color:'#727171'}}>{item.title}</Text>
                                        </View> 
                                    </TouchableOpacity>
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    personal:{
        // height:462*s,
        marginBottom:10*s,
        backgroundColor:'#fff',
    },
    ptop:{
        height:76*s,
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee',
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:22*s
    },
    listbox:{
        flex:1,
        flexDirection:'row',
    },
    list:{
        width:213*s,
        marginTop:20*s,
        marginBottom:20*s,
        justifyContent:'center',
        alignItems:'center'
    },
})
