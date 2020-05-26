import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  ScrollView,
  TouchableHighlight,
  RefreshControl,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListItem from '../components/listItem.component';
import {getImages} from '../redux/actions/gallery';
import {setStatusModal} from '../redux/actions/online';
import {styles, colors} from '../styles/root.style';

const GalleryList = ({navigation}) => {
  const scrollViewRef = useRef();
  const images = useSelector((state) => state.gallery.images);
  const isLoading = useSelector((state) => state.gallery.isLoading);
  const isConnected = useSelector((state) => state.online.isConnected);
  const isRecovery = useSelector((state) => state.online.isRecovery);
  const [currentContentHeight, setCurrentContentHeight] = useState(0);
  const dispatch = useDispatch();
  const onRefresh = () => {
    isConnected ? dispatch(getImages()) : dispatch(setStatusModal(true));
  };
  useEffect(() => {
    if (isRecovery) {
      dispatch(setStatusModal(true));
    } else {
      if (isConnected === true) dispatch(getImages());
      if (isConnected === false) dispatch(setStatusModal(true));
    }
  }, [isConnected]);

  return (
    <ScrollView
      style={styles.backgroundMain}
      ref={scrollViewRef}
      onContentSizeChange={(contentWidth, contentHeight) => {
        let offsetY = contentHeight - currentContentHeight;
        setCurrentContentHeight(contentHeight);
        scrollViewRef.current.scrollTo({y: offsetY - 100, animated: false});
      }}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          colors={[colors.secondary]}
        />
      }>
      {(images &&
        images.length > 0 &&
        images.map((image, i) => (
          <TouchableHighlight
            key={image.id + i}
            underlayColor={colors.mainLight}
            onPress={() =>
              isConnected
                ? navigation.navigate('GalleryImages', {
                    imageIndex: i,
                    maxIndex: images.length - 1,
                    title: image.title,
                  })
                : dispatch(setStatusModal(true))
            }>
            <ListItem image={image} />
          </TouchableHighlight>
        ))) ||
        (isConnected !== null && !isLoading && (
          <View style={[styles.fullFlex, styles.centerContainer]}>
            <Text style={styles.notificationText}>Pull down to refresh</Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default GalleryList;
