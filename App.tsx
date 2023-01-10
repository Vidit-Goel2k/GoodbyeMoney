import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Expenses, Settings, Reports, Add } from "./screens";
import { theme } from "./theme";
import { TabBarIcon } from "./components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Tab.Navigator>
      <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="settings" />,
          }}
          name="Settings"
          component={Settings}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="expenses" />,
          }}
          name="Expenses"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="reports" />,
          }}
          name="Reports"
          component={Reports}
        />
        <Tab.Screen
          options={{
            tabBarIcon: (props) => <TabBarIcon {...props} type="add" />,
          }}
          name="Add"
          component={Add}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
