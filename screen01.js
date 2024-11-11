import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchImage } from "./slice";

const Screen01 = () => {
  const dispatch = useDispatch();
  const { imageURLs, loading, error } = useSelector((state) => state.image); // Lấy mảng ảnh từ Redux

  useEffect(() => {
    dispatch(fetchImage());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!Array.isArray(imageURLs)) {
    return <Text>Images are loading or failed to load.</Text>;
  }

  if (imageURLs.length === 0) {
    return <Text>No images available.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        A premium online store for sporters and their stylish choice
      </Text>
      <View style={styles.bgBike}>
        <Image key={0} source={{ uri: imageURLs[0] }} style={styles.image} />
      </View>

      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        POWER BIKE{"\n"} SHOP
      </Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txtbtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: "contain",
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  bgBike: {
    backgroundColor: "pink",
    padding: 20,
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
  },
  btn: {
    width: "80%",
    backgroundColor: "red",
    padding: 8,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 20,
  },
  txtbtn: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Screen01;
