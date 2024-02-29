import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { COLORS, assets, SIZES, FONTS, SHADOWS } from "../constants";
import { FocusedStatusBar } from "../components";
import * as ImagePicker from "expo-image-picker";

const CreateBlog = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
          Add New Book
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
            Book Name :
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
            Author :
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
            Cover Image :
          </Text>
          <TouchableOpacity onPress={pickImage}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: COLORS.white,
                borderRadius: 15,
                marginTop: "3%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: 150, height: 150, borderRadius: 15 }}
                />
              ) : (
                <Image
                  source={assets.img}
                  style={{ height: "30%", width: "30%" }}
                />
              )}
            </View>
          </TouchableOpacity>
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
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                color: COLORS.primary,
                fontSize: SIZES.extraLarge,
                fontWeight: "600",
              }}
            >
              post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateBlog;
