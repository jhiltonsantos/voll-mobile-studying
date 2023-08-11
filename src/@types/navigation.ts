import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type ScreenList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProfileTab: undefined;
  ExploreTab: undefined;
  ServiceTab: undefined;
  MainTab: undefined;
  Tabs: undefined;
  ScheduleScreen: { specialistID: string };
};

export type NavigationProps<T extends keyof ScreenList> = {
  navigation: NativeStackNavigationProp<ScreenList, T>;
  route: RouteProp<ScreenList, T>;
};
