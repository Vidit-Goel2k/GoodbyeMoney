import ExpensesIcon from '@expo/vector-icons/MaterialCommunityIcons';
import ReportsIcon from '@expo/vector-icons/Ionicons';
import AddIcon from '@expo/vector-icons/AntDesign';
import SettingsIcon from '@expo/vector-icons/Fontisto';


type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
  type: "expenses" | "reports" | "add" | "settings";
};

export const TabBarIcon = ({ type, color, size }: TabBarIconProps) => {
  switch (type) {
    case "reports":
      return <ReportsIcon name="bar-chart" size={size} color={color} />;
    case "expenses":
      return <ExpensesIcon name="tray-arrow-up" size={size} color={color} />;
    case "add":
      return <AddIcon name="plus" size={size} color={color} />;
    case "settings":
      return <SettingsIcon name="player-settings" size={size} color={color} />;

    default:
      return null;
  }
};
