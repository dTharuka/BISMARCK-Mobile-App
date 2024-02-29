import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import {FocusedStatusBar} from "../components";
import { COLORS, assets, SIZES, FONTS, SHADOWS } from "../constants";

const SignIn = ({navigation}) => {
    const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#00A9FF",
        paddingHorizontal: SIZES.medium,
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
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Image source={assets.left} style={{ height: "50%", width: "50%" }} />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: "14%" }}>
        {/* <Image source={assets.logo} resizeMode="contain" /> */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraXlLarge,
            fontFamily: FONTS.bold,
            textAlign: "center",
            marginTop: "15%",
          }}
        >
          Sign In
        </Text>
      </View>
      <View style={{ width: "100%", marginTop: "6%" }}>
        <View style={{ marginBottom: "6%", marginTop: "6%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.large,
              fontFamily: FONTS.bold,
            }}
          >
            Email
          </Text>
          <TextInput
            style={{
              width: "100%",
              borderBottomWidth: 1,
              fontSize: SIZES.large,
              borderBottomColor: "gray",
              color: COLORS.white,
            }}
            // placeholder="Enter your email"
          />
        </View>
        <View style={{ marginBottom: "6%", marginTop: "6%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.large,
              fontFamily: FONTS.bold,
            }}
          >
            Password
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "8%",
          }}
        >
          <TouchableOpacity
            style={{
              width: 17,
              height: 17,
              borderWidth: 1,
              borderColor: "gray",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "3%",
            }}
            onPress={() => setRememberMe(!rememberMe)}
          >
            {rememberMe ? <Text>✓</Text> : <Text>◻️</Text>}
          </TouchableOpacity>
          <Text
            style={{
              marginRight: "auto",
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            Remember Me
          </Text>
          <Text
            style={{
              marginLeft: "auto",
              fontSize: SIZES.large,
              color: COLORS.white,
            }}
          >
            Forgot Password?
          </Text>
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
              marginTop: "12%",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.extraLarge,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "9%",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: SIZES.large }}>
            Already Haven't an Account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.extraLarge,
                fontWeight: "bold",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn