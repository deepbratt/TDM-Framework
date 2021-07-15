import React,{useCallback} from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomAvatar from '../../component/Avatar';
import CustomText from '../../component/customText';
import { styles } from './styles';

const exampleItems = [
    { id: '1', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '2', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '3', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '4', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '5', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '6', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '7', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '8', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '9', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '10', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '11', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '12', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
    { id: '13', name: "Application name", time: "now", userName: 'Hi Anastassia!' },
];

const Notification = () => {
    return (
        <View style={styles.main}>
            <FlatList
                style={{ marginTop: hp('5%') }}
                data={exampleItems}
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