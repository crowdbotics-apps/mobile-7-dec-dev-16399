import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <View style={styles.View_2}>
        <View style={styles.View_3} />
        <View style={styles.View_4} />
      </View>
      <View style={styles.View_5}>
        <View style={styles.View_6} />
        <View style={styles.View_7} />
      </View>
      <Text>Sample text content</Text>
      <Text>Sample text content</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: { width: 102 },
  View_4: { width: 19 },
  View_5: { width: 100, height: 100 },
  View_6: { height: 39 },
  View_7: { height: 10 },
  Text_8: {},
  Text_9: {}
})
