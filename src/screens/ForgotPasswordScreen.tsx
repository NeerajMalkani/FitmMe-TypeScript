import { withTheme } from "react-native-paper";
import { StatusBar, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Styles } from "../styles/styles";
import PreLoginHeader from "../components/common/PreLoginHeader";
import React from "react";

interface props {
  route:any
  navigation:any
  theme:any
}
const ForgotPasswordScreen = ({ route, navigation, theme }:props) => {
  const { colors } = theme;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Forgot Password" content={undefined} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(ForgotPasswordScreen);
