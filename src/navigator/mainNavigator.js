import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfCopyOfBlankScreen015541Navigator from '../features/CopyOfCopyOfBlankScreen015541/navigator';
import CopyOfBlankScreen015540Navigator from '../features/CopyOfBlankScreen015540/navigator';
import CopyOfBlankScreen015539Navigator from '../features/CopyOfBlankScreen015539/navigator';
import CopyOfBlankScreen015538Navigator from '../features/CopyOfBlankScreen015538/navigator';
import CopyOfBlankScreen015537Navigator from '../features/CopyOfBlankScreen015537/navigator';
import CopyOfBlankScreen015536Navigator from '../features/CopyOfBlankScreen015536/navigator';
import BlankScreen115534Navigator from '../features/BlankScreen115534/navigator';
import BlankScreen115532Navigator from '../features/BlankScreen115532/navigator';
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
CopyOfCopyOfBlankScreen015541: { screen: CopyOfCopyOfBlankScreen015541Navigator },
CopyOfBlankScreen015540: { screen: CopyOfBlankScreen015540Navigator },
CopyOfBlankScreen015539: { screen: CopyOfBlankScreen015539Navigator },
CopyOfBlankScreen015538: { screen: CopyOfBlankScreen015538Navigator },
CopyOfBlankScreen015537: { screen: CopyOfBlankScreen015537Navigator },
CopyOfBlankScreen015536: { screen: CopyOfBlankScreen015536Navigator },
BlankScreen115534: { screen: BlankScreen115534Navigator },
BlankScreen115532: { screen: BlankScreen115532Navigator },
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
