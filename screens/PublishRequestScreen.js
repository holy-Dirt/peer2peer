import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';

export default function PublishRequestScreen({ navigation }) {
  const [topic, setTopic] = useState('Math');
  const [description, setDescription] = useState('');
  const [preferred, setPreferred] = useState('Morning');
  const [recording, setRecording] = useState(null);

  const startRecording = async () => {
    try {
      const { granted } = await Audio.requestPermissionsAsync();
      if (!granted) return;
      const rec = new Audio.Recording();
      await rec.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await rec.startAsync();
      setRecording(rec);
    } catch (e) {
      console.warn('Recording error', e);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
      console.log('Recorded file', uri);
    } catch (e) {
      console.warn('Stop recording error', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Topic</Text>
      <Picker selectedValue={topic} onValueChange={setTopic} style={styles.picker}>
        <Picker.Item label="Math" value="Math" />
        <Picker.Item label="Science" value="Science" />
        <Picker.Item label="History" value="History" />
        <Picker.Item label="Art" value="Art" />
        <Picker.Item label="Coding" value="Coding" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <Text style={styles.label}>Short Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        maxLength={140}
      />
      <Text style={styles.label}>Preferred Hours</Text>
      <Picker selectedValue={preferred} onValueChange={setPreferred} style={styles.picker}>
        <Picker.Item label="Morning" value="Morning" />
        <Picker.Item label="Afternoon" value="Afternoon" />
        <Picker.Item label="Evening" value="Evening" />
      </Picker>
      <Button
        title={recording ? 'Stop Recording' : 'Record'}
        onPress={recording ? stopRecording : startRecording}
      />
      <Button title="Publish" onPress={() => navigation.navigate('MatchCircle')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: { marginTop: 10 },
  picker: { height: 50 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 5 }
});
