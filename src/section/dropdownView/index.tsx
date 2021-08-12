import React,{FC} from 'react'
import { View,Image } from 'react-native'
import DropDownSaim from '../../component/dropDownSaim'
import { COLOR } from '../../Theme/Colors'
import { styles } from './style'

interface DropDProps {
    Icon: any;
    Label: string;
    data: any;
    value:any;
    onChange:any;
    error:boolean;
  }
 const DropDView:FC<DropDProps> = ({Icon,Label,data,value,onChange,error}) => {
     const {Container,iconView,buttonIcon,MainViewDropDown,itemContainerDropDrown,textInputDropDown,itemTextDropDown}=styles;
    return (
        <View style={Container}>
                    <View style={iconView}>
                        <Image style={buttonIcon}
                            source={Icon} />
                    </View>
                    <View style={MainViewDropDown}>
                        <DropDownSaim
                            itemContainerStyle={itemContainerDropDrown}
                            label={Label}
                            enableSearch
                            itemTextStyle={itemTextDropDown}
                            data={data}
                            disableSort={true}
                            value={value}
                            onChange={onChange}
                            required={true}
                             error={error}
                            errorColor={COLOR.primary}
                             textInputStyle={textInputDropDown}
                        />
                    </View>
                </View>
    )
}
export default DropDView;