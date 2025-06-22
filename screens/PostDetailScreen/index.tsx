import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetPostQuery } from '../../redux/services/test-api'
import { useRoute, RouteProp } from '@react-navigation/native'

// Define the route params type
type PostDetailRouteParams = {
  PostDetail: {
    postId: number;
  };
};

type PostDetailRouteProp = RouteProp<PostDetailRouteParams, 'PostDetail'>;

const PostDetailScreen = () => {
    const route = useRoute<PostDetailRouteProp>();
    const { postId } = route.params;
    
    const { data: post, isLoading, error } = useGetPostQuery(postId) 
    
    if (isLoading) return <Text>Loading...</Text>
    if (error) return <Text>Error: {'message' in error ? error.message : 'Something went wrong'}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Detail</Text>
      <Text style={styles.subtitle}>{post?.title}</Text>
      <Text style={styles.body}>{post?.body}</Text>
    </View>
  )
}

export default PostDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginTop: 10,
    },
    body: {
        fontSize: 16,
        color: '#444',
        marginTop: 15,
        textAlign: 'center',
    },
})