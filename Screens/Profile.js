import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from 'react'
import { COLORS, assets, SIZES, FONTS, SHADOWS } from "../constants";
import { FocusedStatusBar } from "../components";
const Profile = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        transLucent={true}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: "3%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              alignItems: "center",
              backgroundColor: COLORS.white,
              marginTop: "8%",
              marginLeft: "2%",
              borderRadius: 25,
              justifyContent: "center",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              source={assets.left}
              style={{ height: "50%", width: "50%" }}
            />
          </TouchableOpacity>
        </View>
       
      </View>
      <View>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraXlLarge,
            fontFamily: FONTS.bold,
            textAlign: "center",
            marginTop: "2%",
          }}
        >
          Edit Blog
        </Text>
      </View>
      <View style={{ width: "100%", marginTop: "3%" }}>
        <View style={{ marginBottom: "2%", marginTop: "2%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            Blog Title :
          </Text>
          <TextInput
            style={{
              width: "100%",
              borderBottomWidth: 1,
              fontSize: SIZES.extraLarge,
              borderBottomColor: "gray",
              color: COLORS.white,
            }}
            // placeholder="Enter your email"
          />
        </View>
        <View style={{ marginBottom: "2%", marginTop: "2%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            Creator :
          </Text>
          <TextInput
            style={{
              width: "100%",
              borderBottomWidth: 1,
              fontSize: SIZES.extraLarge,
              borderBottomColor: "gray",
              color: COLORS.white,
            }}
            // placeholder="Enter your email"
          />
        </View>
       
        <View style={{ marginBottom: "2%", marginTop: "2%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            Description :
          </Text>
          <TextInput
            style={{
              width: "100%",
              height: 110,
              borderWidth: 1,
              fontSize: SIZES.extraLarge,
              borderColor: "gray",
              color: COLORS.white,
              marginTop: "2%",
            }}
            // placeholder="Enter your email"
          />
        </View>
        <View style={{ marginBottom: "2%", marginTop: "2%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            Blog Image :
          </Text>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: COLORS.white,
              borderRadius: 15,
              marginTop: "3%",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <Image
              source={assets.img}
              style={{ height: "30%", width: "30%" }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.extraXlLarge,
              alignItems: "center",
              justifyContent: "center",
              ...SHADOWS.light,
              marginTop: "10%",
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.extraLarge,
                fontWeight:'600'
              }}
            >
              Update
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile