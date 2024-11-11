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

const Screen02 = () => {
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
      <Text style={styles.txtHeader}>The world's Best Bike</Text>
      <View style={styles.viebtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "red" }}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text>Mountain</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.item1}>
        <View style={styles.item11}>
          <Image key={0} source={{ uri: imageURLs[0] }} style={styles.image} />
          <Text style={styles.nameBike}>Pinarello</Text>
          <Text style={styles.price}>1800</Text>
        </View>
        <View style={styles.item11}>
          <Image key={1} source={{ uri: imageURLs[1] }} style={styles.image} />
          <Text style={styles.nameBike}>Pina Mountai</Text>
          <Text style={styles.price}>1800</Text>
        </View>
      </View>
      <View style={styles.item1}>
        <View style={styles.item11}>
          <Image key={4} source={{ uri: imageURLs[4] }} style={styles.image} />
          <Text style={styles.nameBike}>Pinarello</Text>
          <Text style={styles.price}>1800</Text>
        </View>
        <View style={styles.item11}>
          <Image key={1} source={{ uri: imageURLs[1] }} style={styles.image} />
          <Text style={styles.nameBike}>Pina Mountai</Text>
          <Text style={styles.price}>1800</Text>
        </View>
      </View>
      <View style={styles.item1}>
        <View style={styles.item11}>
          <Image key={2} source={{ uri: imageURLs[2] }} style={styles.image} />
          <Text style={styles.nameBike}>Pinarello</Text>
          <Text style={styles.price}>1900</Text>
        </View>
        <View style={styles.item11}>
          <Image key={3} source={{ uri: imageURLs[3] }} style={styles.image} />
          <Text style={styles.nameBike}>Pina Mountai</Text>
          <Text style={styles.price}>1800</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    resizeMode: "contain",
    alignItems: "center",
  },
  viebtn: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  txtHeader: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    borderWidth: 1,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "orange",
    marginTop: 20,
    marginBottom: 20,
  },
  item1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  item11: {
    width: "48%",
  },
  nameBike: {
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Screen02;
