import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from '../styles/SliderEntry.style';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { 
            data: { illustration },
            parallax,
            parallaxProps,
            even
        } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    getImageView(even){
        return (
            <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                { this.image }
                <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
            </View>
        );
    }

    getTitlesView(even, uppercaseTitle, subtitle){
        return (
            <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                { uppercaseTitle }
                <Text
                    style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                    numberOfLines={2}
                >
                    { subtitle }
                </Text>
            </View>
        );
    }

    render () {
        const {
            data: { title, subtitle },
            even
        } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        const imageView = this.getImageView(even);
        const titlesView = this.getTitlesView(even, uppercaseTitle, subtitle);

        return (
            <View
              style={ even ? styles.slideInnerContainer : styles.slideInnerContainerShortImages}
              >
                { imageView }
                { titlesView }
            </View>
        );
    }
}
