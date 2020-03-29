import React, { Component } from 'react'
import {View,Text,Image,TextInput,StyleSheet,FlatList,ScrollView,Dimensions} from 'react-native'
import { Icon } from '@ant-design/react-native'
const {width} = Dimensions.get('window')
// const {width,scale} = Dimensions.get('window');
// const s = width / 640;
export default class List extends Component {
    constructor(){
        super();
        let data = [];
        for(var i=1;i<=3;i++){
            if(i%2 == 1){
                data.push({tit:1,key:i});
            }
            else{
                data.push({tit:2,key:i});
            }
        }
        this.state = {
            data
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{justifyContent:'center',backgroundColor:'#fff',flex:1}}>
                    <View style={{
                    alignItems:'center',
                    marginTop:20,
                    marginBottom:10
                    }}>
                        <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                        width:'80%',
                        height:40,
                        backgroundColor:'#eeeeee',
                        borderRadius:5
                        }}>
                        <TextInput
                        placeholder="请输入商品名称"
                        placeholderTextColor='#999999'
                        onChangeText={(val)=>{setVal(val)}} 
                        />
                        <Icon size={22} color="#999999" style={{position:'absolute',right:15}} name="search"/>
                        </View>
                    </View>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#dedede'}}>
                        <View style={{
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center',
                            width:'80%',
                            height:70,
                            marginLeft:'10%',
                            }}>
                            <Text style={styles.text1}>综合</Text>
                            <Text style={styles.text1}>销量</Text>
                            <Text style={styles.text1}>新品</Text>
                            <Text style={styles.text1}>价格</Text>
                            <Text style={styles.text1}>信用</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:"#f4f4f4"}}>
                        {
                            this.state.data.map((item)=>{
                                return(
                                    <View style={{
                                        flexDirection:'row',
                                        alignItems:'center',
                                        justifyContent:'center',
                                        marginLeft:width*0.05,
                                        marginRight:width*0.05,
                                    }}>
                                        <View style={styles.list}>
                                            <Image style={styles.image} source={require('../../assets/icon/goods1.jpg')}/>
                                            <Text style={styles.text2}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                                            <Text style={styles.text3}>36.00</Text>
                                        </View>
                                        <View style={styles.list}>
                                            <Image style={styles.image} source={require('../../assets/icon/goods2.jpg')}/>
                                            <Text style={styles.text2}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                                            <Text style={styles.text3}>36.00</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    text1:{
        fontSize:16,
        color:'#999999',
        marginLeft:15,
        marginRight:15
    },
    list:{
        marginRight:10,
        width:width*0.45,
        height:350,
        justifyContent:'center',
        marginTop:10,
        backgroundColor:'#fff'
    },
    image:{
        marginLeft:'5%',
        marginTop:'15%',
        width:'90%',
        height:200
    },
    text2:{
        fontSize:16,
        color:'#999999',
        marginLeft:10,
        marginTop:20,
        marginRight:2
    },
    text3:{
        color:'red',
        fontSize:16,
        marginLeft:10,
        marginTop:15
    }
})