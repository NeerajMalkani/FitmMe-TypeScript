import React, { useRef, useState } from "react";
import { Keyboard, StatusBar, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, Text, TextInput, withTheme } from "react-native-paper";
import PreLoginHeader from "../components/common/PreLoginHeader";
import SocialIcons from "../components/uielements/SocialIcons";
import CustomTextBox from "../components/uielements/TextBox";
import { Styles } from "../styles/styles";
import { CommonValidator } from "../utils/commonvalidator";

interface props {
  route: any;
  navigation: any;
  theme: any;
}
const SignupScreen = ({ route, navigation, theme }: props) => {
  const { colors } = theme;
  const userFullNameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [fullName, setFullName] = useState("");
  const [fullNameHelperText, setFullNameHelperText] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [mobile, setMobile] = useState("");
  const [mobileHelperText, setMobileHelperText] = useState("");
  const [mobileError, setMobileError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordHelperText, setConfirmPasswordHelperText] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const onFullNameChanged = (text: string) => {
    setFullName(text);
  };

  const onMobileChanged = (text: string) => {
    setMobile(text);
  };

  const onEmailChanged = (text: string) => {
    setEmail(text);
  };

  const onPasswordChanged = (text: string) => {
    if (confirmPassword !== text) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("");
    }
    setPassword(text);
  };

  const onConfirmPasswordChanged = (text: string) => {
    if (password !== text) {
      setConfirmPasswordError(true);
      setConfirmPasswordHelperText("Password does not match");
    }
    setConfirmPassword(text);
  };

  const PasswordMaskIcon = (type: string) => {
    return (
      <TextInput.Icon
        icon={(type === "password" ? secureTextEntry : confirmSecureTextEntry) ? "eye" : "eye-off"}
        color={colors.onBackground}
        size={24}
        onPress={() => {
          (type === "password" ? secureTextEntry : confirmSecureTextEntry) ? setSecureTextEntry(!secureTextEntry) : setConfirmSecureTextEntry(!confirmSecureTextEntry);
        }}
      />
    );
  };

  const OnSubmitClick = () => {
    let arrFieldsValue = [
      { type: "fullname", value: fullName },
      { type: "mobile", value: mobile },
      { type: "email", value: email },
      { type: "password", value: password },
      { type: "matchpassword", value: password, value2: confirmPassword },
    ];

    let responseData = CommonValidator(arrFieldsValue);
    for (let i = 0; i < responseData.length; i++) {
      switch (responseData[i]) {
        case "fullname":
          setFullNameError(true);
          setFullNameHelperText("Please enter valid full name");
          break;
        case "mobile":
          setMobileError(true);
          setMobileHelperText("Please enter valid mobile");
          break;
        case "email":
          setEmailError(true);
          setEmailHelperText("Please enter valid email");
          break;
        case "password":
          setPasswordError(true);
          setPasswordHelperText("Please enter valid password");
          break;
        case "matchpassword":
          setConfirmPasswordError(true);
          setConfirmPasswordHelperText("Password does not match");
          break;
      }
    }

    if (arrFieldsValue.length) {
      //
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={[Styles.flex1, { backgroundColor: colors.background }]}>
        <StatusBar backgroundColor={colors.background} barStyle={route.params.themeMode ? "dark-content" : "light-content"} />
        <PreLoginHeader theme={theme} text="Signup to FitMe" content={undefined} />
        <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} keyboardShouldPersistTaps="handled">
          <View style={[Styles.flex1, Styles.flexColumn, { justifyContent: "space-between" }]}>
            <View style={[Styles.flex1, Styles.padding16, Styles.width100per]}>
              <CustomTextBox
                props={{
                  tbRef: userFullNameRef,
                  tbValue: fullName,
                  tbLabel: "Full Name",
                  tbOnChange: onFullNameChanged,
                  tbNextRef: mobileRef,
                  tbError: fullNameError,
                  tbReturnKey: "next",
                  tbHelperTextType: fullNameHelperText,
                }}
              />
              <CustomTextBox
                props={{
                  tbRef: mobileRef,
                  tbValue: mobile,
                  tbLabel: "Mobile No.",
                  tbOnChange: onMobileChanged,
                  tbNextRef: emailRef,
                  tbError: mobileError,
                  tbReturnKey: "next",
                  tbStyle: { marginTop: 32 },
                  tbHelperTextType: mobileHelperText,
                }}
              />

              <CustomTextBox
                props={{
                  tbRef: emailRef,
                  tbValue: email,
                  tbLabel: "Email ID",
                  tbOnChange: onEmailChanged,
                  tbNextRef: passwordRef,
                  tbError: emailError,
                  tbReturnKey: "next",
                  tbStyle: { marginTop: 32 },
                  tbHelperTextType: emailHelperText,
                }}
              />

              <CustomTextBox
                props={{
                  tbRef: passwordRef,
                  tbSecureText: secureTextEntry,
                  tbValue: password,
                  tbLabel: "Password",
                  tbOnChange: onPasswordChanged,
                  tbError: passwordError,
                  tbReturnKey: "next",
                  tbStyle: { marginTop: 32 },
                  tbRight: PasswordMaskIcon("password"),
                  tbHelperTextType: passwordHelperText,
                }}
              />

              <CustomTextBox
                props={{
                  tbRef: confirmPasswordRef,
                  tbSecureText: confirmSecureTextEntry,
                  tbValue: confirmPassword,
                  tbLabel: "Confirm Password",
                  tbOnChange: onConfirmPasswordChanged,
                  tbError: confirmPasswordError,
                  tbReturnKey: "next",
                  tbStyle: { marginTop: 32 },
                  tbRight: PasswordMaskIcon("cpassword"),
                  tbHelperTextType: confirmPasswordHelperText,
                }}
              />
              <Button mode="contained" style={[Styles.marginTop32]} onPress={() => OnSubmitClick}>
                SIGN UP
              </Button>
              <View style={[Styles.flex1, Styles.padding16, Styles.width100per, Styles.flexAlignCenter, Styles.marginTop32]}>
                <Text variant="bodyMedium" style={{ color: colors.textTertiary }}>
                  Sign up with your social account
                </Text>
                <View style={[Styles.flexRow, Styles.marginTop16]}>
                  <SocialIcons icon="facebook" themeMode={route.params.themeMode} iconClick={() => {}} />
                  <SocialIcons icon="google" containerStyle={{ marginLeft: 16 }} themeMode={route.params.themeMode} iconClick={() => {}} />
                </View>
                <View style={[Styles.flexRow, Styles.marginTop32, Styles.flexAlignCenter]}>
                  <Text variant="bodyLarge" style={{ color: colors.textSecondary }}>
                    Instead
                  </Text>
                  <Button mode="text" style={[Styles.marginStart4]} onPress={() => {navigation.navigate("Login");}}>
                    LOG IN
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

export default withTheme(SignupScreen);
