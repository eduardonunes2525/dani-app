import React from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { ENTRIES1 } from '../static/entries';
import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles from '../styles/SliderEntry.style';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';


export default class SlideComponent extends React.Component {
    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    layoutExample (type) {
        return (
            <View style={[styles.exampleContainer, styles.exampleContainerLight]}>
                <Carousel
                  data={ENTRIES1}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout={'default'}
                  loop={true}
                />
            </View>
        );
    }

    render() {
        const example3 = this.layoutExample('stack');
        
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <StatusBar
                        translucent={true}
                        backgroundColor={'rgba(0, 0, 0, 0.3)'}
                        barStyle={'light-content'}
                    />
                    <ScrollView
                        style={styles.scrollview}
                        scrollEventThrottle={200}
                        directionalLockEnabled={true}
                    >
                        { example3 }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
