import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

  constructor(){
    super();
    this.state = {weatherData:''}
  }

  componentDidMount(){
    this.getWeather()
  }
  getWeather=async()=>{
    var url='https://fcc-weather-api.glitch.me/api/current?lat=26.2030&lon=50.5951'
    fetch(url)
    .then((response)=>response.json())
    .then(responseJson=>{
      this.setState({
        weatherData:responseJson
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render(){
    if(this.state.weatherData==undefined){
      return(
        <Text>Loading.....</Text>
      )
    }
    else{
      
    console.log(this.state.weatherData.main.temp)
    return(
      <Text>Hello</Text>
    )
    }
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
