import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useKarma } from '../context/KarmaContext';

export default function KarmaScreen() {
  const { karma } = useKarma();
  const badges = karma >= 10 ? ['Day Saver'] : [];

  return (
    <View style={styles.container}>
      <Text style={styles.points}>Karma: {karma}</Text>
      <FlatList
        data={badges}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.badge}>{item}</Text>}
        ListEmptyComponent={<Text>No badges yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  points: { fontSize: 24, marginBottom: 20 },
  badge: { fontSize: 18, marginBottom: 10 },
});
