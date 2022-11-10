import React from "react";
import { View, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
//import ScrollPicker from "react-native-wheel-scrollview-picker"
import Slider from "@react-native-community/slider";
import RNSpeedometer from "react-native-speedometer";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const deviceWidth = Dimensions.get("window").width;

const AttributesScreen = ({ theme, selectedWeight, selectedHeight }: AttributesProp) => {
  const { multicolors, colors } = theme;

  const SetWeightValue = (value: number) => {
    selectedWeight[1](parseFloat(value.toFixed(2)));
  };

  const CreateMeasrementScale = ({ start, end }: MesurementScaleProp) => {
    const arrScale = Array.from({ length: end - start }, (v, k) => start + k);
    const divisions = (deviceWidth - 64) / 30 + 1;
    const numberScale = Array.from({ length: divisions }, (v, k) => Math.round(start + (k * (end - start)) / 12));
    return (
      <View style={[Styles.flex1]}>
        <View style={[Styles.flexRow, Styles.flexAlignEnd, { overflow: "hidden" }]}>
          {arrScale.map((k, i) => {
            return <View key={i} style={[{ backgroundColor: colors.primary, width: 2, height: i % 5 === 0 ? 24 : 16, marginStart: i == 0 ? 2 : 4 }]}></View>;
          })}
        </View>
        <View style={[Styles.flexRow, Styles.flexAlignEnd]}>
          {numberScale.map((k, i) => {
            const v = i * 2;
            return (
              <View style={[{ width: i == 0 ? 17 : 30, height: 30, alignItems: i == 0 ? "flex-start" : "center" }]}>
                <Text key={i} variant="bodySmall" style={[]}>
                  {k}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Animatable.View animation="bounceInDown" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.flexColumn, Styles.flexAlignCenter, Styles.marginTop16]}>
          <View style={[Styles.flexAlignCenter, Styles.borderRadius16, { backgroundColor: colors.primary, elevation: 8, width: 156, height: 156 }]}>
            <View style={[Styles.width96, Styles.height64, Styles.marginTop4, Styles.borderRadius8]}>
              <RNSpeedometer value={selectedWeight[0]} size={96} minValue={50} maxValue={160} needleImage={require("../../../assets/images/speedometer-needle.png")} labels={[{ name: "", activeBarColor: multicolors.white }]} labelStyle={{ opacity: 0 }} labelNoteStyle={{ opacity: 0 }} />
            </View>
            <Text style={[Styles.flex1, Styles.flexGrow, { textAlignVertical: "center", color: multicolors.white }]} variant="headlineLarge">
              {selectedWeight[0]}
            </Text>
          </View>
          <View style={[Styles.height24, Styles.margin16, Styles.flexAlignSelfStart, { width: deviceWidth - 64 }]}>
            <CreateMeasrementScale start={50} end={160} />
          </View>
          <View style={[Styles.flex1, Styles.flexRow, Styles.flexAlignCenter, Styles.height64, Styles.marginTop16]}>
            <Slider style={[Styles.width100per, Styles.height40]} minimumValue={50} maximumValue={160} step={0.1} minimumTrackTintColor={colors.primary} thumbTintColor={colors.primary} onSlidingComplete={SetWeightValue} value={72} />
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default AttributesScreen;
