import React, { Component } from 'react'
import { Text, View, TextInput,TouchableOpacity,AsyncStorage,Dimensions,StyleSheet} from 'react-native'
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
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    back = ()=>{
        myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd
        })
        .then(res=>
            AsyncStorage.setItem('newuser',JSON.stringify(res.data))
            .then(()=>{
                Actions.login();
            })
        )
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Actions.login()}>
                        <Icon name='left' color='#cc00ff' size={28} style={{ marginLeft: 20 * s }} />
                    </TouchableOpacity>
                </View>
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
                          fontSize={16}
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
                          fontSize={16}
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
                          fontSize={16}
                          placeholderTextColor='gray'
                          onChangeText={this.pwdhandle} 
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
                        <Text style={{color:'#fff',fontSize:18}}>注册成功</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70 * s,
        marginBottom:300*s
    },
})