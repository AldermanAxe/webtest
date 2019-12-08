import React from 'react';
import {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


export default class App extends Component {
  
  cards = [
    {
      "card_name": "AEROPLAN",
      "card_number": 188888888887
    },
    {
      "card_name": "PCOPTIMUM",
      "card_number": 144444888887
    },
    {
      "card_name": "HBC REWARDS",
      "card_number": 12123888887
    }
  ];
  
  render() {
    
    let cardlist = this.cards.map(cardInfo => (
      <Text>{cardInfo.card_name + ": " + cardInfo.card_number}</Text>
    ));
  
  
    return (
      <View style={styles.container}>
        <Text>TheLoyaltyCard.ca</Text>
        {cardlist}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
