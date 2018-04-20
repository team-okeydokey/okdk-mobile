import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, 
  SectionList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import MyKeyItem from '../Components/MyKeyItem'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MyKeyScreenStyle'

const data = [
  {data: [{image:'device1', name:'Front door', 'description':'Room 711', 'address': '0x281055Afc982d96fAB65b3a49cAc8b878184Cb16'}, 
           {image:'device2', name:'Camera', 'description':'Room 711', 'address': '0x6f46cf5569aefa1acc1009290c8e043747172d89'},
           {image:'device3', name:'Back door', 'description':'Room 804', 'address': '0x90e63c3d53e0ea496845b7a03ec7548b70014a91'},
           {image:'device4', name:'Lobby door', 'description':'Apartment lobby', 'address': '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e'}], 
  title: "Active devices"},

  {data: [{image:'device1', name:'Thermometer', 'description':'Living room', 'address': '0x53d284357ec70ce289d6d64134dfac8e511c8a3d'}, 
           {image:'device2', name:'Modem', 'description':'Installation required', 'address': '0xfe9e8709d3215310075d67e3ed32a380ccf451c8'},
           {image:'device3', name:'Dispenser', 'description':'Activates twice a day', 'address': '0x3d2e397f94e415d7773e72e44d5b5338a99e77d9'},
           {image:'device4', name:'Fridge', 'description':'Temperature: -4 Celcius', 'address': '0xb8487eed31cf5c559bf3f4edd166b949553d0d11'}], 
  title: "Owned devices"},
]

class MyKeyScreen extends Component {
  
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: "",
    headerBackTitle: "My Key",
    header: () => null,
  };

  renderItem = ({item, index}) => <MyKeyItem 
                            image={item.image} 
                            name={item.name} 
                            description={item.description}
                            address={item.address}
                            index={index}
                            onPress={this.props.launchDeviceActionScreen}/>                        

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} 
          style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.screenHeader}>
              My Key
          </Text>

          <Text numberOfLines={1} style={styles.screenDescription}>
              Control your devices
          </Text>

          <SectionList
            style = {styles.sectionList}
            sections={data}
            renderItem={this.renderItem}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={ (item, index) => index }
          />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => ({
  launchDeviceActionScreen: () => {
    dispatch(NavigationActions.navigate({ routeName: 'DeviceActionScreen' }));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyKeyScreen)
