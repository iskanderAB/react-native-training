import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Screen from "./src/components/Screen";
import  ScreenList from "./src/components/ListScreen/ScreenList"


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components :  Screen,
    ScreenList :  ScreenList
  },
  {
    initialRouteName: "Components" ,
    defaultNavigationOptions: {
      title: "PFE Application",
    }
  }
);

export default createAppContainer(navigator);
