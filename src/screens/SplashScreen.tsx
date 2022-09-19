import { useEffect, useState } from "react";
import { withTheme } from "react-native-paper";
import { Image, StatusBar, View } from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { useFonts, SpecialElite_400Regular } from "@expo-google-fonts/special-elite";
import { createNavigationContainerRef } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { createAnimatableComponent } from "react-native-animatable";
import { Styles } from "../styles/styles";
import TourScreen from "./TourScreen";
import React from "react";

const AnimatableView = createAnimatableComponent(View);
interface props {
  route: any;
  navigation: any;
  theme: any;
}
export const navigationRef = createNavigationContainerRef();
const SplashScreen = ({ route, navigation, theme }: props) => {
  const { colors } = theme;

  const [isLoaded, setIsLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    SpecialElite_400Regular,
  });
  const fadeIn = {
    from: { opacity: 0 },
    to: { opacity: 1 },
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2400);
  }, [isLoaded]);

  const CreateAnimatedAlphabet = (letter: string, delay: number) => {
    return (
      <Animatable.Text animation={fadeIn} delay={delay} style={{ color: colors.primary, fontSize: 56, fontWeight: "400", fontFamily: "SpecialElite_400Regular" }}>
        {letter}
      </Animatable.Text>
    );
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[Styles.flex1]}>
      <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
      {isLoaded ? (
        <View style={[Styles.flexRow, Styles.flex1, Styles.flexJustifyCenter, Styles.flexAlignCenter]}>
          <TourScreen navigation={navigation} theme={theme} />
        </View>
      ) : (
        <View style={[Styles.flex1, Styles.flexRow, Styles.flexJustifyCenter, Styles.flexAlignCenter, Styles.width100per, { backgroundColor: colors.background, top: 0, opacity: isLoaded ? 0 : 1 }]}>
          <View style={[Styles.flexRow, Styles.height96, Styles.flexAlignCenter]}>
            {CreateAnimatedAlphabet("F", 200)}
            {CreateAnimatedAlphabet("I", 400)}
            {CreateAnimatedAlphabet("T", 600)}
            {CreateAnimatedAlphabet(" ", 600)}
            {CreateAnimatedAlphabet("M", 800)}
            {CreateAnimatedAlphabet("E", 1000)}
          </View>
          <AnimatableView animation="bounceInLeft" duration={2400} delay={500} style={[Styles.width96, Styles.height96]}>
            <Image source={require("../../assets/logo.png")} style={[Styles.width96, Styles.height96]} />
          </AnimatableView>
        </View>
      )}
    </View>
  );
};

export default withTheme(SplashScreen);
