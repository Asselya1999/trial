import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Contact = () => {
  return (
    <View style={styles.center}>
    <Image source={{uri: 'https://www.kinopark.kz/static/img/photos/fallback.png'}}
       style={{width: 400, height: 400}} />
      <Text>This is the contact screen
      ТЦ Esentai Mall, Аль-Фараби проспект, 77/8, г. Алматы, Казахстан, 050000
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Contact;
