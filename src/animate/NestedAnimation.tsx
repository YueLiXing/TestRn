import React, { useRef } from 'react';
import { Animated, View, Text, StyleSheet, Button } from 'react-native';

const NestedAnimation = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // 透明度
  const scaleAnim = useRef(new Animated.Value(1)).current; // 缩放
  const moveAnim = useRef(new Animated.Value(0)).current; // 位置

  const startAnimation = () => {
    // 重置动画值
    fadeAnim.setValue(0);
    scaleAnim.setValue(1);
    moveAnim.setValue(0);

    // 嵌套动画
    Animated.sequence([
      // 第一阶段：淡入 + 放大
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      // 第二阶段：移动
      Animated.timing(moveAnim, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      // 第三阶段：淡出 + 缩小
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }, { translateY: moveAnim }],
          },
        ]}>
        <Text style={styles.text}>Animated Box</Text>
      </Animated.View>

      <Button title="Start Nested Animation" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default NestedAnimation;
