import { Text, View, FlatList, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2024-03-21')
    },
    {
        id:'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2025-04-22')
    },
    {
        id:'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2025-04-22')
    },
    {
        id:'e4',
        description: 'A book',
        amount: 15.99,
        date: new Date('2025-03-01')
    },
    {
        id:'e5',
        description: 'Another book',
        amount: 25.99,
        date: new Date('2025-04-22')
    },
    {
        id:'e6',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2025-04-22')
    },
    {
        id:'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2025-04-22')
    },
    {
        id:'e8',
        description: 'A book',
        amount: 15.99,
        date: new Date('2025-03-01')
    },
    {
        id:'e9',
        description: 'Another book',
        amount: 25.99,
        date: new Date('2025-04-22')
    }
];

export default function ExpensesOutput({expenses, expensesPeriod}:any)
{
    expenses = DUMMY_EXPENSES;
    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
        <ExpensesList expenses={expenses}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});