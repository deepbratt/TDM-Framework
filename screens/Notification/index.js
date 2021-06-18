import { View ,Text} from 'react-native'
import React from 'react'
import CustomHeader from '../../Component/CustomHeader'

export default function Notification({navigation}) {
    return (
       <View style={{ flex: 1, alignItems: 'center', }}>
       <CustomHeader  isHome={true} title="Notification" onPress={()=>navigation.openDrawer()}/>
<Text >
    Notifications
</Text>
       </View>
    )
}
