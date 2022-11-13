import React from "react";
import { View, Dimensions } from "react-native";
import * as Animatable from "react-native-animatable";
import Slider from "@react-native-community/slider";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";
import HumanBodySvg from "../../svg/humanbody";

const deviceHeight = Dimensions.get("window").height;

const HeightScreen = ({ theme, selectedHeight }: AttributesProp) => {
  const { multicolors, colors } = theme;

  const CreateMeasrementScale = ({ start, end }: MesurementScaleProp) => {
    const arrScale = Array.from({ length: (end - start) * 10 + 1 }, (v, k) => start + k);
    const divisions = 9;
    const numberScale = Array.from({ length: divisions }, (v, k) => k + 1);
    const selectedHeightValue = 80 - parseInt(selectedHeight[0].toString().split(".")[0]) * 10 + (10 - parseInt(selectedHeight[0].toString().split(".")[1] ? selectedHeight[0].toString().split(".")[1] : 0));
    return (
      <View style={[Styles.flexRow, { position: "absolute", right: 0 }]}>
        <View style={[Styles.flexColumn, Styles.flexAlignEnd]}>
          {numberScale.reverse().map((k, i) => {
            return (
              <View key={i} style={[Styles.marginEnd4, { height: 16, alignItems: "flex-end", marginTop: i === 0 ? 6 : 52 + i * 0.5 }]}>
                <Text variant="bodySmall" style={[]}>
                  {k}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={[Styles.flexColumn, Styles.flexAlignEnd, Styles.marginTop4, { height: deviceHeight - 280 }]}>
          {arrScale.map((k, i) => {
            return <View key={i} style={[{ backgroundColor: i < selectedHeightValue ? colors.textTertiary : colors.primary, height: 3, width: i % 10 === 0 ? 56 : i % 5 === 0 ? 48 : 32, marginTop: (deviceHeight - 280 - arrScale.length * 3) / arrScale.length }]}></View>;
          })}
        </View>
      </View>
    );
  };

  return (
    <Animatable.View animation="bounceInDown" duration={1000} delay={10} style={[Styles.flexColumn, Styles.flex6, Styles.paddingVertical8]}>
      <View style={[Styles.flex1]}>
        <View style={{ transform: [{ rotate: "-90deg" }], position: "absolute", top: deviceHeight - 560, right: -260, zIndex: 2, opacity: 0 }}>
          <Slider
            style={{ width: deviceHeight - 280, height: 40 }}
            value={selectedHeight[0]}
            minimumValue={1}
            maximumValue={9}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={(value: number) => {
              selectedHeight[1](parseFloat(value.toFixed(1)));
            }}
          />
        </View>
        <View style={[Styles.flexColumn, Styles.flexAlignCenter, Styles.marginTop16]}>
          <HumanBodySvg />
          <CreateMeasrementScale start={1} end={9} />
        </View>
        <View style={[Styles.width80, Styles.height80, Styles.flexAlignCenter, Styles.flexJustifyCenter, { position: "absolute", bottom: 24, left: 24, backgroundColor: colors.primary, elevation: 4, borderRadius: 40 }]}>
          <Text variant="titleLarge" style={{ color: multicolors.white }}>
            {selectedHeight[0]}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default HeightScreen;
