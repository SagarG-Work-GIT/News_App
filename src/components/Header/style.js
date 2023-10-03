import { StyleSheet } from "react-native";
import { normalize } from "../../utils/variables";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        height: normalize(50),
        flexDirection:'row',
        backgroundColor: colors.white,
        elevation: 10
    },
    flex02:{
        flex: 0.2
    },
    centerMiddle:{
        alignItems:'center',
        justifyContent:'center'
    },
    headingContainer:{
        flex:1,
        justifyContent:'center'
    },
    heading: {
        fontSize: normalize(20),
        color: colors.black,
        textAlign:'center'
    }
})