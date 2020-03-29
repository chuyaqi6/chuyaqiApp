import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,Image, Modal, Button, BackHandler,ToastAndroid, AsyncStorage } from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox,Overlay,Actions} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home'
import Userinfor from './src/userinfor/Userinfor'
import Goods from './src/goods/Goods';
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Register from './src/common/Register';
import Publish from './src/userinfor/Publish';
console.disableYellowBox = true;

const styles = StyleSheet.create({
  
});
const App = () => {
  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  let now = 0;
  let init = ()=>{
    AsyncStorage.getItem('isInstall')
    .then(res=>{
      if(res){
        setInstall(false);
      }
    })
    AsyncStorage.getItem('user')
    .then(res=>{
      let user = JSON.parse(res)
      if(!user){
        SplashScreen.hide();
      }
      if(user&&user.token){
        setLogin(true);
        SplashScreen.hide();
      }
    })
  }
  useEffect(()=>{
    init();
  },[])
  let afterInstall = ()=>{
    console.log('after install')
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}}>
        <SwiperPage afterInstall = {afterInstall}/>
      </View>
  }
  return (
    <Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
      <Overlay>
        <Modal key="modal" hideNavBar>
          <Lightbox key="lightbox">
            <Drawer
              key="drawer"
              contentComponent={()=><Text>drawer</Text>}
              drawerIcon={()=><Icon name="menu"/>}
              drawerWidth={400}
            >
              <Scene key="root">
                <Tabs key='tabbar'
                  hideNavBar
                  activeTintColor='#cc00ff'
                  inactiveTintColor="gray"
                  tabBarStyle={{backgroundColor:'#fff'}}
                >
                  {/* 首页 */}
                  <Scene key='homePage'
                    title='首页'
                    icon={
                      ({focused})=><Icon 
                        color={focused?'#cc00ff':'gray'} 
                        name="home"
                      />
                    }
                  >
                    <Scene
                      key="home"
                      hideNavBar
                      component={Home}/>
                  </Scene>
                  {/* 商品分类 */}
                  <Scene key='goodsPage'
                    title='商品分类'
                    icon={
                      ({focused})=><Icon 
                        color={focused?'#cc00ff':'gray'} 
                        name="appstore"
                      />
                    }
                  >
                    <Scene 
                    hideDrawerButton
                    hideNavBar
                    key="goods" component={Goods}/>
                  </Scene>
                  {/* 个人中心 */}
                  <Scene key='userPage'
                    title='个人中心'
                    hideDrawerButton
                    icon={
                      ({focused})=><Icon 
                        color={focused?'#cc00ff':'gray'} 
                        name="user"
                      />
                    }
                  >
                    <Scene
                    key="userinfor"
                    hideNavBar
                    component={Userinfor}/>
                    <Scene
                    key='publish'
                    hideNavBar
                    component={Publish}/>
                  </Scene>
                </Tabs>
              </Scene>
            </Drawer>
          </Lightbox>
          <Scene initial={!isLogin} key="login" component={Login}/>
          <Scene key="register" component={Register}/>
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
