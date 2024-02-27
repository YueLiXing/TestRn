import { requireNativeComponent } from "react-native";
import { PureComponent } from "react";

const NativeLDFastImageView = requireNativeComponent('LDFastImageView');

export class LDFastImageView extends PureComponent {
  render() {
    return (
      <NativeLDFastImageView
        {...this.props}
        uri={'asdasdasdsds'}
        source={{
          uri: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b987bcd44545b74f48f1dbdbda34279.png?w=471&h=766&bg=60706',
        }}
        onFastImageLoad={(result: any) => {
          console.log('onFastImageLoad', result.nativeEvent);
        }}
      />
    );
  }
}
