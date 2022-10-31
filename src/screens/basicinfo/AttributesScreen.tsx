import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import RNSpeedometer from "react-native-speedometer";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const AttributesScreen = ({ theme, selectedWeight, selectedHeight }: AttributesProp) => {
  const { multicolors, colors } = theme;

  const CreateNumberArray = (from: number, to: number) => {
    let arr = [];
    for (var i = from; i <= to; i++) {
      arr.push(i.toString());
    }
    return arr;
  };

  const NumberPicker = (data: number | string) => {
    return <Text variant="bodyLarge">{data.toString()}</Text>;
  };

  return (
    <Animatable.View animation="bounceInDown" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.flexRow, Styles.flexAlignCenter, Styles.marginTop16]}>
          <View style={[Styles.flex1, Styles.flexRow, Styles.flexAlignCenter, Styles.paddingEnd16, { height: 64 }]}>
            <View style={[Styles.flex1]}>
              <ScrollPicker
                dataSource={CreateNumberArray(30, 240)}
                selectedIndex={41}
                renderItem={(data) => NumberPicker(data)}
                onValueChange={(value) => {
                  let newWeight = 0;
                  newWeight = parseFloat(value + "." + selectedWeight[0].toString().split(".")[1]);
                  selectedWeight[1](newWeight);
                }}
                wrapperHeight={64}
                wrapperColor={colors.background}
                itemHeight={64}
                highlightColor={colors.primary}
                highlightBorderWidth={2}
              />
            </View>
            <View style={[Styles.flex1, Styles.marginStart16]}>
              <ScrollPicker
                dataSource={CreateNumberArray(0, 9)}
                selectedIndex={0}
                renderItem={(data) => NumberPicker(data)}
                onValueChange={(value) => {
                  let newWeight = 0;
                  newWeight = parseFloat(selectedWeight[0].toString().split(".")[0] + "." + value);
                  selectedWeight[1](newWeight);
                }}
                wrapperHeight={64}
                wrapperColor={colors.background}
                itemHeight={64}
                highlightColor={colors.primary}
                highlightBorderWidth={2}
              />
            </View>
          </View>
          <View style={[Styles.width104, Styles.height104, Styles.flexAlignCenter, Styles.borderRadius16, { backgroundColor: colors.primary, elevation: 8 }]}>
            <View style={[Styles.width48, Styles.height32, Styles.marginTop4, Styles.borderRadius8, { backgroundColor: multicolors.white }]}>
              <RNSpeedometer value={selectedWeight[0]} size={48} minValue={30} maxValue={240} labels={[{ name: "", activeBarColor: colors.primary }]} labelStyle={{ opacity: 0 }} labelNoteStyle={{ opacity: 0 }} />
            </View>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default AttributesScreen;
