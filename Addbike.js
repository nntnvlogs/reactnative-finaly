import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { addBike } from "./bikeSlice";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";

const AddBikeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleAddBike = () => {
    if (name && price && image) {
      const newBike = { name, price, image };
      dispatch(addBike(newBike));
      setName("");
      setPrice("");
      setImage("");
      navigation.goBack();
    }
  };

  const handleChooseImage = () => {
    launchImageLibrary({ mediaType: "photo", quality: 1 }, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setImage(source.uri);
      }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Tên xe đạp"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Giá xe đạp"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <TouchableOpacity
        onPress={handleChooseImage}
        style={{
          marginBottom: 10,
          padding: 10,
          backgroundColor: "#007bff",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Chọn hình ảnh
        </Text>
      </TouchableOpacity>

      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, marginBottom: 10 }}
        />
      ) : null}

      <Button title="Thêm xe đạp" onPress={handleAddBike} />
    </View>
  );
};

export default AddBikeScreen;
