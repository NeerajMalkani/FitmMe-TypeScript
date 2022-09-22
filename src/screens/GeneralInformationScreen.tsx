import { useState } from "react";
import { Button, Text, withTheme } from "react-native-paper";
import { StatusBar, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import StepIndicator from "react-native-step-indicator";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import * as Animatable from "react-native-animatable";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";
import CustomCard from "../components/common/CustomCard";
import React from "react";

const GeneralInformationScreen = ({ route, navigation, theme }: ScreenProp) => {
  const { multicolors, colors } = theme;
  const [currentStep, setCurrentStep] = useState(0);
  const labels = ["Gender", "Attributes", "Goals", "Fitness"];
  
  const [genderSelected, setGenderSelected] = useState(0);
  const [weightValue, setWeightValue] = useState("");

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

  const CardContent = (image: any, text: string, genderOption: number) => {
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

  const NumberPicker = (data: number | string) => {
    return <Text variant="bodyLarge">{data.toString()}</Text>;
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

  const CreateSteps = () => {
    switch (currentStep) {
      case 0:
        return (
          <Animatable.View animation="bounceInUp" duration={1000} delay={10} style={[Styles.flexColumn, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
            <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/man.png"), "Male", 1)} onPress={() => setGenderSelected(1)} />
            <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/woman.png"), "Female", 2)} onPress={() => setGenderSelected(2)} />
            <CustomCard containerStyle={{ marginVertical: 8 }} content={CardContent(require("../../assets/images/other.png"), "Other", 3)} onPress={() => setGenderSelected(3)} />
          </Animatable.View>
        );
      case 1:
        return (
          <Animatable.View animation="bounceInUp" duration={1000} delay={10} style={[Styles.flexColumn, Styles.paddingVertical8, Styles.paddingHorizontal16]}>
            <View style={[Styles.width100per, Styles.paddingHorizontal16, { marginTop: 180 }]}>
              <ScrollPicker
                dataSource={["1", "2", "3", "4", "5", "6"]}
                selectedIndex={5}
                renderItem={(data) => NumberPicker(data)}
                onValueChange={(value) => {}}
                wrapperHeight={60}
                // wrapperWidth={150}
                wrapperColor={colors.background}
                itemHeight={60}
                highlightColor={colors.primary}
                highlightBorderWidth={2}
              />
            </View>
            <Text>{weightValue}</Text>
          </Animatable.View>
        );
      case 2:
        return null;
      case 3:
        return null;
    }
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

  return (
    <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
      <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
      <PreLoginHeader theme={theme} text="What is your Gender?" content={StepIndicatorView()} />
      <ScrollView style={[Styles.flex1, { marginBottom: 58 }]}>{CreateSteps()}</ScrollView>
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

export default withTheme(GeneralInformationScreen);
