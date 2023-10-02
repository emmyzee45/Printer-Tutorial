import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Screen from './components/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from "@expo/vector-icons"

// const Link = () => {
//   const navigation = useNavigation();
//   return (
//     <Button 
//       title='Click'
//       onPress={() => navigation.navigate("TweetDetails")}/>
//   )
// }

const Tweets = ({ navigator }) => (
  <Screen>
    <Text style={styles.h1}>Issue/Problem: Printer Not Powering On</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Power cable not properly connected.</Text>
    <Text style={styles.li}>•	Faulty power outlet.</Text>
    <Text style={styles.li}>•	Printer's power button not functioning.</Text>
    <Text style={styles.li}>•	Defective power cable.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Check if the power cable is properly connected to both the printer and the power outlet.</Text>
    <Text style={styles.li}>2.	Ensure the power outlet is functional by plugging in another device.</Text>
    <Text style={styles.li}>3.	Press the printer's power button to turn it on.</Text>
    <Text style={styles.li}>4.	If the printer still doesn't turn on, try using a different power cable.</Text>
    <Text style={styles.h1}>Issue: Paper Jam</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Improperly loaded or aligned paper.</Text>
    <Text style={styles.li}>•	Foreign objects obstructing the paper path.</Text>
    <Text style={styles.li}>•	Worn out or dirty paper rollers.</Text>
    <Text style={styles.li}>•	Troubleshooting Steps:</Text>
    <Text style={styles.li}>•	Open the printer's paper tray and remove any jammed paper.</Text>
    <Text style={styles.li}>•	Open the printer's cover and carefully remove any jammed paper from the internal components.</Text>
    <Text style={styles.li}>•	Make sure the paper stack in the tray is properly aligned and not exceeding the maximum capacity.</Text>
    <Text style={styles.li}>•	Clean the rollers and paper path to prevent future jams.</Text>
    <Text style={styles.h1}>Issue: Poor Print Quality</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Low ink or toner levels.</Text>
    <Text style={styles.li}>•	Clogged print heads.</Text>
    <Text style={styles.li}>•	Incorrect print settings.</Text>
    <Text style={styles.li}>•	Incompatible or low-quality paper.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Check the ink or toner levels and replace cartridges if necessary.</Text>
    <Text style={styles.li}>2.	Run a print head cleaning cycle to resolve clogged print heads.</Text>
    <Text style={styles.li}>3.	Adjust print settings for higher quality output.</Text>
    <Text style={styles.li}>4.	Ensure you are using the correct paper type and size.</Text>
    <Text style={styles.h1}>Issue: Wi-Fi Connection Issues</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Printer not connected to the same Wi-Fi network as the device.</Text>
    <Text style={styles.li}>•	Router issues.</Text>
    <Text style={styles.li}>•	Incorrect Wi-Fi password.</Text>
    <Text style={styles.li}>•	Outdated printer firmware.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Verify that the printer is connected to the same Wi-Fi network as your device.</Text>
    <Text style={styles.li}>2.	Restart the router and the printer.</Text>
    <Text style={styles.li}>3.	Re-enter the Wi-Fi password on the printer if necessary.</Text>
    <Text style={styles.li}>4.	Update the printer's firmware if available.</Text>
    <Text style={styles.h1}>Issue: Printing From Mobile Device Fails</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Printer and mobile device on different Wi-Fi networks.</Text>
    <Text style={styles.li}>•	Missing or incompatible mobile printing app.</Text>
    <Text style={styles.li}>•	Mobile printing feature disabled.</Text>
    <Text style={styles.li}>•	Connectivity issues.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Ensure both the printer and mobile device are connected to the same Wi-Fi network.</Text>
    <Text style={styles.li}>2.	Install the official Epson mobile app for printing from mobile devices.</Text>
    <Text style={styles.li}>3.	Check if the printer's mobile printing feature is enabled in settings.</Text>
    <Text style={styles.li}>4.	Restart both the printer and the mobile device</Text>
    <Text style={styles.h1}>Symptom: Printer Produces Smudged Prints</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Wet ink on the paper due to touching or handling immediately after printing.</Text>
    <Text style={styles.li}>•	Worn out or damaged ink or toner cartridge.</Text>
    <Text style={styles.li}>•	Dirty print rollers or paper path.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Allow printed pages to fully dry before handling.</Text>
    <Text style={styles.li}>2.	Replace the ink or toner cartridge if it's old or damaged.</Text>
    <Text style={styles.li}>3.	Clean the print rollers and paper path using a lint-free cloth.</Text>
    <Text style={styles.h1}>Symptom: Paper Feed Issues (Multiple Sheets at Once)</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Overloaded or improperly aligned paper in the tray.</Text>
    <Text style={styles.li}>•	Worn out or dirty paper rollers.</Text>
    <Text style={styles.li}>•	Incorrect paper type or size settings in the printer.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Fan and align the paper stack before placing it in the tray.</Text>
    <Text style={styles.li}>2.	Clean or replace the paper rollers if they are dirty or worn.</Text>
    <Text style={styles.li}>3.	Ensure the paper type and size settings in the printer match the loaded paper.</Text>
    <Text style={styles.h1}>Symptom: Ink Smears or Bleeds on Paper</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Incorrect paper settings causing the ink to saturate the paper.</Text>
    <Text style={styles.li}>•	Low-quality paper that absorbs too much ink.</Text>
    <Text style={styles.li}>•	Clogged or misaligned print heads.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Adjust print settings to a lower ink density or quality mode.</Text>
    <Text style={styles.li}>2.	Use recommended high-quality paper that is suitable for your printer.</Text>
    <Text style={styles.li}>3.	Run a print head cleaning cycle to address clogged print heads</Text>
    <Text style={styles.h1}>Symptom: Wireless Printing Not Working</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Weak Wi-Fi signal or interference.</Text>
    <Text style={styles.li}>•	Incorrect Wi-Fi password or network settings.</Text>
    <Text style={styles.li}>•	Outdated printer firmware.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Move the printer closer to the router to improve signal strength.</Text>
    <Text style={styles.li}>2.	Double-check and re-enter the correct Wi-Fi password.</Text>
    <Text style={styles.li}>3.	Update the printer's firmware to the latest version.</Text>
    <Text style={styles.h1}>Symptom: Print Jobs Stuck in Queue</Text>
    <Text style={styles.h2}>Potential Causes:</Text>
    <Text style={styles.li}>•	Print spooler issues.</Text>
    <Text style={styles.li}>•	Connectivity problems between the computer and printer.</Text>
    <Text style={styles.li}>•	Outdated or incompatible printer drivers.</Text>
    <Text style={styles.h2}>Troubleshooting Steps:</Text>
    <Text style={styles.li}>1.	Restart the print spooler service on your computer</Text>
    <Text style={styles.li}>2.	Check the connection between the computer and printer.</Text>
    <Text style={styles.li}>3.	Update or reinstall the printer drivers</Text>
    {/* <Button 
    {/* <Button 
      title='View Screen'
      title='View Screen'
      onPress={() => navigator.navigate("TweetDetails")}/> */}
    {/* <Link /> */}
  </Screen>
)

// const TweetDetails = () => (
//   <Screen>
//     <Text>Text Details</Text>
//     <Text></Text>
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
const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to Printer's Tutorial</Text>
  </View>
)

const Account = () => (
  <Screen>
    <Text style={styles.h2}>How to clean the print head:</Text>
    <Text style={styles.li}>1.	Turn on the printer and load a sheet of plain paper into the printer.</Text>
    <Text style={styles.li}>2.	Open the printer's control panel.</Text>
    <Text style={styles.li}>3.	Press and hold the "Ink" button for three seconds.</Text>
    <Text style={styles.li}>4.	The printer will start the print head cleaning process. This may take a few minutes.</Text>
    <Text style={styles.li}>5.	Once the cleaning process is complete, print a nozzle check pattern to make sure that the print head is clean.</Text>
    <Text style={styles.h2}>How to replace the ink cartridges:</Text>
    <Text style={styles.li}>1.	Turn off the printer.</Text>
    <Text style={styles.li}>2.	Open the printer's ink cartridge bay.</Text>
    <Text style={styles.li}>3.	Identify the empty ink cartridges. The empty cartridges will be lighter than the full cartridges.</Text>
    <Text style={styles.li}>4.	Remove the empty ink cartridges by pressing down on the tab and lifting them out of the printer.</Text>
    <Text style={styles.li}>5.	Insert the new ink cartridges into the printer by aligning the tabs on the cartridges with the slots in the printer.</Text>
    <Text style={styles.li}>6.	Close the printer's ink cartridge bay.</Text>
    <Text style={styles.li}>7.	Turn on the printer.</Text>
    <Text style={styles.li}>8.	The printer will automatically recognize the new ink cartridges and start printing.</Text>
    <Text style={styles.h2}>How to keep the printer clean:</Text>
    <Text style={styles.li}>•	Keep the printer area clean and free of dust and debris.</Text>
    <Text style={styles.li}>•	Wipe down the outside of the printer with a soft, damp cloth.</Text>
    <Text style={styles.li}>•	Avoid using harsh chemicals or cleaners on the printer.</Text>
    <Text style={styles.li}>•	If the printer gets dirty inside, you can use a vacuum cleaner with a soft brush attachment to remove dust and debris.</Text>
    <Text style={styles.h2}>How to store the printer properly:</Text>
    <Text style={styles.li}>•	If you are not going to use the printer for an extended period of time, empty the ink cartridges and store them in a cool, dry place.</Text>
    <Text style={styles.li}>•	Store the printer in a cool, dry place.</Text>
    <Text style={styles.li}>•	Avoid exposing the printer to dust or moisture.</Text>
    <Text style={styles.li}>•	If you are storing the printer in a cold climate, be sure to bring it up to room temperature before using it again.</Text>
    <Text style={styles.h2}>General maintenance tips</Text>
    <Text style={styles.li}>•	Regularly clean the printer's exterior and paper trays to prevent dust buildup.</Text>
    <Text style={styles.li}>•	Use high-quality paper and avoid overloading the paper tray.</Text>
    <Text style={styles.li}>•	Keep the printer in a clean and dust-free environment.</Text>
    <Text style={styles.li}>•	Perform regular print head cleaning to maintain print quality.</Text>
    <Text style={styles.li}>•	Update the printer's firmware when new versions are released.</Text>
  </Screen>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  
  <Tab.Navigator 
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}>
    <Tab.Screen
      name="Tutorial"
      component={Home} 
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='home' size={size} color={color} />
      }}
    />
    <Tab.Screen 
    name='TROUBLESHOOTING' 
    component={Tweets}
    options={{
      tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='printer' size={size} color={color} />
    }}
    />
    <Tab.Screen 
      name='MAINTENANCE' 
      component={Account}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='tools' size={size} color={color} />
      }}
    />
  </Tab.Navigator>
)

export default function App() {

  return (
    <>
    {/* <Home /> */}
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold"
  },
  h2: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },
  li: {
    paddingLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 25,
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontWeight: "500",
    color: "tomato",
    textTransform: "capitalize",
  }
});
