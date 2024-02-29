import React from 'react'
import { Text,View,SafeAreaView,Image,StatusBar,FlatList } from "react-native";
import { COLORS, SHADOWS, SIZES, FONTS, NFTData,assets } from "../constants";
import { HomeHeader, FocusedStatusBar, CircleButton,RecButton,DetailsDesc,DetailsBid,SubInfo} from "../components";
import { TouchableOpacity } from 'react-native-gesture-handler';



const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

<View>
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <CircleButton
          imgUrl={assets.left}
          handlePress={() => {}}
          left={15}
          bottom={StatusBar.currentHeight+270}
        />

    </TouchableOpacity>
   
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      bottom={StatusBar.currentHeight + 270}
    />
</View>

  
  </View>
);


const Details = ({route,navigation}) => {

  const {data} =route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        transLucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.large,
            borderRadius: SIZES.extraLarge,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: COLORS.white,
              textAlign: "center",
              fontSize:SIZES.large,
            }}
          >
            Edit Details
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default Details
