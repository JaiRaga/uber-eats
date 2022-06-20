import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  imageIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#525252',
  },
  textContainer: {
    margin: 10,
  },
  menuTitle: {
    marginVertical: 20,
    fontSize: 18,
    letterSpacing: 0.7,
  },
});

export default styles;
