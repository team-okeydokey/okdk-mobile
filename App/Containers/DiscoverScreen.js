import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, 
  KeyboardAvoidingView, SectionList, FlatList } from 'react-native'
import DiscoverItem from '../Components/DiscoverItem'
import Banner from '../Components/Banner'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { SearchBar } from 'react-native-elements'
import { Icon } from 'react-native-elements'
import { Colors } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/DiscoverScreenStyle'

const data = [
  {data: [[{image:'device1', title:'device1', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 'price': '$ 9.99', 'hearts':'5450'}, 
           {image:'device2', title:'device2', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol.', 'price': '$ 10.99', 'hearts':'33'},
           {image:'device3', title:'device3', 'description':'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', 'price': '$ 3.99', 'hearts':'14123'},
           {image:'device4', title:'device4', 'description':'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', 'price': '$ 2.99', 'hearts':'23'}]], 
  title: "Curated for you"},

  {data: [[{image:'device1', title:'device1', 'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 'price': '$ 9.99', 'hearts':'419'}, 
           {image:'device2', title:'device2', 'description':'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol.', 'price': '$ 9.99', 'hearts':'125'},
           {image:'device3', title:'device3', 'description':'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.', 'price': '$ 9.99', 'hearts':'45'},
           {image:'device4', title:'device4', 'description':'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.', 'price': '$ 9.99', 'hearts':'12'}]], 
  title: "Editor's picks"},
]

class DiscoverScreen extends Component {

  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: "",
    headerBackTitle: "Discover",
    header: () => null,
  };

  renderItem = ({item}) => <DiscoverItem 
                            image={item.image} 
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            hearts={item.hearts}/>

  renderSectionListItem = ({item}) => {
    return (
        <FlatList
            data={item}
            numColumns={2}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
        />
    )
  }

  render () {

    return (
      <View style={styles.mainContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false} 
          style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <View style={styles.headerContainer}>
            <Text style={styles.screenHeader}>
              Discover
            </Text>

            <Icon type={'evilicon'} name={'search'} size={30} color={Colors.textDarkEmphasis} style={{marginTop:25}}/>
          </View>

          <Banner />

          <SectionList

          style = {styles.sectionList}
 
          sections={data}
 
          renderSectionHeader={ ({section}) => <Text style={styles.sectionHeader}> { section.title } </Text> }
 
          renderItem={this.renderSectionListItem}

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
  onInbox: () => {
    dispatch(NavigationActions.navigate({routeName: 'WelcomeScreen'}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverScreen)
