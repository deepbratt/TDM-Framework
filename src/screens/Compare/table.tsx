import React from 'react'
import { View,Text } from 'react-native';
import { connect } from 'react-redux';
import { Doors, Drivetrain, Driving, Engine, FuelType, MaxPower, Mileage } from '../../utils/constants/compare';
import { compareStyle } from './style';

 const Table = (SelectedItem) => {
     const {tableStyle,textStyle,labelStyle}=compareStyle;
    return (
        <View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{Engine }</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
         
 
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{FuelType}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{MaxPower}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{Mileage}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{Driving}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{Drivetrain}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
        <View style={tableStyle}>
          <Text style={labelStyle}>{Doors}</Text> 
          {
          SelectedItem.SelectedItem.map((i)=>{
            return(
            <Text key={i.id} style={textStyle}>{i.KMeter} </Text> )
          })}
        </View>
          </View>
    )
}
const mapStateToProps = (state) => ({
  SelectedItem: state.rootReducer.auth.SelectedItem,
});
export default (connect)(mapStateToProps)(Table);