import React, {Component} from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import List from './app/containers/galleryList.container';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const AccessKey =
  '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
const unsplash = new Unsplash({accessKey: AccessKey});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    unsplash.photos
      .getRandomPhoto({count: 15})
      .then(toJson)
      .then((json) => {
        console.log('-------------', json);
        const list = [];
        json.map((item) =>
          list.push({
            id: item.id,
            urlImage: item.urls.small,
            urlImageFull: item.urls.full,
            author: item.user.name,
          })
        );
        this.setState({list});
      });
  }

  render() {
    return (
      <ScrollView>
        <List items={this.state.list} />
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Step One</Text>
          <Text style={styles.sectionDescription}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
