import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splashscreen';
import LoginScreen from './LoginScreen';
import StockProScreen from './Admin/stockproadmin';
import PendingRequestsScreen from './Admin/pendingrequests';
import InventoryScreen from './Admin/inventory';
import AddItemScreen from './Admin/Additem';
import SiteUsageScreen from './Admin/siteusage';
import wastage from './Admin/wastage';
import GenerateReportScreen from './Admin/generatereports';
import StockProEmployee from './Employee/stockproemployee';
import ScanItemsPage from './Employee/scanitems';
import StockRequestPage from './Employee/stockrequest';
import SubtractQuantityPage from './Employee/subtractquantity';
import subtract from './Employee/subtract';
import AddItemScreen1 from './Admin/additem1';
import Scanneditems from './Employee/scanneditems';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  StockPro: undefined;
  PendingRequests: undefined;
  Inventory: undefined;
  AddItem: undefined;
  additem1:undefined;
  Tools: undefined;
  Wastage: undefined;
  Generatereport: undefined;
  StockProEmployee: undefined;
  ScanItems: undefined;
  StockRequest: undefined;
  SubtractQuantity: { item: { image: any; name: string; usedQuantity: string; remainingQuantity: string; date: string; } };
  subtract:undefined;
  Scanneditems:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StockPro" component={StockProScreen} />
        <Stack.Screen name="PendingRequests" component={PendingRequestsScreen} />
        <Stack.Screen name="Inventory" component={InventoryScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
        <Stack.Screen name="additem1" component={AddItemScreen1} />
        <Stack.Screen name="Tools" component={SiteUsageScreen} />
        <Stack.Screen name="Wastage" component={wastage} />
        <Stack.Screen name="Generatereport" component={GenerateReportScreen} />
        <Stack.Screen name="StockProEmployee" component={StockProEmployee} />
        <Stack.Screen name="ScanItems" component={ScanItemsPage} />
        <Stack.Screen name="StockRequest" component={StockRequestPage} />
        <Stack.Screen name="subtract" component={subtract} />
        <Stack.Screen name="SubtractQuantity" component={SubtractQuantityPage} />
        <Stack.Screen name="Scanneditems" component={Scanneditems} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;