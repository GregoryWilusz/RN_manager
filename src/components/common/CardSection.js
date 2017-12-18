import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return (
      // trick in RN, style prop below (that gets passed to any primitive element lik View or Text) can take an array of styles!
      // then the style most to the right will overwrite any style on the left!!!
      <View style={[styles.containerStyle, props.style]}>
          {props.children}
      </View>
  );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
};

export { CardSection };