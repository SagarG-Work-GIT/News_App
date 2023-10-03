import { ToastAndroid, Platform } from 'react-native'

export const showToast = (message) => {
    if (Platform.OS === 'android') {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }else{
        alert(message)
    }
}