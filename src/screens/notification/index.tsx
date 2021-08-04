import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomHeader from '../../component/customHeader/CustomHeader';
import { openDrawer } from '../../navigation';
import CustomAvatar from '../../component/Avatar';
import CustomText from '../../component/customText';
import { styles } from './styles';
import { ListData,OvalIcon,PersonIcon } from '../../utils/constants/notification/notification';
import { COLOR } from '../../Theme/Colors';

const Notification = () => {
    return (
        <View style={styles.main}>
            <CustomHeader
                headerStyle={{ backgroundColor:COLOR.Cultured}}
                title="Notification"
                color={COLOR.DarkCharcoal}
                isHome={true}
                onPress={() => openDrawer()}
            />
            <FlatList
                style={styles.flatListStyle}
                data={ListData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <View style={styles.avatarView}>
                            <CustomAvatar
                                overlayContainerStyle={{ backgroundColor: '#3ED598' }}
                                size={hp('9%')}
                                imageProps={styles.avatarSourceStyle}
                                rounded
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.8}
                                source={PersonIcon}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <View style={styles.infomainContainer}>
                                <CustomText
                                    text={item.name}
                                    textStyle={styles.applicationNameText}
                                />
                                <Image style={styles.dotImageStyle}
                                    source={OvalIcon} />
                                <CustomText
                                    text={item.time}
                                    textStyle={styles.timeText}
                                />
                            </View>
                            <CustomText
                                text={item.userName}
                                textStyle={styles.userNameText}
                            />
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
export default Notification;