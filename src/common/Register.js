import React, { Component } from 'react'
import { Text, View, TextInput,TouchableOpacity,AsyncStorage,Dimensions,StyleSheet,ToastAndroid} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            rpwd:'',
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    rpwdhandle = (text)=>{
        this.setState({rpwd:text})
    }
    back = ()=>{
        if(this.state.username != '' && this.state.pwd != '' && this.state.rpwd != ''){
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd,
                rpwd:this.state.rpwd
            })
            .then(res=>{
                console.log(res)
                if(res.data.isSuccess === true){
                    AsyncStorage.setItem('newuser',JSON.stringify(res.data))
                    .then(()=>{
                        ToastAndroid.show('注册成功，正在跳转……',500);
                        Actions.login();
                    })
                }else{
                    ToastAndroid.show('密码不一致', 1000);
                    return true;
                }   
            })
        }else{
            ToastAndroid.show('用户名或密码不能为空！', 1000);
            return true;
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff',justifyContent:'center'}}>
                <View style={{
                  alignItems:'center',
                  justifyContent:'center',
                  marginTop:20,
                  height:40,
                }}>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      width:'80%',
                      marginRight:10,
                      borderBottomColor:'#ccc',
                      borderBottomWidth:1
                    }}>
                        <Icon style={{marginLeft:10,color:'#cc00ff'}} size={26} name="user"/>
                        <TextInput
                          placeholder="请输入用户名"
                          fontSize={14}
                          placeholderTextColor='gray'
                          onChangeText={this.userhandle} 
                        />
                    </View>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      width:'80%',
                      marginRight:10,
                      borderBottomColor:'#ccc',
                      borderBottomWidth:1
                    }}>
                        <Icon style={{marginLeft:10,color:'#cc00ff'}} size={26} name="lock"/>
                        <TextInput
                          placeholder="请输入密码"
                          fontSize={14}
                          placeholderTextColor='gray'
                          onChangeText={this.pwdhandle} 
                          secureTextEntry={true}
                        />
                    </View>
                    <View style={{
                      flexDirection:'row',
                      alignItems:'center',
                      width:'80%',
                      marginRight:10,
                      borderBottomColor:'#ccc',
                      borderBottomWidth:1
                    }}>
                        <Icon style={{marginLeft:10,color:'#cc00ff'}} size={26} name="lock"/>
                        <TextInput
                          placeholder="请确认密码"
                          fontSize={14}
                          placeholderTextColor='gray'
                          onChangeText={this.rpwdhandle} 
                          secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                      style={{
                        alignItems:'center',
                        width:'50%',
                        marginRight:10,
                        marginTop:20,
                        backgroundColor:'#cc00ff',
                        height:40,
                        justifyContent:'center',
                        borderRadius:20
                      }}
                      onPress={this.back}>
                        <Text style={{color:'#fff',fontSize:18}}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            width:'50%',
                            marginRight:10,
                            marginTop:20,
                            backgroundColor:'#cc00ff',
                            height:40,
                            justifyContent:'center',
                            borderRadius:20
                          }} 
                     onPress={() => Actions.login()}>
                        <Text style={{color:'#fff',fontSize:18}}>返回登陆</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}