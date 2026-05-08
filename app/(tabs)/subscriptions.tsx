import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";
import {Text, View} from "react-native";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

const Subscriptions = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Subscriptions</Text>
        </SafeAreaView>
    )
}
export default Subscriptions
