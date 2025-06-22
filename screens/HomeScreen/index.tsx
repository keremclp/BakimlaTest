import { SafeAreaView, Text, View,Button } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/types';


const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (      
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Hello BakimlaTest!</Text>
        <Text style={styles.subtitle}>React Native is working! 🎉</Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => {
            navigation.navigate('Payment');
          }}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            title="RTK Query Test"
            color="#4CAF50"
            onPress={() => {
              navigation.navigate('RtkQuery');
            }}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen 