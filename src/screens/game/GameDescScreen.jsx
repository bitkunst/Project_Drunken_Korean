import React from "react";
import { ScrollView, Text, Button, ImageBackground,View, Dimensions } from "react-native";
import { styles } from "../../public/styles";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const {width, height} = Dimensions.get('screen')

const GameDescScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="home"
          size={35}
          color="black"
          onPress={() => navigation.popToTop()}
        />
      ),
      headerLeft: () => (
        <Ionicons
          name="arrow-back"
          size={35}
          color="black"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const { content, rule, keyword } = route.params;
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/img/game_desc_bg.png')}
        style={{width:"100%", height:"100%"}}
      >
      <View style={{flexDirection:"row"}}>
        <Text style={{
            marginTop:height*0.15,
            marginLeft:width*0.1,
            // paddingLeft:10,
            // paddingRight:10,
            // paddingTop:10,
            // paddingBottom:10,
            textAlign:"center",
            borderColor:"black",
            borderWidth:3,
            fontFamily:"Deogon",
            fontSize:30,
            width:width*0.12
          }}>{keyword}</Text>
        <Text style={{
          marginLeft:width*0.2,
          marginTop:height*0.15,
          fontSize:30,
          textAlign:"right",
          width:width*0.5,
          fontFamily:"Deogon"
          }}>{rule}</Text>
      </View>
      <View>
        <ScrollView>
          <Text style={{
            fontFamily:"Deogon",
            fontSize:25,
            marginTop:height*0.1,
            marginLeft:width*0.1,
            marginRight:width*0.1,
            }}>{content}</Text>
        </ScrollView>
      </View> 
      </ImageBackground>
    </View>
  );
};


export default GameDescScreen;
