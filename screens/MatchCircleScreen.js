import React from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { useKarma } from '../context/KarmaContext';

const helpers = [
  { name: 'Alice', distance: '1km' },
  { name: 'Bob', distance: '2km' },
  { name: 'Charlie', distance: '1.5km' },
  { name: 'Dana', distance: '3km' },
  { name: 'Eve', distance: '2.5km' },
  { name: 'Frank', distance: '4km' },
  { name: 'Grace', distance: '1km' },
  { name: 'Heidi', distance: '0.5km' },
];

export default function MatchCircleScreen({ navigation }) {
  const { addKarma } = useKarma();

  const handleSelect = (name) => {
    Alert.alert(
      'Start helping',
      `Start helping ${name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            addKarma(10);
            navigation.navigate('Home');
          },
        },
      ]
    );
  };

  const radius = 120;
  const center = 150;

  return (
    <View style={styles.container}>
      <Svg width={300} height={300}>
        <Circle cx={center} cy={center} r={radius} fill="#eee" />
        {helpers.map((h, i) => {
          const angle = (i / helpers.length) * 2 * Math.PI;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <SvgText
              key={h.name}
              x={x}
              y={y}
              onPress={() => handleSelect(h.name)}
              fontSize="14"
              textAnchor="middle"
            >
              {h.name}
            </SvgText>
          );
        })}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
