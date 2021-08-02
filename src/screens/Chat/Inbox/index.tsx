import React, { useState } from 'react'
import { View} from 'react-native'
import CustomSearch from '../../../component/CustomSearch'
import InboxBox from '../../../component/inboxBox'
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
        <CustomSearch    value={searchQuery}
            onChange={onChangeSearch}/>
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
           onPress={()=>console.log("pressz")}
          />
        );
    })
}
     </View>
        </View>
    )
}
export default Inbox;