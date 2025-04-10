import { StyleSheet, View,ImageBackground } from 'react-native';
import { CardsList, SharedLayout } from '../shared';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SettingsStackType } from '../../navigation/types';

const SettingsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<SettingsStackType>>();

  return (
    <View style={{flex:1}}>
          <ImageBackground
            style={{ flex: 1 }}
        source={require('../../assets/Background.png')}>
        <SharedLayout
      isBtn
      title="Settings"
      btnText="Stats"
      onPress={() => navigation.navigate('STATS_SCREEN')}
    >
      <View style={styles.container}>
        <CardsList />
      </View>
    </SharedLayout>
      </ImageBackground>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
});

export default SettingsScreen;
