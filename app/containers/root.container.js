import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {useNetInfo} from '@react-native-community/netinfo';
import GalleryList from './galleryList.container';
import ConnectionModal from '../components/connectionModal.component';
import GalleryImages from './galleryImages.container';
import {forHorizontalModal} from '../helpers/horizontalTransition.helper';
import {setStatusConnection} from '../redux/actions/online';
import {styles, colors} from '../styles/root.style';

const Stack = createStackNavigator();

function Root() {
  const netInfo = useNetInfo();
  const dispatch = useDispatch();
  useEffect(() => {
    netInfo.details && dispatch(setStatusConnection(netInfo.isConnected));
  }, [netInfo]);

  return (
    <>
      <ConnectionModal />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GalleryList">
          <Stack.Screen
            name="GalleryList"
            component={GalleryList}
            options={{
              title: 'Gallery Unsplash',
              headerTintColor: colors.main,
              headerStyle: styles.backgroundMain,
            }}
          />
          <Stack.Screen
            name="GalleryImages"
            component={GalleryImages}
            options={({route, navigation}) => ({
              title: route.params.title || 'Image',
              headerTintColor: colors.main,
              headerStyle: styles.backgroundMain,
              headerLeft: () => (
                <HeaderBackButton
                  tintColor={colors.secondary}
                  onPress={() => navigation.navigate('GalleryList')}
                />
              ),
              gestureDirection: route.params.gestureDirection || 'horizontal',
              cardStyleInterpolator: forHorizontalModal,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Root;
