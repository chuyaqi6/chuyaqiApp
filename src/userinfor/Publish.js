import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, ToastAndroid, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
let url = 'https://cnodejs.org/api/v1/topics?limit=15&page=';
export default class Publish extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            num: 1,
        }
    }
    componentDidMount() {
        let page = this.state.num;
        console.log(page)
        fetch(url + page)
        .then(res => res.json())
        .then(res => {
            this.setState({ data: res.data });
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.num !== prevState.num) {
            let page = this.state.num;
            fetch(url + page)
            .then(res => res.json())
            .then(res => {
                this.setState({ data: res.data });
            })
        }
    }
    backPage = () => {
        var num = this.state.num;
        if (num - 1 === 0) {
            ToastAndroid.show("这已经是第一页了 !", ToastAndroid.SHORT);
            this.setState({ num: num })
        } else {
            num = num -1;
            this.setState({ num: num })
        }
    }
    nextPage = () => {
        var num = this.state.num;
        num = num+1;
        this.setState({ num: num })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Icon name='chevron-left' color='#fff' size={24} style={{ marginLeft: 20 * s }} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 20, marginLeft: 190 * s }}>我的发布</Text>
                    <Icon name='ellipsis-h' color='#fff' size={24} style={{ marginLeft: 170 * s }} />
                </View>
                {
                    this.state.data.map((item, index) => {
                        let ran = Math.random();
                        if (item.title.length > 15 || item.create_at.length > 10) {
                            item.title = item.title.substring(0, 15) + '……';
                            item.create_at = item.create_at.substring(0, 10);
                            return (
                                <View style={styles.content}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.time}>{item.create_at}</Text>
                                    <Text style={{ color: ran > 0.5 ? '#000' : 'red' ,right:10*s}}>{ran > 0.5 ? '已回复' : '待回复'}</Text>
                                </View>
                            )
                        }
                    })
                }
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.btnL} onPress={()=>{this.backPage()}}>
                        <Text style={{color:'#fff',fontSize:18}}>上一页</Text>
                    </TouchableOpacity>
                    <Text style={styles.pagesNum}>第{this.state.num}页</Text>
                    <TouchableOpacity style={styles.btnR} onPress={()=>{this.nextPage()}}>
                        <Text style={{color:'#fff',fontSize:18}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#cc00ff',
        alignItems: 'center',
        height: 70 * s
    },
    content: {
        flex:1,
        flexDirection: 'row',
        height: 70 * s,
        borderBottomWidth: 2 * s,
        borderBottomColor: '#aeaeae',
        alignItems:'center',
    },
    title: {
        flex:0.8,
        textAlign: 'left',
        left: 20 * s,
        fontSize: 12
    },
    time: {
        flex:0.2,
        textAlign: 'right',
        fontSize: 12,
        right: 40 * s
    },
    bottom:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        marginTop:25*s,
        justifyContent:'center'
    },
    btnL:{
        width:150*s,
        height:50*s,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#cc00ff',
        borderRadius:25*s,
        left:30*s
    },
    pagesNum:{
        alignItems:'center',
        paddingTop:20*s,
        marginLeft:120*s,
        marginRight:120*s
    },
    btnR:{
        width:150*s,
        height:50*s,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#cc00ff',
        borderRadius:25*s,
        right:20*s
    },  
})