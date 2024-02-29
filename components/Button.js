import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { assets, COLORS, SHADOWS, SIZES,FONTS} from "../constants";

export const CircleButton = ({imgUrl,handelPress, ...props}) => {
  return (
   <TouchableOpacity
   style={{
    width:40,
    height:40,
    backgroundColor:COLORS.white,
    position:'absolute',
    borderRadius:SIZES.extraLarge,
    alignItems:'center',
    justifyContent:'center',
    ...SHADOWS.light,
    ...props,
   }}
   onPress={handelPress}
   >
    <Image source={imgUrl} resizeMode='contain'
    style={{height:24,width:24}}/>

   </TouchableOpacity>
  )
}

export const RecButton = ({ minWidth,fontSize, handlePress, ...props }) => {
    return (
      <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        See More
      </Text>
    </TouchableOpacity>
    )
  }