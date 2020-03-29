import React, { Component } from 'react'
import {View,Text,Image,AsyncStorage,TextInput,TouchableOpacity,BackHandler,ToastAndroid} from 'react-native'
import {Actions} from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native'
import {myFetch} from '../utils'
export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            isLoading:false
        }
    }
    componentDidMount(){
        if (Platform.OS === 'android'){
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
          BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            BackHandler.exitApp();
        }else{
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', 1000);
            return true;
        }
    }    
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        })
        .then(res=>
            AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.homePage();
            })
        )
    }
    register = ()=>{
        Actions.register();
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
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
                          placeholder="用户名"
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
                          placeholder="密码"
                          fontSize={14}
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
                      onPress={this.login}>
                        <Text style={{color:'#fff',fontSize:18}}>登录</Text>
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
                          onPress={this.register}>
                        <Text style={{color:'#fff',fontSize:18}}>注册</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isloading
                    ?<View style={{margin:0,width:'100%',height:'120%',alignItems:'center',justifyContent:'center',zIndex:99,backgroundColor:'#fff'}}>
                        <Icon name='loading' color='#cc00ff' size={45}/>
                        <Text style={{marginTop:20,color:'#cc00ff'}}>正在登录...</Text>
                    </View>
                    :null
                }
            </View>
        )
    }
}
