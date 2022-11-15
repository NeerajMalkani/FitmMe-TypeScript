import React from "react";
import { Image, View, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native-paper";
import CustomCard from "../../components/common/CustomCard";
import { Styles } from "../../styles/styles";

const GenderScreen = ({ theme, selectedGender }: GenderProp) => {
  const { multicolors } = theme;

  const CardContent = (image: any, text: string, genderOption: number) => {
    return (
      <View style={[Styles.flexAlignCenter]}>
        {selectedGender[0] === genderOption ? <Icon name="check-decagram" size={32} color={multicolors.green} style={[Styles.positionAbsolute, { top: 0, right: 0 }]} /> : null}
        <Image source={image} style={[Styles.width104, Styles.height104]} />
        <Text variant="titleMedium" style={[Styles.marginTop8]}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <Animatable.View animation="bounceInUp" duration={1000} delay={10} style={[Styles.flexColumn, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
        <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../../assets/images/man.png"), "Male", 1)} onPress={() => selectedGender[1](1)} />
        <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../../assets/images/woman.png"), "Female", 2)} onPress={() => selectedGender[1](2)} />
        <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../../assets/images/other.png"), "Other", 3)} onPress={() => selectedGender[1](3)} />
      </Animatable.View>
    </ScrollView>
  );
};

export default GenderScreen;
