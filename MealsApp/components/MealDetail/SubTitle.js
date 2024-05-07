import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTittle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTittle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitleContainer: {
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    alignItems: "center",
  },
});
