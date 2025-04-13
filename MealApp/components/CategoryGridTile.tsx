import { Pressable, Text, View } from "react-native";

export default function CategoryGridTile({title, color}:any)
{
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}