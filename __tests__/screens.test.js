import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';
import PublishRequestScreen from '../screens/PublishRequestScreen';
import MatchCircleScreen from '../screens/MatchCircleScreen';
import KarmaScreen from '../screens/KarmaScreen';
import { KarmaProvider } from '../context/KarmaContext';

function wrapper(ui) {
  return render(<KarmaProvider>{ui}</KarmaProvider>);
}

test('render HomeScreen', () => {
  wrapper(<HomeScreen />);
});

test('render PublishRequestScreen', () => {
  wrapper(<PublishRequestScreen />);
});

test('render MatchCircleScreen', () => {
  wrapper(<MatchCircleScreen />);
});

test('render KarmaScreen', () => {
  wrapper(<KarmaScreen />);
});
