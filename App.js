import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Icon, Header, Overlay }  from 'react-native-elements';

import SuperText from './src/widgets/superText';

const App = () => {
  const [visible,setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
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

      <SuperText style={{ backgroundColor:'red'}}>
        Hello this is my reusable component
      </SuperText>
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