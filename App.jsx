import React, { useState } from 'react'
import { Button, Text,  View, StyleSheet, StatusBar } from 'react-native'
const App = () => {
  const[hide,setHide]=useState(false)
  const[barStyle,setbarStyle]=useState("default")
  const toggleBarStyle = () => {
    setbarStyle(prevStyle => (prevStyle === "default" ? "dark-content" : "default"));
  }
  
  return (
    <View >
      <StatusBar backgroundColor='red'
        barStyle={barStyle}
        hidden={hide}
      />
      <Button title='toggle status bar' onPress={()=>setHide(!hide)}/>
      <Button title='toggle style bar' onPress={toggleBarStyle}/>

    </View>
  )
}




export default App
