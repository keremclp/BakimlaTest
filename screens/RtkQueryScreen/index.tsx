import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useGetPostQuery, useGetPostsQuery } from '../../redux/services/test-api'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Post {
  id: number;
  title: string;
}
const RtkQueryScreen = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery(undefined)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {'message' in error ? error.message : 'Something went wrong'}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PostDetail', { postId: item.id })}>
            <View style={styles.postItem}>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}  
      />
    </View>
  )
}

export default RtkQueryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 10,
  },
  postItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },  
  listContainer: {
    padding: 20,
  },
})