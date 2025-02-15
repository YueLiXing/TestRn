import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Button } from 'react-native';

const SimpleAnimation = () => {
  // 创建 Animated.Value 用于控制透明度和位置
  const fadeAnim = useRef(new Animated.Value(0)).current; // 初始透明度为 0
  const moveAnim = useRef(new Animated.Value(0)).current; // 初始位置为 0

  // 动画函数
  const startAnimation = () => {
    // 重置动画值
    fadeAnim.setValue(0);
    moveAnim.setValue(0);

    // 同时执行两个动画
    Animated.parallel([
      // 淡入动画
      Animated.timing(fadeAnim, {
        toValue: 1, // 目标透明度为 1
        duration: 1000, // 动画时长 1 秒
        useNativeDriver: true, // 启用原生驱动
      }),
      // 向上移动动画
      Animated.timing(moveAnim, {
        toValue: -100, // 目标位置为 -100
        duration: 1000, // 动画时长 1 秒
        useNativeDriver: true, // 启用原生驱动
      }),
    ]).start();
  };

  const endAnimation = () => {
    Animated.sequence([
      // 向上移动动画
      Animated.timing(moveAnim, {
        toValue: 0, // 目标位置为 -100
        duration: 1000, // 动画时长 1 秒
        useNativeDriver: true, // 启用原生驱动
      }),
      // 淡入动画
      Animated.timing(fadeAnim, {
        toValue: 0, // 目标透明度为 1
        duration: 1000, // 动画时长 1 秒
        useNativeDriver: true, // 启用原生驱动
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      {/* 使用 Animated.View 包裹需要动画的组件 */}
      <Animated.View
        style={[
          styles.box,
          {
            opacity: fadeAnim, // 绑定透明度
            transform: [{ translateY: moveAnim }], // 绑定位置
          },
        ]}>
        <Text style={styles.text}>Hello, Animation!</Text>
      </Animated.View>

      {/* 按钮触发动画 */}
      <Button title="Start Animation" onPress={startAnimation} />
      <Button title="End Animation" onPress={endAnimation} />
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
    width: 200,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default SimpleAnimation;
