import React from "react";
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  TextInput,
} from "react-native";
import CircleButton from "../components/index";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, assets, SIZES, FONTS, SHADOWS } from "../constants";

const SignUp = ({ navigation }) => {
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
      <View style={{ marginTop: "10%" }}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraXlLarge,
            fontFamily: FONTS.bold,
          }}
        >
          Email & Password
        </Text>
        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.extraLarge,
            fontFamily: FONTS.regular,
            marginTop: "5%",
          }}
        >
           your password must have at
          least 8 characters including letters and a number{" "}
        </Text>
      </View>
      <View style={{ width: "100%", marginTop: "6%" }}>
        <View style={{ marginBottom: "6%", marginTop: "6%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            User Name
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
        <View style={{ marginBottom: "6%", marginTop: "6%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
              fontFamily: FONTS.bold,
            }}
          >
            Email
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
        <View style={{ marginBottom: "6%", marginTop: "6%" }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.extraLarge,
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
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.extraLarge,
              }}
            >
              Sign Up
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
          <Text style={{ color: COLORS.white, fontSize: SIZES.extraLarge }}>
            Already Have an Account ?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.extraLarge,
                fontWeight: "bold",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
