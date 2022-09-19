import { LinearGradient } from "expo-linear-gradient";
import { Styles } from "../../styles/styles";
import { Text } from "react-native-paper";
import { View } from "react-native";
import React from "react";

interface props {
  theme:any
  text:string
  content:any
}
const PreLoginHeader = ({ theme, text, content }:props) => {
  const { colors, multicolors } = theme;
  return (
    <View style={[{height: 160}]}>
      {content ? content : null}
      <LinearGradient colors={[colors.primary, colors.primaryDark]} style={[Styles.width100per, Styles.flexJustifyEnd, Styles.paddingBottom24, Styles.paddingStart24, { height: 160, borderBottomRightRadius: 48 }]}>
        <Text variant="headlineLarge" style={[{ color: multicolors.white, paddingEnd: 120 }]}>
          {text}
        </Text>
      </LinearGradient>
    </View>
  );
};

export default PreLoginHeader;
