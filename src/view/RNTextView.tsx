import {requireNativeComponent} from 'react-native';

type NativeRNTextViewProps = {
  text: string;
  callback?: (desc: Object) => void;
};
const NativeRNTextView =
  requireNativeComponent<NativeRNTextViewProps>('RNTextView');

type RNTextViewProps = {
  text: string;
};
type CallBack = {

};
export default function RNTextView(props: RNTextViewProps) {
  // @ts-ignore
  return (
    <NativeRNTextView
      text={props.text}
      callback={(text: CallBack) => {
        console.error(text);
      }}
    />
  );
}
