import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetail = ({
  Duration,
  Complexity,
  Affordability,
  style,
  textStyle,
}) => {
  return (
    <View>
      <View style={[styles.details, style]}>
        <Text style={[styles.detailItems, textStyle]}>{Duration}m</Text>
        <Text style={[styles.detailItems, textStyle]}>
          {Complexity.toUpperCase()}
        </Text>
        <Text style={[styles.detailItems, textStyle]}>
          {Affordability.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  detailItems: {
    paddingHorizontal: 4,
    fontSize: 12,
  },
});
