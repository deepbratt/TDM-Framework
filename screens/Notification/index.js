import { View ,Text} from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'

export default function Notification({navigation}) {
    return (
        
      
       <CustomHeader  isHome={true} title="Notification" onPress={()=>navigation.openDrawer()}>
        <View style={{ flex:1,justifyContent:"center",alignItems:"center" }}>
<Text >
    Notifications
</Text>
<Text >
    Notifications
</Text>
</View>
       </CustomHeader>
      
    )
}
