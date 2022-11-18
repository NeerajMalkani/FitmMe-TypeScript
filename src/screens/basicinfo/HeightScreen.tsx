import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";
import HumanBodySvg from "../../svg/humanbody";
import MeasrementScale from "../../components/common/MeasurementScale";

const HeightScreen = ({ theme, selectedHeight }: HeightProp) => {
  const { multicolors, colors } = theme;

  return (
    <Animatable.View animation="bounceInUp" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.flexColumn, Styles.flexAlignCenter, Styles.marginTop16]}>
          <HumanBodySvg />
          <MeasrementScale start={2} end={9} partitions={12} theme={theme} selectedValue={selectedHeight} />
        </View>
        <View style={[Styles.width80, Styles.height80, Styles.flexAlignCenter, Styles.flexJustifyCenter, { position: "absolute", bottom: 24, left: 24, backgroundColor: multicolors.white, elevation: 4, borderRadius: 40 }]}>
          <Text variant="titleLarge" style={[Styles.fontBold, { color: colors.primary }]}>
            {selectedHeight[0]}
          </Text>
          <Text variant="bodySmall">fts</Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default HeightScreen;
