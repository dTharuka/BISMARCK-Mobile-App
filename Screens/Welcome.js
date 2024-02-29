import { View, Text,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {FocusedStatusBar} from "../components";
import { assets,COLORS,SIZES,FONTS,SHADOWS} from "../constants";

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        transLucent={true}
      />

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "46%",
        }}
      >
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.extraXlLarge,
            fontFamily: FONTS.bold,
            textAlign: "center",
          }}
        >{`Explore the\n Digital World`}</Text>
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.medium,
            textAlign: "center",
            paddingTop: SIZES.small,
          }}
        >
          {`Your Blog is your Networking Tool`}
        </Text>
        <TouchableOpacity
          style={{
            width: 150,
            height: 50,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.extraXlLarge,
            alignItems: "center",
            justifyContent: "center",
            ...SHADOWS.light,
            marginTop: "12%",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: SIZES.extraLarge,
            }}
          >
            Get Start
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={assets.Ellipse1}
          style={{
            width: 360,
            height: 360,
            position: "absolute",
            top: 280,
            right: "50%",
          }}
        />
        <Image
          source={assets.Ellipse2}
          style={{
            width: 260,
            height: 260,
            position: "absolute",
            top:'20%'
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Welcome