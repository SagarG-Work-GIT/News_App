import { StyleSheet } from "react-native";
import { normalize } from "../../utils/variables";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{        
        marginTop: normalize(15),
        marginHorizontal: normalize(8)
    },
    label:{
        color: colors.grey4,
        fontWeight: 'bold',
        fontSize: normalize(12)
    },
    input:{
        fontSize: normalize(13),
        color: colors.black,
        letterSpacing: 0.2,        
        textAlignVertical: "top",       
        backgroundColor: colors.white,
        paddingLeft: normalize(5),
        maxHeight: normalize(100)
    },
    text:{
        fontSize: normalize(13),
        color: colors.black,
        letterSpacing: 0.2,    
    },
    border:{
        borderColor: colors.grey4,
        borderWidth: normalize(2),
        borderRadius: normalize(10),  
        elevation: 5   
    }
})