import Slider from "@react-native-community/slider";
import React from "react";
import { View, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const deviceWidth = Dimensions.get("window").width;

const FitnessScreen = ({ theme, selectedFitness }: FitnessProp) => {
  const { multicolors, colors } = theme;

  return (
    <Animatable.View animation="bounceInUp" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flexJustifyCenter, Styles.flex1]}>
      <View style={[Styles.flexColumn, { marginTop: -80 }]}>
        <View style={[Styles.paddingHorizontal16]}>
          <Text variant="headlineSmall" style={[Styles.textCenter]}>
            I
            <Text variant="headlineSmall" style={[Styles.fontBold, { color: colors.primary }]}>
              {selectedFitness[0] === 1 ? " never " : selectedFitness[0] === 2 ? " occassionally " : selectedFitness[0] === 3 ? " consistently " : " intensely "}
            </Text>
            exersice to keep myself fit and healthy.
          </Text>
        </View>
        <View style={[Styles.flex1, Styles.flexAlignCenter, Styles.flexJustifyCenter, Styles.marginTop32]}>
          <View style={[Styles.flex1, Styles.flexColumn, Styles.width100per, Styles.flexAlignCenter]}>
            <View style={[Styles.width100per, Styles.flexAlignCenter, Styles.height40, Styles.flexJustifyCenter]}>
              <Slider style={[{ width: "90%", height: 40 }]} value={selectedFitness[0]} minimumValue={1} maximumValue={4} step={1} thumbImage={require("../../../assets/images/thumbImage.png")} thumbTintColor={multicolors.white} minimumTrackTintColor={colors.primary} maximumTrackTintColor={colors.primary} onValueChange={(value: number) => selectedFitness[1](value)} />
              <View style={[Styles.flex1, Styles.flexGrow, Styles.height24, Styles.positionAbsolute, Styles.marginHorizontal32, Styles.borderRadius16, { width: deviceWidth - 72, backgroundColor: colors.primary, zIndex: -1 }]}></View>
            </View>
            <View style={[Styles.flexRow, Styles.width100per, Styles.height40, Styles.paddingHorizontal16, Styles.marginTop12]}>
              <View style={[Styles.flex1]}>
                <Text variant="titleMedium" style={{ color: colors.primaryDark }}>
                  Never
                </Text>
              </View>
              <View style={[Styles.flex1]}>
                <Text variant="titleMedium" style={{ color: colors.primaryDark }}>
                  Occasional
                </Text>
              </View>
              <View style={[Styles.flex1, Styles.flexAlignEnd]}>
                <Text variant="titleMedium" style={{ color: colors.primaryDark }}>
                  Consistent
                </Text>
              </View>
              <View style={[Styles.flex1, Styles.flexAlignEnd]}>
                <Text variant="titleMedium" style={{ color: colors.primaryDark }}>
                  Intense
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default FitnessScreen;
