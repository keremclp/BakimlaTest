import React from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { styles } from './styles'
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
    
    if (isLoading) return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        </SafeAreaView>
    )
    
    if (error) return (
        <SafeAreaView style={styles.container}>
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    {'message' in error ? error.message : 'Something went wrong'}
                </Text>
            </View>
        </SafeAreaView>
    )

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.postId}>Post #{postId}</Text>
                    <View style={styles.divider} />
                </View>
                
                <View style={styles.content}>
                    <Text style={styles.title}>{post?.title}</Text>
                    <Text style={styles.body}>{post?.body}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostDetailScreen