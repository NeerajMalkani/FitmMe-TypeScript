import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const CustomTextBox = ({ props }) => {
  const { tbRef, tbLabel, tbValue, tbOnChange, tbError, tbMode, tbKeyboardType, tbReturnKey, tbNextRef, tbLeft, tbRight, tbStyle, tbSecureText, tbHelperText, tbHelperTextType } = props;
  return (
    <View>
      <TextInput
        ref={tbRef ? tbRef : null}
        mode={tbMode ? tbMode : "flat"}
        label={tbLabel ? tbLabel : ""}
        value={tbValue ? tbValue : ""}
        secureTextEntry={tbSecureText ? tbSecureText : false}
        style={{ backgroundColor: "transparent", ...tbStyle }}
        onChangeText={(text) => {
          if (tbOnChange) {
            tbOnChange(text);
          }
        }}
        keyboardType={tbKeyboardType ? tbKeyboardType : "default"}
        error={tbError ? tbError : false}
        returnKeyType={tbReturnKey ? tbReturnKey : "default"}
        onSubmitEditing={() => {
          if (tbNextRef) {
            tbNextRef.current.focus();
          }
        }}
        left={tbLeft ? tbLeft : null}
        right={tbRight ? tbRight : null}
      />
      {tbHelperText ? (
        <HelperText type={tbHelperTextType ? tbHelperTextType : "error"} visible={tbError ? tbError : false}>
          {tbHelperText}
        </HelperText>
      ) : null}
    </View>
  );
};

export default CustomTextBox;
