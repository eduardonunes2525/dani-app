import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { 
    Platform,
    View,
    ScrollView,
    Text,
    StatusBar,
    SafeAreaView 
} from 'react-native';

//Import Images
import { IMAGES } from '../static/entries';

//Import Styles CSS
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles from '../styles/SliderEntry.style';


export default class SlideComponent extends React.Component {
    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    getCarousel (typeOfCarrousel) {
        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <Carousel
                  data={IMAGES}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={typeOfCarrousel}
                  loop={false}
                />
            </View>
        );
    }

    render() {
        const carousel = this.getCarousel('default');
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar hidden={true}/>
                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        { carousel }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
