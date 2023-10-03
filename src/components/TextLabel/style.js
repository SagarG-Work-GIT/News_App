import { StyleSheet } from "react-native";
import { normalize } from "../../utils/variables";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    linkBtn:{

    },
    label:{
        fontSize: normalize(12),
        fontWeight:'bold',
        color: colors.grey5,
        letterSpacing: 0.5,
        paddingLeft: normalize(8)
    }
})