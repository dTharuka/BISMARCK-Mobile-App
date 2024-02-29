import { View, Image,Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { assets, COLORS, SHADOWS, SIZES} from "../constants";
import {CircleButton,RecButton } from "./Button";
import { NFTTitle, } from "./SubInfo";


const NFTCard = ({data}) => {
const navigation = useNavigation();


  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.remove} right={10} top={10} />
      </View>
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RecButton
            minWidth={120}
            fontSize={SIZES.font}
            // handlePress={() => navigation.navigate("Details", { data })}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
}

export default NFTCard