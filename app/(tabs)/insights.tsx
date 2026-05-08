import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {Link} from "expo-router";
import {Text, View} from "react-native";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView)

const Insights = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>Insights</Text>
        </SafeAreaView>
    )
}
export default Insights
