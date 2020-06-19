import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
// import AboutStack from './aboutStack';
import AuthStack from './authStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  // Home: {
  //   screen: HomeStack,
  // },
  // About: {
  //   screen: AboutStack,
	// },
	Auth: {
		screen: AuthStack,
	}
});

export default createAppContainer(RootDrawerNavigator);