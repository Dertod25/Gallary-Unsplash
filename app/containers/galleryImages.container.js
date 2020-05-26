import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles, colors} from '../styles/root.style';
import Swipe from '../components/swipe.component';
import LineProgress from '../components/lineProgressImage.component';
import {getImages} from '../redux/actions/gallery';
import {setStatusModal} from '../redux/actions/online';

const GalleryImages = ({route, navigation}) => {
  const [imageIndex, setImageIndex] = useState(route.params.imageIndex);
  const [onSwipe, setOnSwipe] = useState(null);
  const {maxIndex} = route.params;
  const images = useSelector((state) => state.gallery.images);
  const isLoading = useSelector((state) => state.gallery.isLoading);
  const isConnected = useSelector((state) => state.online.isConnected);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentIndex = images.length - 1 - maxIndex;
    if (currentIndex !== 0) {
      setImageIndex(currentIndex);
    }
  }, [images]);

  useEffect(() => {
    if (onSwipe === 'right') {
      if (isConnected) {
        !(imageIndex === images.length - 1) &&
          navigation.push('GalleryImages', {
            imageIndex: imageIndex + 1,
            maxIndex: images.length - 1,
            gestureDirection: 'horizontal-inverted',
            title: images[imageIndex + 1].title,
          });
      } else {
        dispatch(setStatusModal(true));
      }
    }
    if (onSwipe === 'left') {
      if (isConnected) {
        if (imageIndex === 0) {
          dispatch(getImages());
          setOnSwipe(null);
        } else {
          navigation.push('GalleryImages', {
            imageIndex: imageIndex - 1,
            maxIndex: images.length - 1,
            title: images[imageIndex - 1].title,
          });
        }
      } else {
        dispatch(setStatusModal(true));
      }
    }
  }, [onSwipe]);

  return (
    <Swipe
      style={[styles.fullFlex, styles.backgroundMain]}
      setOnSwipe={setOnSwipe}>
      <LineProgress maxPoint={images.length} pointIndex={imageIndex + 1} />
      {isLoading && <ActivityIndicator color={colors.secondary} />}
      <View style={[styles.fullFlex, styles.centerContainer]}>
        <Image
          style={styles.imageFull}
          source={{
            uri: images[imageIndex].urlImageFull,
          }}
        />
      </View>
    </Swipe>
  );
};

export default GalleryImages;
