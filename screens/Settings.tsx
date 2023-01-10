import { View } from "react-native";
import { ListItem } from "../components/ListItem";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";

export const Settings = () => (
  <View
    style={{
        margin:16,
        borderRadius:11,
        overflow:'hidden',
        flexDirection: "column",
    }}
  >
    <ListItem
      label="Categories"
      detail={<Entypo name="chevron-thin-right" color="#8a8a8a"  size={20} />}
      onClick={() => {}}
    />
    <ListItem
      label="Erase all data"
      isDestructive
      onClick={() => {}}
    />
  </View>
);
