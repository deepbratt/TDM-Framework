import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { TextInput } from 'react-native-paper'
import CustomInput from '../../../component/CustomInput/CustomInput'
import InboxBox from '../../../component/inboxBox'
import HeadingSection from '../../../section/CustomHeading/Heading'
import { globalStyle } from '../../../Styles'
import { chatList } from '../../../utils/constants/CarsText'
import { inboxStyle } from './style'
 const Inbox = () => {
     const {Margin}=inboxStyle;
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
    return (
        <View  style={globalStyle.container}>
        <View style={[globalStyle.inputView,Margin]}>
       <CustomInput
         placeholder="Search"
         style={globalStyle.searchStyle}
         value={searchQuery}
         onChange={onChangeSearch}
         leftIcon={
           <TextInput.Icon
             size={18}
             name={require('../../../../assets/images/homepage/search.png')}
           />
         }
         rightIcon={
           <TextInput.Icon
             size={18}
             name={require('../../../../assets/images/homepage/filter.png')}
           />
         }
       />
     </View>
     <View>
     {
    chatList.map((i)=>{
        return(
          <InboxBox
          key={i.id} 
          User={i.User} 
          Msg={i.Msg}
          Audio={i.Audio}
           attach={i.attach}
           Time={i.Time}
           count={i.count}
           src={i.src}
           status={i.status}
           color={i.color}
           Incoming={i.Incoming}
           seen={i.seen}
           onPress={()=>console.log("press")}
          />

        );
    })
}
     </View>
        </View>
    )
}
export default Inbox;