import React, { Component } from 'react'
import {View,Text,StyleSheet, ScrollView,FlatList,Dimensions, Image,TouchableOpacity,AsyncStorage, TouchableHighlightBase} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux'
import Personalcenter from './Personalcenter'
import Eactivities from './Eactivities';
const {width,scale} = Dimensions.get('window');
const s = width / 640;
const options = {
    title: '请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'从相册中选择',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
export default class Myself extends Component {
    constructor(){
        super();
        this.state = {
            imageUrl:''
        }
    }
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else { 
              const source = { uri: response.uri };
              AsyncStorage.setItem('imageUrl',JSON.stringify(source),()=>{
                console.log('store success')
              })
              this.setState({
                imageUrl: source,
              });
            }
          });
    }
    componentDidMount(){
        AsyncStorage.getItem('imageUrl')
        .then((res)=>{
            this.setState({imageUrl:JSON.parse(res)})
        })
    }
    back = ()=>{
        AsyncStorage.removeItem('user');
        Actions.login();
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{this.takephoto()}}>
                            <Image source={this.state.imageUrl} style={styles.img}/>
                        </TouchableOpacity>
                        <Text style={{color:'#fff',fontSize:16,marginTop:20*s}}>BINNU DHILLON</Text>
                    </View>
                    <Personalcenter/>
                    <Eactivities/>
                    <View style={styles.bottom}>
                        <TouchableOpacity onPress={this.back}>
                            <Text style={{fontSize:16,color:'#767676'}}>BINNU DHILLON | 退出</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:306*s,
        backgroundColor:'#cc00ff',
        alignItems:'center'
    },
    img:{
        width:154*s,
        height:154*s,
        borderRadius:77*s,
        marginTop:52*s
    },
    bottom:{
        height:96*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})
