import { useEffect, useRef, useState } from "react";
import { Button, Text, TextInput, withTheme } from "react-native-paper";
import { View, BackHandler, StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PreLoginHeader from "../components/common/PreLoginHeader";
import { Styles } from "../styles/styles";
import CustomTextBox from "../components/uielements/TextBox";
import SocialIcons from "../components/uielements/SocialIcons";

const LoginScreen = ({ route, navigation, theme }) => {
  const { colors } = theme;
  const [userID, setUserID] = useState("");
  const [userIDError, setUserIDError] = useState(false);
  const userIDRef = useRef();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const passwordRef = useRef();
  let isBack = true;
  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      if (isBack) {
        BackHandler.exitApp();
      }
    });
    return unsubscribe;
  }, [navigation]);

  const onUserIDChanged = (text) => {
    setUserID(text);
  };

  const onPasswordChanged = (text) => {
    setPassword(text);
  };

  const PasswordMaskIcon = () => {
    return <TextInput.Icon icon={secureTextEntry ? "eye" : "eye-off"} color={colors.onBackground} size={24} onPress={() => setSecureTextEntry(!secureTextEntry)} />;
  };

  const ValidateLogin = () => {
    isBack = false;
    navigation.navigate("GeneralInformation");
  };

  const ForgotPassword = () => {};

  const GoogleLogin = () => {};

  const FacebookLogin = () => {};

  const SignUp = () => {
    isBack = false;
    navigation.navigate("Signup");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Login to FitMe" />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} keyboardShouldPersistTaps="handled">
          <View style={[Styles.flex1, Styles.marginTop32]}>
            <View style={[Styles.flex1, Styles.padding16, Styles.width100per]}>
              <CustomTextBox props={{ tbRef: userIDRef, tbValue: userID, tbLabel: "Mobile No. / Email Id", tbOnChange: onUserIDChanged, tbNextRef: passwordRef, tbError: userIDError, tbReturnKey: "next", tbKeyboardType: "name-phone-pad" }} />
              <CustomTextBox props={{ tbRef: passwordRef, tbSecureText: secureTextEntry, tbValue: password, tbLabel: "Password", tbOnChange: onPasswordChanged, tbError: passwordError, tbReturnKey: "done", tbStyle: { marginTop: 32 }, tbRight: PasswordMaskIcon() }} />
              <Button mode="text" style={[Styles.marginTop12, Styles.flexAlignEnd]} textColor={colors.text} onPress={ForgotPassword}>
                Forgot Password?
              </Button>
              <Button mode="contained" style={[Styles.marginTop32]} onPress={ValidateLogin}>
                LOG IN
              </Button>
              <View style={[Styles.flex1, Styles.padding16, Styles.width100per, Styles.flexAlignCenter, Styles.marginTop32]}>
                <Text variant="bodyMedium" style={{ color: colors.textTertiary }}>
                  Connect with your social account
                </Text>
                <View style={[Styles.flexRow, Styles.marginTop16]}>
                  <SocialIcons icon="facebook" iconClick={FacebookLogin} />
                  <SocialIcons icon="google" containerStyle={{ marginLeft: 16 }} iconClick={GoogleLogin} />
                </View>
                <View style={[Styles.flexRow, Styles.marginTop32, Styles.flexAlignCenter]}>
                  <Text variant="bodyLarge" style={{ color: colors.textSecondary }}>
                    Don't have an account?
                  </Text>
                  <Button mode="text" style={[Styles.marginStart4]} onPress={SignUp}>
                    SIGN UP
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(LoginScreen);
