import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const ImageManager = ({ receiveImageURI }) => {
    const [status, requestPermission] = ImagePicker.useCameraPermissions();
    const [imageURI, setImage] = useState("");

    const verifyPermissions = async () => {
        if (status == "granted") {
            return true;
        }
        try {
            const result = await requestPermission();
            if (result.status !== "granted") {
                console.log("Permission denied");
                return false;
            }
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    const takeImageHandler = async () => {
        try {
            const havePermission = await verifyPermissions();
            console.log(havePermission);
            if (!havePermission) {
                Alert.alert("You need to grant camera permissions to use this feature.");
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [3, 3],
                quality: 1,
            });

            console.log(result.assets[0].uri);
            receiveImageURI(result.assets[0].uri);
            setImage(result.assets[0].uri);

            if (!result.canceled) {
                setImage(result.uri);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <Button title="Take Image" onPress={takeImageHandler} />
            {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
        </View>
    )
}

export default ImageManager

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100
    }
})