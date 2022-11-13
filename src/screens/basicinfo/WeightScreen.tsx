import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import RNSpeedometer from "react-native-speedometer";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const WeightScreen = ({ theme, selectedWeight }: AttributesProp) => {
  const { multicolors, colors } = theme;

  const CreateNumberArray = (from: number, to: number) => {
    let arr = [];
    for (var i = from; i <= to; i++) {
      arr.push(i.toString());
    }
    return arr;
  };

  const NumberPicker = (data: number | string) => {
    return (
      <Text variant="headlineLarge" style={{ color: multicolors.white }}>
        {data.toString()}
      </Text>
    );
  };

  const onWeightChange = (value: string | number) => {
    let newWeight = 0;
    newWeight = parseFloat(value + "." + selectedWeight[0].toString().split(".")[1]);
    selectedWeight[1](newWeight);
  };

  const onWeightChangeDecimal = (value: string | number) => {
    let newWeight = 0;
    newWeight = parseFloat(selectedWeight[0].toString().split(".")[0] + "." + value);
    selectedWeight[1](newWeight);
  };

  const SetWeightValue = (value: number) => {
    selectedWeight[1](parseFloat(value.toFixed(2)));
  };

  return (
    <Animatable.View animation="bounceInDown" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8]}>
      <View style={[Styles.flex1, Styles.flexAlignCenter, Styles.flexJustifyCenter]}>
        <View style={[Styles.flexColumn, Styles.flexAlignCenter]}>
          <View style={[Styles.flexAlignCenter, Styles.borderRadius16, { backgroundColor: colors.primary, elevation: 8, width: "80%", height: "72%" }]}>
            <View style={[Styles.marginTop4, Styles.borderRadius8]}>
              <RNSpeedometer value={selectedWeight[0]} size={160} minValue={30} maxValue={240} needleImage={require("../../../assets/images/speedometer-needle.png")} labels={[{ name: "", activeBarColor: multicolors.white }]} labelStyle={{ opacity: 0 }} labelNoteStyle={{ opacity: 0 }} />
            </View>
            <View style={[Styles.flex1, Styles.flexAlignCenter, Styles.flexJustifyCenter, Styles.paddingHorizontal24]}>
              <View style={[Styles.flexRow, Styles.height80]}>
                <View style={[Styles.flex1]}>
                  <ScrollPicker dataSource={CreateNumberArray(30, 240)} selectedIndex={selectedWeight[0] - 30} renderItem={(data) => NumberPicker(data)} onValueChange={onWeightChange} wrapperHeight={80} wrapperColor={colors.primary} itemHeight={80} highlightColor={multicolors.white} highlightBorderWidth={2} />
                </View>
                <View style={[Styles.flex1, Styles.marginStart16]}>
                  <ScrollPicker dataSource={CreateNumberArray(0, 9)} selectedIndex={0} renderItem={(data) => NumberPicker(data)} onValueChange={onWeightChangeDecimal} wrapperHeight={80} wrapperColor={colors.primary} itemHeight={80} highlightColor={multicolors.white} highlightBorderWidth={2} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[Styles.width80, Styles.height80, Styles.flexAlignCenter, Styles.flexJustifyCenter, { position: "absolute", bottom: 24, left: 24, backgroundColor: colors.primary, elevation: 4, borderRadius: 40 }]}>
          <Text variant="titleLarge" style={{ color: multicolors.white }}>
            {selectedWeight[0]}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default WeightScreen;
