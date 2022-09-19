import { withTheme } from "react-native-paper";
import { useState } from "react";
import { View } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Styles } from "../../styles/styles";

const CustomCard = ({ theme, containerStyle, content, onPress }) => {
  const { colors } = theme;
  const [elevation, setElevation] = useState(4);
  return (
    <TouchableWithoutFeedback onPressIn={() => setElevation(10)} onPressOut={() => setElevation(4)} onPress={onPress}>
      <View style={[Styles.padding16, { ...containerStyle, elevation: elevation, backgroundColor: colors.background }]}>{content ? content : null}</View>
    </TouchableWithoutFeedback>
  );
};

export default withTheme(CustomCard);
