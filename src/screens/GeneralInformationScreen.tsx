import { useState } from "react";
import { Text, withTheme } from "react-native-paper";
import { StatusBar, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createAnimatableComponent } from "react-native-animatable";
import StepIndicator from "react-native-step-indicator";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";
import CustomCard from "../components/common/CustomCard";
import React from "react";

const AnimatableView = createAnimatableComponent(View);
interface props {
  route:any
  navigation:any
  theme:any
}
const GeneralInformationScreen = ({ route, navigation, theme }:props) => {
  const { multicolors, colors } = theme;
  const [currentStep, setCurrentStep] = useState(0);
  const [genderSelected, setGenderSelected] = useState(0);
  const labels = ["Gender", "Attributes", "Goals", "Fitness"];
  const customStyles = {
    stepIndicatorSize: 12,
    currentStepIndicatorSize: 20,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 0,
    stepStrokeCurrentColor: "#ffffff",
    stepStrokeFinishedColor: "#ffffff",
    stepStrokeUnFinishedColor: "#ffffff",
    separatorFinishedColor: "#ffffff",
    separatorUnFinishedColor: "#ffffff",
    stepIndicatorFinishedColor: "#ffffff",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorCurrentColor: "#ffffff",
    labelAlign: "flex-start",
  };

  const CardContent = (image:any, text:string, genderOption:number) => {
    return (
      <View style={[Styles.flexAlignCenter]}>
        {genderSelected === genderOption ? <Icon name="check-decagram" size={32} color={multicolors.green} style={[Styles.positionAbsolute, { top: 0, right: 0 }]} /> : null}
        <Image source={image} style={[Styles.width104, Styles.height104]} />
        <Text variant="titleMedium" style={[Styles.marginTop8]}>
          {text}
        </Text>
      </View>
    );
  };
  interface renderStepsProps {
    label: string
    stepStatus:string
  }
  return (
    <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
      <PreLoginHeader
        theme={theme}
        text="What is your Gender?"
        content={
          <View style={[Styles.flexAlignSelfEnd, Styles.flexJustifyCenter, Styles.positionAbsolute, { zIndex: 2, height: 100, right: 12, marginTop: 28 }]}>
            <StepIndicator
              direction="vertical"
              customStyles={customStyles}
              currentPosition={currentStep}
              stepCount={4}
              labels={labels}
              renderStepIndicator={({ stepStatus }: renderStepsProps) => {
                return <Icon name="checkbox-blank-circle" size={stepStatus === "current" ? 16 : 10} color={colors.primary} />;
              }}
              renderLabel={({ label, stepStatus }: renderStepsProps) => {
                return (
                  <Text variant={stepStatus === "current" ? "labelLarge" : "bodySmall"} style={{ color: stepStatus === "current" ? colors.onPrimary : colors.inverseTextSecondary, marginLeft: 4 }}>
                    {label}
                  </Text>
                );
              }}
            />
          </View>
        }
      />
      <View style={[Styles.flex1]}>
        <AnimatableView animation="bounceInRight" duration={1000} delay={10} style={[Styles.flexColumn, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
          <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/man.png"), "Male", 1)} onPress={() => setGenderSelected(1)} />
          <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/woman.png"), "Female", 2)} onPress={() => setGenderSelected(2)} />
          <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/other.png"), "Other", 3)} onPress={() => setGenderSelected(3)} />
        </AnimatableView>
      </View>
    </View>
  );
};

export default withTheme(GeneralInformationScreen);
