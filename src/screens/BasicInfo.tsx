import { useState } from "react";
import { Button, Text, withTheme } from "react-native-paper";
import { StatusBar, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StepIndicator from "react-native-step-indicator";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";
import React from "react";
import GenderScreen from "./basicinfo/GenderScreen";
import AttributesScreen from "./basicinfo/AttributesScreen";

const BasicInfoScreen = ({ route, navigation, theme }: ScreenProp) => {
  const { multicolors, colors } = theme;
  const [currentStep, setCurrentStep] = useState(0);

  const labels = ["Gender", "Attributes", "Goals", "Fitness"];

  const selectedGender = useState(0);
  const selectedWeight = useState(71.0);
  const selectedHeight = useState(5.0);

  const customStyles = {
    stepIndicatorSize: 12,
    currentStepIndicatorSize: 12,
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
    // labelAlign: "flex-start",
  };

  const RenderStepsIndicator = ({ stepStatus }: StepsModel) => {
    return <Icon name="checkbox-blank-circle" size={10} color={stepStatus === "current" ? multicolors.golden : colors.onPrimary} />;
  };

  const RenderStepsLabel = ({ label, stepStatus }: StepsModel) => {
    return (
      <Text variant="bodyMedium" style={{ color: stepStatus === "current" ? multicolors.golden : colors.inverseTextSecondary, marginLeft: 4 }}>
        {label}
      </Text>
    );
  };

  const StepIndicatorView = () => {
    return (
      <View style={[Styles.flexAlignSelfEnd, Styles.flexJustifyCenter, Styles.positionAbsolute, { zIndex: 2, height: 100, right: 24, marginTop: 28 }]}>
        <StepIndicator direction="vertical" customStyles={customStyles} currentPosition={currentStep} stepCount={4} labels={labels} renderStepIndicator={RenderStepsIndicator} renderLabel={RenderStepsLabel} />
      </View>
    );
  };

  const NextClick = () => {
    if (currentStep <= 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const PreviousClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const CreateSteps = () => {
    switch (currentStep) {
      case 0:
        return <GenderScreen theme={theme} selectedGender={selectedGender} />;
      case 1:
        return <AttributesScreen theme={theme} selectedWeight={selectedWeight} selectedHeight={selectedHeight} />;
      case 2:
        return null;
      case 3:
        return null;
    }
  };
  
  return (
    <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
      <PreLoginHeader theme={theme} text="What is your Gender?" content={StepIndicatorView()} />
      <ScrollView style={[Styles.flex1, { marginBottom: 58 }]} contentContainerStyle={[Styles.flex1]}>
        {CreateSteps()}
      </ScrollView>
      <View style={[Styles.width100per, Styles.flexRowReverse, Styles.flexAlignCenter, Styles.paddingHorizontal16, Styles.height56, Styles.positionAbsolute, { bottom: 0, elevation: 4, justifyContent: "space-between", backgroundColor: colors.background }]}>
        <Button mode="text" onPress={NextClick}>
          Next
        </Button>
        <Button mode="text" onPress={PreviousClick}>
          Previous
        </Button>
      </View>
    </View>
  );
};

export default withTheme(BasicInfoScreen);
