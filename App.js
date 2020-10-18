import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Icon, Header, Overlay }  from 'react-native-elements';

import SuperText from './src/widgets/superText';

const App = () => {
  const [visible,setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  const checkSupport = () => {
    if(Platform.OS === 'ios'){
      if(Platform.Version < 14 ){
        return false
      }
    } else {
      if(Platform.Version < 29){
        return false
      }
    }
    return true
  }



  return (
    <View>
      <Header
        leftComponent={
          <Icon
            name="email"
            color="#f50"
            type="entypo"
            onPress={()=> alert('open sidedrawer')}
          />
        }
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />

      { checkSupport() ?
       <Overlay isVisible={true}>
            <Text>
              { Platform.OS === 'ios' ?
                'Welcome to your ios'
              :
                'Welcome to android'
              }
            </Text>
        </Overlay>
        :
          <Overlay isVisible={true}>
            <Text>
             Sorry your app is not supported
            </Text>
        </Overlay>

      }
       

    </View>
  );
}


const styles = StyleSheet.create({
  superText:{
    backgroundColor:'blue',
    fontSize:20,
    fontWeight:"500",
    color:"white",
    padding:10,
    width:'100%'
  }
})

export default App;