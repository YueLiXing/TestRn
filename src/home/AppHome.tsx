/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function AppHome(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [count, setCount] = useState(0);
  // const device = useCameraDevice('back') as CameraDevice;
  // const codeScanner = useCodeScanner({
  //   codeTypes: ['qr', 'ean-13'],
  //   onCodeScanned: (codes) => {
  //     console.log(`Scanned ${codes.length} codes!`);
  //   },
  // });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/*<View style={{height: 100, width: 100, backgroundColor: 'red'}}>*/}
          {/*  <RNTextView style={[StyleSheet.absoluteFill, {backgroundColor: 'green'}]} text={`${count}`} />*/}
          {/*</View>*/}
          <TouchableOpacity
            style={{ padding: 30 }}
            onPress={async () => {
              setCount(count + 1);
              console.log('click');
            }}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 30 }}
            onPress={async () => {
              const result = await NativeModules.RNTextView.clean();
              console.log(`result: ${result}`);
            }}>
            <Text>Result</Text>
          </TouchableOpacity>
          {/*<View style={{width: '100%', height: 300}}>*/}
          {/*  <Camera*/}
          {/*    style={StyleSheet.absoluteFill}*/}
          {/*    device={device}*/}
          {/*    isActive={true}*/}
          {/*    codeScanner={codeScanner}*/}
          {/*  />*/}
          {/*</View>*/}
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">Read the docs to discover what to do next:</Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppHome;
