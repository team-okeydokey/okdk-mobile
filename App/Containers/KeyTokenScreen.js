import React, { Component } from 'react'
import { View, ScrollView, Image, Text, KeyboardAvoidingView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { VictoryArea, VictoryLine, VictoryChart, VictoryAxis, 
  VictoryZoomContainer, VictoryTheme } from "victory-native"
import Divider from '../Components/Divider'
import { Images, Colors } from '../Themes/';
import { Icon } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import RoundedButton from '../Components/RoundedButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles, {dataStyle, xAxisStyle, yAxisStyle} from './Styles/KeyTokenScreenStyle'

const chartData = [
      { x: 1, y: 2},
      { x: 2, y: 3},
      { x: 3, y: 5},
      { x: 4, y: 4},
      { x: 5, y: 6},
      { x: 6, y: 7},
      { x: 7, y: 8},
      { x: 8, y: 10},
      { x: 9, y: 11},
      { x: 10, y: 12},
      { x: 11, y: 10},
      { x: 12, y: 11},
      { x: 13, y: 13},
      { x: 14, y: 12},
      { x: 15, y: 14},
      { x: 16, y: 16},
      { x: 17, y: 18},
      { x: 18, y: 19},
      { x: 19, y: 17},
      { x: 20, y: 19},
      { x: 21, y: 20},
      { x: 22, y: 22},
      { x: 23, y: 21},
      { x: 24, y: 20},
      { x: 25, y: 18},
      { x: 26, y: 16},
      { x: 27, y: 17},
      { x: 28, y: 15},
      { x: 29, y: 16},
      { x: 30, y: 13},
      { x: 31, y: 14},
      { x: 32, y: 16},
      { x: 33, y: 18},
      { x: 34, y: 19},
      { x: 35, y: 17},
      { x: 36, y: 19},
      { x: 37, y: 20},
      { x: 38, y: 22},
      { x: 39, y: 21},
      { x: 40, y: 22},
      { x: 41, y: 23},
      { x: 42, y: 21},
      { x: 43, y: 22},
      { x: 44, y: 23},
      { x: 45, y: 20},
      { x: 46, y: 19},
      { x: 47, y: 17},
      { x: 48, y: 12},
      { x: 49, y: 16},
      { x: 50, y: 18},
    ];

class KeyTokenScreen extends Component {
  
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: <LogoTitle />,
    headerTitle: "",
    headerBackTitle: "Discover",
    header: () => null,
  };

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView 
          showsHorizontalScrollIndicator={false} 
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <KeyboardAvoidingView behavior='position'>

          <Text style={styles.screenHeader}>
              Key Token
          </Text>

          <Text numberOfLines={1} style={styles.screenDescription}>
              Latest trends in the market
          </Text>

        {/* My Wallet */}
          <View style={styles.cardSection}> 
          <LinearGradient
              style={styles.gradient}
              // colors={['#CC95C0', '#DBD4B4', '#7AA1D2']}
              colors={['#BE93C5', '#7BC6CC']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
          >
            <Text style={styles.cardHeader}>Your Wallet</Text>
            

            <View style={styles.walletItem}> 
              <View style={styles.walletItemTitle}>
                <Icon type={'material-community'} name={'coins'} size={30} color={Colors.snow}/>
              </View>

              <View style={styles.walletItemValueContainer}>
                <Text style={styles.walletItemValue}>244110</Text>
                <Text style={styles.walletItemValueUnit}>USD</Text>
              </View>
            </View>

            <View style={styles.walletItem}> 
              <View style={styles.walletItemTitle}>
                <Image
                  source={Images.logo}
                  style={styles.walletItemImage}
                  resizeMode={Image.resizeMode.cover}
                />
              </View>
              <View style={styles.walletItemValueContainer}>
                <Text style={styles.walletItemValue}>2139</Text>
                <Text style={styles.walletItemValueUnit}>KEY</Text>
              </View>
            </View>
          </LinearGradient>
          </View>
          {/* End My Wallet */}

        {/* Chart */}
        <View style={styles.tokenSection}>
        <LinearGradient
              style={styles.gradient}
              colors={['white', 'white']}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
          >

          <View style={styles.chartHeader}>
            <View style={styles.tokenValueContainer}>
              <Text style={styles.tokenValue}>
                  0.05 USD
              </Text>
              <Text style={styles.tokenDelta}>
                  (+ 30%)
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableHighlight style={styles.chartRangeButtonSelected}>
                <Text style={styles.chartRangeButtonText}>1 h</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.chartRangeButton}>
                <Text style={styles.chartRangeButtonText}>1 d</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.chartRangeButton}>
                <Text style={styles.chartRangeButtonText}>1 m</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.centered}>
              <VictoryChart 
                height={150}
                theme={VictoryTheme.material}
                containerComponent={<VictoryZoomContainer/>}
                padding={{top: 30, bottom: 40, left:40, right:40}}>
                <VictoryArea
                  animate={{
                    duration: 1000,
                    onLoad: { duration: 1000 }
                  }}  
                  style={dataStyle}
                  data={chartData}
                />
                <VictoryAxis style={xAxisStyle} />
                <VictoryAxis dependentAxis style={yAxisStyle} />

              </VictoryChart>
          </View>
        </LinearGradient>
        </View>
      {/* End Chart */}

    {/* Start Buttons */}
      <View style={styles.tokenButtonContainer}>
        <TouchableHighlight style={styles.tokenButton}>
          <View style={styles.tokenButtonTextContainer}>
            <Icon type={'material-community'} name={'menu-down-outline'} size={30} color={Colors.snow}/>
            <Text style={styles.tokenButtonText}>Buy</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.tokenButton}>
          <View style={styles.tokenButtonTextContainer}>
            <Icon type={'material-community'} name={'menu-up-outline'} size={30} color={Colors.snow}/>
            <Text style={styles.tokenButtonText}>Sell</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.tokenButton}>
          <View style={styles.tokenButtonTextContainer}>
            <Icon type={'material-community'} name={'send'} size={25} color={Colors.snow}/>
            <Text style={styles.tokenButtonText}>Send</Text>
          </View>
        </TouchableHighlight>
      </View>
    {/* End Buttons */}

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

export default connect(mapStateToProps, mapDispatchToProps)(KeyTokenScreen)
