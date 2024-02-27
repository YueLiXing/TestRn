import { requireNativeComponent, ViewProps } from "react-native";
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {Component, PureComponent} from 'react';

type NativeRNTextViewProps = {
  text?: string;
  callback?: (desc: Object) => void;
};
const NativeRNTextView =
  requireNativeComponent<NativeRNTextViewProps>('RNTextView');
// const NativeRNTextView = requireNativeComponent('RNTextView');

interface RNTextViewProps extends ViewProps {
  text: string;
}

type CallBack = {};

// export default function RNTextView(props: RNTextViewProps) {
//   // @ts-ignore
//   return (
//     <NativeRNTextView
//       text={props.text}
//       callback={(text: CallBack) => {
//         console.error(text);
//       }}
//     />
//   );
// }

export default class RNTextView extends PureComponent<RNTextViewProps> {
  private callback = text => {
    console.error(`text: ${text}`);
  };
  render() {
    return (
      <NativeRNTextView
        text={this.props.text}
        callback={this.callback.bind(this)}
      />
    );
  }
}
