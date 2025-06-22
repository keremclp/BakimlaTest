import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
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

// ...existing code...
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        marginBottom: 30,
        alignItems: 'center',
    },
    postId: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6c757d',
        backgroundColor: '#e9ecef',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
    divider: {
        width: 50,
        height: 3,
        backgroundColor: '#007bff',
        borderRadius: 2,
        marginTop: 15,
    },
    content: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#212529',
        lineHeight: 36,
        marginBottom: 20,
        textAlign: 'center',
    },
    body: {
        fontSize: 16,
        color: '#495057',
        lineHeight: 26,
        textAlign: 'center',
        letterSpacing: 0.3,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    loadingText: {
        fontSize: 18,
        color: '#6c757d',
        fontWeight: '500',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    errorText: {
        fontSize: 16,
        color: '#dc3545',
        textAlign: 'center',
        backgroundColor: '#f8d7da',
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#f5c6cb',
    },
})