import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomAvatar from '../../component/Avatar';
import CustomText from '../../component/customText';
import { styles } from './styles';
import { ListData } from '../../utils/constants/notification';

const Notification = () => {
    return (
        <View style={styles.main}>
            <FlatList
                style={{ marginTop: hp('5%') }}
                data={ListData}
                keyExtractor={(item) => item.id.toString()}
                // ItemSeparatorComponent={() => <View style={styles.separatorView}></View>}
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
                                source={require('../../../assets/images/person.png')}
                            />
                        </View>
                        <View style={styles.infoView}>
                            <View style={styles.infomainContainer}>
                                <CustomText
                                    text={item.name}
                                    textStyle={styles.applicationNameText}
                                />
                                <Image style={styles.dotImageStyle}
                                    source={require('../../../assets/images/Oval.png')} />
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