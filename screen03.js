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

const Screen03 = () => {
  const dispatch = useDispatch();
  const { imageURLs, loading, error } = useSelector((state) => state.image);

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
      <View style={styles.bgBike}>
        <Image key={1} source={{ uri: imageURLs[1] }} style={styles.image} />
      </View>

      <View style={styles.in4}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Pina Mountain</Text>
        <Text>15% OFF | 350$</Text>
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>Description</Text>
        <Text>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtbtn}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: "contain",
  },
  bgBike: {
    backgroundColor: "pink",
    width: "90%",
    alignItems: "center",
    opacity: 0.9,
  },
  in4: {
    width: "100%",
    marginTop: 30,
  },
  btn: {
    width: "80%",
    backgroundColor: "red",
    padding: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtbtn: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Screen03;
