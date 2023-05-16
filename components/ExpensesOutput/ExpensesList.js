import { FlatList } from "react-native";

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>;
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} render={renderExpenseItem} />;
}

export default ExpensesList;
