import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const style = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1},
  header:{
    flexDirection: "row",
    marginTop: 12,
    // paddingHorizontal: 16,
    justifyContent: "center"
  }
  
});
