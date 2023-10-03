import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { SCREEN_WIDTH, normalize } from "../../utils/variables";


export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white
    },
    overlay: {
        position: 'absolute',
        zIndex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    imageContainer: {
        width: '100%',
        height: normalize(250),
    },
    image: {
        width: '100%',
        height: '100%'
    },    
    detailsContainer: {
        flex: 1,
        zIndex: 2,
        backgroundColor: colors.white,
        paddingTop: normalize(20),
        paddingHorizontal: normalize(10),
        marginTop: normalize(-25),
        borderTopLeftRadius: normalize(30),
        borderTopRightRadius: normalize(30)
    },
    newsDetails:{
        width: SCREEN_WIDTH,
        position: 'absolute',
        top: normalize(-25),
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: normalize(20),
        alignItems:'center',
        
    },
    details:{
        color: colors.white,
        fontSize: normalize(13),
        fontWeight: 'bold',
        letterSpacing: 0.4,
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5
    },
    titleContainer: {
        marginHorizontal: normalize(20),
        borderLeftColor: colors.green1,
        borderLeftWidth: normalize(5)
    },
    title: {
        fontSize: normalize(20),
        fontWeight: 'bold',
        color: colors.black,
        letterSpacing: 0.2,
        paddingLeft: normalize(8)
    },
    descriptionContainer: {
        marginTop: normalize(15),
        // backgroundColor:'pink',
    },
    description: {
        fontSize: normalize(14),
        color: colors.black,
        letterSpacing: 0.2,
        paddingLeft: normalize(8)
    },
   
    submitBtn:{
        backgroundColor: colors.green1,
        paddingVertical: normalize(15),        
    },
    btnText:{
        textAlign: 'center',
        color: colors.white,
        fontSize: normalize(17)
    }
})