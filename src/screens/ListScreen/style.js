import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { normalize } from "../../utils/variables";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1,
    },
    row:{
        flexDirection:'row'
    },
    totalresult:{
        fontSize: normalize(13),        
        color: colors.black,
        textAlign:'right',
        marginHorizontal: normalize(20)
    },
    itemContainer: {
        flexDirection: 'row',
        height: normalize(80),
        marginHorizontal: normalize(15),
        backgroundColor: colors.white,
        borderRadius: normalize(10),
        overflow: 'hidden',
        elevation: 10
    },
    itemDescriptor: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: normalize(20)
    },
    image: {
        width: normalize(70),
        height: '100%'
    },
    title: {
        fontSize: normalize(15),
        fontWeight: 'bold',
        color: colors.black,
    },
    author:{
        fontSize: normalize(11),
        color: colors.grey4,
        marginTop: normalize(5)
    },
    description: {
        flex: 1,
        justifyContent:'space-around',
        paddingVertical: normalize(5),
        paddingLeft: normalize(10)
    },
    source:{
        fontSize: normalize(10),
        fontWeight: 'bold',
        color: colors.red1,
    },
})