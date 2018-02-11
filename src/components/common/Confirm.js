import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from "./CardSection";
import { Button } from './Button'

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle} = styles;

    return(
        <Modal
            visible={visible} // we want it to be true or false
            transparent
            animationType='slide'
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection style={cardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1, // makes sure that the text will properly wrap on the page
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1, // to take a whole availiable area
        justifyContent: 'center'
    }
};

export { Confirm };