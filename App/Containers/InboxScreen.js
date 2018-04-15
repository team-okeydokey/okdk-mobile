import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, SectionList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import ChatListItem from '../Components/ChatListItem'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InboxScreenStyle'

const data = [
  {data: [{name:'Aquafina Water', 'latest':'Room 711', 'address': '0x281055Afc982d96fAB65b3a49cAc8b878184Cb16', 'date': '1m ago'}, 
           {name:'Coca cola', 'latest':'Room 711', 'address': '0x6f46cf5569aefa1acc1009290c8e043747172d89', 'date': '3m ago'},
           {name:'Dr. Pepper', 'latest':'Room 804', 'address': '0x90e63c3d53e0ea496845b7a03ec7548b70014a91', 'date': '32m ago'},
           {name:'Evian', 'latest':'Apartment lobby', 'address': '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e', 'date': '1h ago'},
           {name:'Deer Park', 'latest':'Living room', 'address': '0x53d284357ec70ce289d6d64134dfac8e511c8a3d', 'date': '2h ago'}, 
           {name:'Lulu Lemon', 'latest':'Installation required', 'address': '0xfe9e8709d3215310075d67e3ed32a380ccf451c8', 'date': '3d ago'},
           {name:'OkeyDokey Admin', 'latest':'Activates twice a day', 'address': '0x3d2e397f94e415d7773e72e44d5b5338a99e77d9', 'date': '3d ago'},
           {name:'Chatbot', 'latest':'Temperature: -4 Celcius', 'address': '0xb8487eed31cf5c559bf3f4edd166b949553d0d11', 'date': '3 / 15'}], 
  title: "Active devices"},
]


class InboxScreen extends Component {
  
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: "",
    headerBackTitle: "Discover",
    header: () => null,
  };

  renderItem = ({item, index}) => <ChatListItem 
                            name={item.name} 
                            latest={item.latest}
                            address={item.address}
                            date={item.date}
                            index={index}/>

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.screenHeader}>
              Inbox
          </Text>
          <Text numberOfLines={1} style={styles.screenDescription}>
              Message your sellers and buyers
          </Text>
            
          <SectionList
            style = {styles.sectionList}
            sections={data}
            renderItem={this.renderItem}
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

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InboxScreen)
