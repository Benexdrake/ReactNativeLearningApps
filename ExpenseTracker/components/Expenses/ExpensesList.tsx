import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ExpenseItem from './ExpenseItem'

const renderExpenseItem = (itemData:any) =>
{
    return <ExpenseItem {...itemData.item}/>;
}


export default function ExpensesList({expenses}:any) 
{
  return (
    <FlatList 
        data={expenses} 
        renderItem={renderExpenseItem} 
        keyExtractor={(item) => item.id}/>
  )
}