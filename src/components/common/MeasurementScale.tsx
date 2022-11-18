import React, { useState, useRef } from "react";
import { View, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import { Styles } from "../../styles/styles";

const deviceHeight = Dimensions.get("window").height;
const scaleHeight = deviceHeight - 280;
const MeasrementScale = ({ start, end, theme, selectedValue, partitions = 5 }: MesurementScaleProp) => {
  const { colors } = theme;

  const arrSelectedValue = selectedValue[0].toString().split(".");
  const selectedValueBD = parseInt(arrSelectedValue[0]);
  const selectedValueAD = arrSelectedValue.length > 1 ? parseInt(arrSelectedValue[1]) : 0;
  const divisions = end - start;
  const scaleLineHeight = 3;

  const arrScale = Array.from({ length: divisions * partitions + 1 }, (v, k) => start + k);
  const selectedNewValue = (end - start) * partitions - ((selectedValueBD - start) * partitions + selectedValueAD);
  const marginTopValue = (scaleHeight - arrScale.length * scaleLineHeight) / arrScale.length;
  const [sliderPosition, setSliderPosition] = useState(scaleLineHeight * selectedNewValue + marginTopValue * selectedNewValue);

  const ScaleTouchMove = (value: any) => {
    if (value.nativeEvent.locationY > 10 && value.nativeEvent.locationY < scaleHeight - marginTopValue) {
      setSliderPosition(value.nativeEvent.locationY);
      const topValue = value.nativeEvent.locationY / (scaleLineHeight + marginTopValue);
      const selected = (end - start) * partitions - topValue;
      const sv = (selected / partitions + start).toFixed(2);
      const svbd = sv.split(".")[0];
      let svad = "0";
      if(parseInt(sv.split(".")[1]) > 99){
        svad = sv.split(".")[1];
      } else {
        svad = sv.split(".")[1].substring(0, 1);
      }
      console.log(svad);
      selectedValue[1](parseFloat(svbd + "." + svad));
    }
  };

  return (
    <View style={[Styles.positionAbsolute, Styles.width72, { right: 0 }]} onTouchMove={ScaleTouchMove}>
      <View pointerEvents="none" style={[Styles.flexRow, Styles.width72, Styles.height16, Styles.positionAbsolute, Styles.flexAlignCenter, { top: sliderPosition }]}>
        <View style={[Styles.width16, Styles.height16, Styles.borderRadius8, { backgroundColor: colors.primary }]}></View>
        <View style={[Styles.width100per, Styles.height4, { backgroundColor: colors.primary }]}></View>
      </View>
      <View pointerEvents="none" style={[Styles.flexColumn, Styles.flexAlignEnd, Styles.marginTop4, { height: scaleHeight }]}>
        {arrScale.map((k, i) => {
          return (
            <View key={i} style={[Styles.flexRow, Styles.flexAlignCenter, Styles.width100per, Styles.flexJustifyEnd, { height: scaleLineHeight, marginTop: i === 0 ? marginTopValue / 2 : marginTopValue, overflow: "visible" }]}>
              {i % partitions === 0 ? (
                <Text variant="labelSmall" style={[{ height: 24, marginTop: 6, marginEnd: 2 }]}>
                  {end - i / partitions}
                </Text>
              ) : null}
              <View style={[{ backgroundColor: i < selectedNewValue ? colors.textTertiary : colors.primary, height: scaleLineHeight, width: i % partitions === 0 ? 48 : 24 }]}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MeasrementScale;
