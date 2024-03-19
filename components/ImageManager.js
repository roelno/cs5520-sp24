import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import * as ImagePicker from 'expo-image-picker';

const ImageManager = () => {
    const takeImage = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [3, 3],
                quality: 1,
            });

            console.log(result);

            if (!result.canceled) {
                setImage(result.uri);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View>
           <Button title="Take Image" onPress={takeImage} />
        </View>
    )
}

export default ImageManager

const styles = StyleSheet.create({})