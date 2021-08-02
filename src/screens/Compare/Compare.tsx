import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { ScrollView, View,Text,Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import CustomButton from '../../component/CustomButton';
import CustomHeader from '../../component/customHeader/CustomHeader';
import { openDrawer } from '../../navigation';
import { globalStyle } from '../../Styles';
import { COLOR } from '../../Theme/Colors';
import { SeeDetails, Vs } from '../../utils/constants/compare';
import { compareProduct} from '../../utils/constants/HomeConstant';
import { compareStyle } from './style';
import Table from './table';

 const CompareProduct = (SelectedItem) => {
     const {ImageView,view1,vsStyle,vsText,bannerimage,carName,locateText,pText,flexRow,buttonText}=compareStyle;
    const [ActiveIndex, setActiveIndex] = useState(0);
    const toggleButton=(i: React.SetStateAction<number>)=>{
        setActiveIndex(i);
      }
      const history=useHistory();
      const back=()=>{
        history.goBack();
      }
    return (
       <View>
           <CustomHeader
          headerStyle={{ backgroundColor: COLOR.Cultured }}
          color={COLOR.DarkCharcoal} isHome={false} title="Compare"
          onPress={back} />
         <View style={globalStyle.container}>
         <ScrollView style={{marginTop:10}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={globalStyle.flexRow}>
            {compareProduct.map((u, i) => {
              return (
                <CustomButton text={u.title}
                  onPress={()=>toggleButton(i)}
                  key={u.id} buttonStyle={i === ActiveIndex ? compareStyle.activeStyle : compareStyle.inActiveStyle}
                  textStyle={i === ActiveIndex ? globalStyle.activeText : globalStyle.inActiveText} />
              )
            })}
          </View>
        </ScrollView> 
          <View style={ImageView}>
             {  SelectedItem.SelectedItem.map((i)=>{
            return(
              <View style={view1} 
              key={i.id}
              > 
              <Image
                fadeDuration={0}
                style={bannerimage}
                source={i.src}
              />
               <View>
                <Text style={carName}>{i.Title}</Text>
                <View style={flexRow}>
                <Ionicons name="location-outline" size={14} color={COLOR.secondary} />
                  <Text style={locateText}>{i.location}</Text>
                </View>
                <View style={flexRow}>
                <TextInput.Icon name={require('../../../assets/images/icon/tag.png')} size={16} color={COLOR.primary} />
                <Text style={pText}>{i.Price} </Text>
                </View>
                <View style={flexRow}>
                    <CustomButton text={SeeDetails} textStyle={buttonText}   /> 
                    <CustomButton text="Change Car" textStyle={buttonText} linkTo="/compare"  /> 

                </View>
              
                 </View>
          </View>
      )})} 
         <View style={vsStyle}>
              <Text style={vsText}>{Vs}</Text>
          </View>
        </View>
          {
              ActiveIndex== 0 ? (
                <Table/>
              ):null
          }
        


       </View>

       </View>
    )
}
const mapStateToProps = (state) => ({
  SelectedItem: state.rootReducer.auth.SelectedItem,
});
export default (connect)(mapStateToProps)(CompareProduct);