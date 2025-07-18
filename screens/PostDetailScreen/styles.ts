import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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