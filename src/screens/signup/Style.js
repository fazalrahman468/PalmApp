import {StyleSheet} from 'react-native';
import Colors from '../../assets/colors/Colors';

export const style = StyleSheet.create({
  container: {backgroundColor: Colors.primary, flex: 1,},
  header:{
    marginTop: 24,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12
  },
  verify:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  g:{
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: Colors.white,
  },
  account:{
    fontSize: 20,
    fontFamily: 'Inter-Medium',
    textAlign: "center",
    marginTop: 16,
    color: Colors.white
     
  },
  google:{
    backgroundColor: Colors.white,
    paddingVertical: 14,
    paddingHorizontal: '18%',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  googleText:{
    color: Colors.black,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  apple:{
    backgroundColor: Colors.black,
    paddingVertical: 14,
    paddingHorizontal: '20%',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  appleText:{
    color: Colors.white,
    fontSize: 16,
    fontFamily: 'Inter-SemiBold'
  },
  using:{
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.white,
    marginTop: 24,
    textAlign: "center"

  },
  box:{
    backgroundColor: Colors.white,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20
  },
  john:{
    backgroundColor: Colors.strokeWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 12,
  }, 
  doe:{
    paddingLeft: 12, 
    backgroundColor: Colors.strokeWhite, 
    borderRadius: 12, 
    marginLeft: 14
  },
  phone:{
    backgroundColor: Colors.strokeWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 12,
    marginTop: 12
},
genView:{
marginTop: 12,
paddingHorizontal: 6,
alignItems: "center",
justifyContent: "space-around",
flexDirection: "row" 
},
gen:{
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.black,
    width: "60%"
}, 
genCon:{
    flexDirection: "row", 
    backgroundColor: Colors.strokeWhite, 
    borderRadius: 24, 
    width: '45%',
    height: 48,
    justifyContent: 'space-evenly',
    alignItems: "center"
},
male:{
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius: 12,
},
femaleStyle:{
  alignItems: "center", 
  justifyContent: "center", 
  borderRadius: 12,
},
maleText:{
    color: Colors.black, 
    fontSize: 14,
    fontFamily: 'Inter-Medium',
},
femaleText:{
    color: Colors.black, 
    fontSize: 14,
    fontFamily: 'Inter-Medium'
},
  
});
