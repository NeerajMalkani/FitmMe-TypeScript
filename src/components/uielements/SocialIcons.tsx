import { withTheme } from "react-native-paper";
import { View, TouchableNativeFeedback, Image } from "react-native";
import { Styles } from "../../styles/styles";

const SocialIcons = (props) => {
  const { icon, iconClick, containerStyle, theme } = props;
  const { colors } = theme;

  return (
    <View style={[{ ...containerStyle, width: 56, height: 56, overflow: "hidden", borderRadius: 30, elevation: 4 }]}>
      <TouchableNativeFeedback onPress={iconClick ? iconClick : () => {}}>
        <View style={[Styles.width56, Styles.height56, Styles.flexAlignCenter, Styles.flexJustifyCenter, { borderRadius: 28, backgroundColor: colors.background }]}>
          <Image source={icon === "google" ? require("../../../assets/images/google.png") : require("../../../assets/images/facebook.png")} style={[Styles.width24, Styles.height24]} />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default withTheme(SocialIcons);
