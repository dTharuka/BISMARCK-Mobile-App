import { View, Text,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES} from "../constants";
import { useNavigation } from "@react-navigation/native";


const HomeHeader = ({ onSearch}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the desired screen
    navigation.navigate("CreateBlog");
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              backgroundColor: COLORS.white,
              marginTop: "8%",
              marginLeft: "2%",
              borderRadius: 25,
              justifyContent: "center",
            }}
            onPress={handlePress}
          >
            <Image
              source={assets.edit}
              style={{ height: "50%", width: "50%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.large,
            color: COLORS.white,
          }}
        >
          Hello, Dakshina
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's Find a Enteraintment
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Blog"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader