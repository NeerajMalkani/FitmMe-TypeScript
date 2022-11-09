import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
//import ScrollPicker from "react-native-wheel-scrollview-picker"
import Slider from "@react-native-community/slider";
import RNSpeedometer from "react-native-speedometer";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const AttributesScreen = ({ theme, selectedWeight, selectedHeight }: AttributesProp) => {
  const { multicolors, colors } = theme;

  const SetWeightValue = (value: number) => {
    selectedWeight[1](parseFloat(value.toFixed(2)));
  };

  const CreateMeasrementScale = ({start, end, divisions}: MesurementScaleProp) => {
    const arrScale = Array.from({length:(end - start)},(v,k)=>start+k);
    return (
      <View style={[Styles.flexRow, Styles.flex1, Styles.paddingHorizontal32, Styles.flexAlignEnd]}>
        {arrScale.map((i, k) => {
            return(
              <View key={i} style={[Styles.width1, Styles.marginStart4, { backgroundColor: colors.text, height: i % 5 === 0 ? 24 : 16 }]}></View>
            )
        })}
      </View>
    )
  };

  return (
    <Animatable.View animation="bounceInDown" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
      <View style={[Styles.flex1]}>
        <View style={[Styles.flexColumn, Styles.flexAlignCenter, Styles.marginTop16]}>
          <View style={[Styles.flexAlignCenter, Styles.borderRadius16, { backgroundColor: colors.primary, elevation: 8, width: 156, height: 156 }]}>
            <View style={[Styles.width96, Styles.height64, Styles.marginTop4, Styles.borderRadius8]}>
              <RNSpeedometer value={selectedWeight[0]} size={96} minValue={50} maxValue={160} needleImage={require("../../../assets/images/speedometer-needle.png")} labels={[{ name: "", activeBarColor: multicolors.white }]} labelStyle={{ opacity: 0 }} labelNoteStyle={{ opacity: 0 }} />
            </View>
            <Text style={[Styles.flex1, Styles.flexGrow, { textAlignVertical: "center", color: multicolors.white}]} variant="headlineLarge">{selectedWeight[0]}</Text>
          </View>
          <View style={[Styles.flex1, Styles.flexRow, Styles.flexAlignCenter, Styles.height64, Styles.marginTop32]}>
            <Slider style={[Styles.width100per, Styles.height40]} minimumValue={50} maximumValue={160} step={0.1} minimumTrackTintColor={colors.primary} thumbTintColor={colors.primary} onSlidingComplete={SetWeightValue} value={72} />
          </View>
          <View style={[Styles.height24, Styles.marginTop16, Styles.marginStart16, Styles.flexAlignSelfStart, { backgroundColor: "red"}]}>
              <CreateMeasrementScale start={30} end={50} divisions={15}/>
            </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default AttributesScreen;
