import React from 'react';
import {View, StyleSheet} from 'react-native';
import {styles} from '../styles/root.style';
import {metrics} from '../config/app.config';

const LineProgress = ({maxPoint, pointIndex}) => {
  const screenWidth = metrics.screenWidth;
  const getMarginLeft = () => {
    let marginLeft = 0;
    if (pointIndex - 1 === 0) {
      marginLeft = screenWidth - 50;
    } else if (pointIndex < maxPoint) {
      marginLeft =
        Math.round((screenWidth - 50) / maxPoint) * (maxPoint - pointIndex);
    }

    return marginLeft;
  };
  const progressStyle = StyleSheet.create({
    lineProgress: {
      marginLeft: getMarginLeft(),
    },
  });
  return (
    <View style={styles.lineProgressContainer}>
      <View style={[styles.lineProgress, progressStyle.lineProgress]} />
    </View>
  );
};

export default LineProgress;
