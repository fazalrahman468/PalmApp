import React from 'react';
import {View, Text, FlatList } from 'react-native';
import { style } from './Style';
import {useNavigation} from '@react-navigation/native';
import { ClipPath } from 'react-native-svg';



class Signup2 extends React.Component {
   constructor() 
   {
      super();
      this.state={
         data:[]
      }
   }
   componentDidMount() {
      this.apiCall();
   }
   async apiCall() {
      let resp = await fetch ('https://facebook.github.io/react-native/movies.json ')
      let respJson= await resp.json()
      // console.warn(respJson)    
      this.setState({data:respJson.movies})
   }
   render () {
      return (
         <View style={style.container}>
            <Text> API Call</Text>
            <FlatList 
            data={this.state.data}
            renderItem={({item}) => <Text>{item.title}</Text>}/>
         </View>
      )
   }
}

export default Signup2;