import { PropsWithChildren } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Header({ count }: PropsWithChildren<{ count: number }>) {
    return <View style={styles.container}>
        <View style={styles.aside}>
            <Text style={styles.subtitle}>Welcome, Chris</Text>
            <Text style={styles.title}>Your Tasks <Text style={{ fontFamily: "Product-Sans-Regular" }}>({count})</Text></Text>
        </View>
        <View style={styles.avatarContainer}>
            <Image src="https://randomuser.me/api/portraits" style={{ width: 48, height: 48 }} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomColor: "lightgray",
        borderBottomWidth: 1
    },
    aside: {
    },
    title: {
        fontSize: 24,
        letterSpacing: -1,
        fontFamily: "Product-Sans-Bold",
        color: 'black'
    },
    subtitle: {
        fontSize: 16,
        letterSpacing: -.2,
        fontFamily: "Product-Sans-Regular",
    },
    avatarContainer: {
        width: 48,
        height: 48,
        borderRadius: 30,
        backgroundColor: "lightgrey",
    }
})