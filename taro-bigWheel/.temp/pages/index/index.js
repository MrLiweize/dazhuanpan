import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import './index.less';

export default class Index extends Taro.Component {

  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className="index">
        <Text>Hello world!</Text>
      </View>;
  }
}