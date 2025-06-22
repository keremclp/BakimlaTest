import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { 
  useGetPostsQuery, 
  useCreatePostMutation, 
  useDeletePostMutation 
} from '../../redux/services/test-api'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Post {
  id: number;
  title: string;
  body?: string;
  userId?: number;
}

const RtkQueryScreen = () => {
  const [newPostTitle, setNewPostTitle] = useState('');
  const { data: posts, isLoading, error } = useGetPostsQuery(undefined)
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation()
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log('newPostTitle:', newPostTitle);
  const handleCreatePost = async () => {
    if (!newPostTitle.trim()) {
      Alert.alert('Error', 'Please enter a post title');
      return;
    }

    try {
      await createPost({
        title: newPostTitle,
        body: 'This is a new post created from the app',
        userId: 1,
      }).unwrap();
      
      setNewPostTitle('');
      Alert.alert('Success', 'Post created successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to create post');
    }
  };

  const handleDeletePost = async (postId: number) => {
    try {
      await deletePost(postId).unwrap();
      Alert.alert('Success', 'Post deleted successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete post');
    }
  };

  if (isLoading) return <Text>Loading...</Text>
  if (error) return <Text>Error: {'message' in error ? error.message : 'Something went wrong'}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      
      {/* Add new post section */}
      <View style={styles.addPostContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter post title"
          value={newPostTitle}
          onChangeText={setNewPostTitle}
        />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={handleCreatePost}
          disabled={isCreating}
        >
          <Text style={styles.addButtonText}>
            {isCreating ? 'Creating...' : 'Add Post'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('PostDetail', { postId: item.id })}
              style={styles.postContent}
            >
              <Text style={styles.postTitle}>{item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeletePost(item.id)}
              disabled={isDeleting}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
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
  addPostContainer: {
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postContent: {
    width: '80%',
    paddingRight: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 8,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
})