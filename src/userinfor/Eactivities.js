import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions, TouchableOpacity,} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const Elist = [
    {
        title:'居家维修保养',
        name:'wrench',
        key:'',
    },
    {
        title:'出行接送',
        name:'car',
        key:'',
    },
    {
        title:'我的受赠人',
        name:'user-o',
        key:'',
    },
    {
        title:'我的住宿优惠',
        name:'hotel',
        key:'',
    },
    {
        title:'我的活动',
        name:'flag-o',
        key:'',
    },
    {
        title:'我的发布',
        name:'edit',
        key:'publish',
    }
]
export default class Eactivities extends Component {
    publish = ()=>{
        Actions.publish()
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.eactivity}>
                    <View style={styles.ptop}>
                        <Icon name='tag' size={26} color='#aeaeae'/>
                        <Text style={{fontSize:18,marginLeft:22*s}}>E族活动</Text>
                    </View>
                    <View style={[styles.listbox,{flexWrap:'wrap'}]}>
                        {
                            Elist.map((item,index)=>{
                                if(item.title === '我的发布'){
                                    return (
                                        <TouchableOpacity onPress={this.publish}>
                                            <View style={styles.list}>
                                                <Icon name={item.name} size={26} color='#aeaeae'/>
                                                <Text style={{marginTop:5,fontSize:14,color:'#727171'}}>{item.title}</Text>
                                            </View> 
                                        </TouchableOpacity>
                                    )
                                }
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
    eactivity:{
        backgroundColor:'#fff'
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
    bottom:{
        height:96*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:213*s,
        marginTop:20*s,
        marginBottom:30*s,
        justifyContent:'center',
        alignItems:'center'
    },
})