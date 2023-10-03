const { Dimensions, PixelRatio, Platform } = require("react-native");


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export  { SCREEN_WIDTH, SCREEN_HEIGHT}

export const noImageUrl = "https://thumb.ac-illust.com/73/7387030e5a5600726e5309496353969a_t.jpeg"