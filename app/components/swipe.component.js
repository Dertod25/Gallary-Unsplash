import React, {useEffect, useRef} from 'react';
import {View, PanResponder} from 'react-native';

const Swipe = ({children, style, setOnSwipe}) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
        if (setOnSwipe) {
          if (typeof setOnSwipe === 'function') {
            if (Math.abs(x) > Math.abs(y)) {
              if (x >= 0) {
                setOnSwipe('right');
              } else {
                setOnSwipe('left');
              }
            } else {
              if (y >= 0) {
                setOnSwipe('down');
              } else {
                setOnSwipe('up');
              }
            }
          } else {
            console.log('setOnSwipe it must be a function');
          }
        }
      },
    })
  ).current;
  useEffect(() => {}, []);

  return (
    <View {...panResponder.panHandlers} style={style}>
      {children}
    </View>
  );
};

export default Swipe;
