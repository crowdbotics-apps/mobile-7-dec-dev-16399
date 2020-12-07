import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen015531Navigator from '../features/CopyOfBlankScreen015531/navigator';
import CopyOfBlankScreen015530Navigator from '../features/CopyOfBlankScreen015530/navigator';
import CopyOfBlankScreen015529Navigator from '../features/CopyOfBlankScreen015529/navigator';
import CopyOfBlankScreen015528Navigator from '../features/CopyOfBlankScreen015528/navigator';
import CopyOfCopyOfBlankScreen015527Navigator from '../features/CopyOfCopyOfBlankScreen015527/navigator';
import BlankScreen015525Navigator from '../features/BlankScreen015525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen015531: { screen: CopyOfBlankScreen015531Navigator },
CopyOfBlankScreen015530: { screen: CopyOfBlankScreen015530Navigator },
CopyOfBlankScreen015529: { screen: CopyOfBlankScreen015529Navigator },
CopyOfBlankScreen015528: { screen: CopyOfBlankScreen015528Navigator },
CopyOfCopyOfBlankScreen015527: { screen: CopyOfCopyOfBlankScreen015527Navigator },
BlankScreen015525: { screen: BlankScreen015525Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
