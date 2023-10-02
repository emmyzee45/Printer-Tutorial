// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import Screen from './components/Screen';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button 
//       title='Click'
//       onPress={() => navigation.navigate("TweetDetails")}/>
//   )
// }

// const Tweets = ({ navigator }) => (
//   <Screen>
//     <Text>Tweets</Text>
//     {/* <Button 
//       title='View Screen'
//       onPress={() => navigator.navigate("TweetDetails")}/> */}
//     <Link />
//   </Screen>
// )

// const TweetDetails = () => (
//   <Screen>
//     <Text>Text Details</Text>
//   </Screen>
// )

// const Stack = createStackNavigator();

// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name=' Tweets' component={Tweets}/>
//     <Stack.Screen 
//       name=' TweetDetails' 
//       component={TweetDetails}
//       options={{ title: "Tweet Details"}}
//     />
//   </Stack.Navigator>
// )

// const Account = () => <Screen><Text>Account</Text></Screen>

// const Tab = createBottomTabNavigator();
// const TabNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name='Feed' component={Tweets}/>
//     <Tab.Screen name='Account' component={Account}/>
//   </Tab.Navigator>
// )

// export default function App() {

//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
