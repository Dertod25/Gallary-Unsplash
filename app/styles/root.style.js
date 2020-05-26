import {StyleSheet} from 'react-native';
import {metrics} from '../config/app.config';

const fontSizes = {
  small: metrics.em(0.8),
  medium: metrics.em(1),
  large: metrics.em(1.2),
};

export const colors = {
  main: '#493e76',
  mainLight: 'rgba(73,62,118,0.3)',
  mainUltraLight: 'rgba(73,62,118,0.1)',
  secondary: '#a73f59',
  transparent: 'rgba(0,0,0,0)',
  warning: '#dc3545',
  success: '#129f1b',
};

export const styles = StyleSheet.create({
  backgroundMain: {
    backgroundColor: colors.mainUltraLight,
  },
  fullFlex: {
    flex: 1,
    backgroundColor: colors.transparent,
  },
  centerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  listItemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  listItemTextContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    marginLeft: 10,
    marginRight: 10,
  },
  listItemTitle: {
    color: colors.main,
    fontSize: fontSizes.medium,
  },
  listItemAuthor: {
    color: colors.secondary,
    fontSize: fontSizes.small,
  },
  lineProgressContainer: {
    backgroundColor: colors.main,
    zIndex: 10,
  },
  lineProgress: {
    height: 2,
    width: 50,
    backgroundColor: colors.warning,
  },
  imageFull: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  notificationContainer: {
    width: '100%',
    height: metrics.navBarHeight,
  },
  backgroundWarning: {backgroundColor: colors.warning},
  backgroundSuccess: {backgroundColor: colors.success},
  notificationText: {
    fontSize: fontSizes.medium,
    color: colors.main,
    alignSelf: 'center',
  },
});
