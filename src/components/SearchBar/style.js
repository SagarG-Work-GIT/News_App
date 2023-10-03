import { StyleSheet } from "react-native";
import { normalize } from "../../utils/variables";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
       height: normalize(45),
       marginHorizontal: normalize(10),
       flexDirection:'row',
       borderColor: colors.grey2,
       borderWidth: normalize(2),
       borderRadius: normalize(30),
       overflow:'hidden'
    },
    textInput: {
        flex:1,
        paddingLeft: normalize(15),
        fontSize:normalize(12),
        letterSpacing: 0.5
    },
    btn:{
        justifyContent:'center',
        padding: normalize(10),
        paddingHorizontal: normalize(15)
    }
})