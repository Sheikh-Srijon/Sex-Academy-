import React, { useState, useEffect} from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import metrics from '../../Themes/Metrics';
import BackButton from '../BackButton';
import BottomBar from '../BottomBar';
import StoryHeader from '../StoryHeader';
import BottomButton from '../BottomButton';

import { Divider } from 'react-native-elements'; //for textbox 
import StoryButtons from '../StoryButtons';
import Share from '../Share';
import { BottomSheet } from 'react-native-elements';
import { set } from 'react-native-reanimated';

import StorySave from './StorySave';
import SecretSharerFirst from './SecretSharerFirst';

//props.navigation 



export default function JournalEntry(props) {
    const [title, setTitle] = useState('');
    const [mood, setMood] = useState("");
    const [journal, setJounral] = useState("Write here...");
    const [isVisible, setIsVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);
    const [response, setResponse] = useState(false);
    const [hasShared, setHasShared] = useState(false);
    const [hasSaved, setHasSaved] = useState(false);
    const[cancel, setCancel] =useState(false);
    const [shout,setShout] = useState(false);
    



    useEffect(() => {

        if (response === true) {
            setRightVisible(false);
            props.navigation.navigate('Response');
        }

    })

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.container}> */}

            {/* <StoryHeader /> */}
            <View style={styles.body}>
                <View style={styles.prompt}>
                    <Text style={{ fontSize: 21, }}>Only you can view your story, unless you choose to
                    share it with others.
                        </Text>
                    <View style={styles.textView}>
                        <View style={styles.label}>
                            <Text>Title   </Text>
                        </View>
                        <Text>:  </Text>

                        <TextInput
                            style={styles.textBox}
                            onChangeText={() => { setTitle({ title }) }}
                            value={title}
                        />


                    </View>

                    <View style={styles.textView}>
                        <View style={styles.label}>
                            <Text>My mood   :</Text>
                        </View>
                        <Text>:  </Text>
                        {/* <Divider style={{ backgroundColor: 'blue' }} /> */}
                        <TextInput
                            style={styles.textBox}
                            onChangeText={() => { setMood({ mood }) }}
                            value={mood}
                        />


                    </View>
                    <View style={styles.textView}>
                        <Image source={require('../../assets/journalLayout.png')} />
                    </View>
                    <View style={styles.boxView}>
                        <TextInput
                            style={styles.box}
                            onChangeText={() => { setJounral({ journal }) }}
                            value={journal}
                            multiline={true}
                            scrollEnabled={true}
                            blurOnSubmit={true}
                            returnKeyLabel='done'
                        />

                    </View>

                    {/* <View style ={styles.box}></View> */}

                    <View style={styles.buttonBar}>
                        <StoryButtons title={'Save'}
                          hasShared= {null}
                            callback={() => {
                                if (!hasSaved) {
                                    //    return <Share/>
                                    console.log('share p');
                                    setIsVisible(true);
                                    setHasSaved(true);
                                }else{
                                    alert('You have saved this already!');
                                    
                                    
                                    // setTimeout((()=>{
                                    //     props.navigation.navigate('Response');
                                    // }),2000);
                                }


                            }}

                        />

                        {/* <StoryButtons title={'Share'}
                            hasShared={()=>{setHasShared(true)}}
                            callback={() => {
                                console.log('share btn ', hasShared);
                                if (!hasShared) {
                                    //    return <Share/>
                                    console.log('share p');
                                    setRightVisible(true);
                                    setHasShared(true);  
                                    // out for debugging share bug

                                }
                                else {
                                    // alert("You have shared this already!");
                                     alert('You have shared it alrady');
                                }

                            }}
                        /> */}
                        <StoryButtons 
                        title={'Share'} 
                        //process a modal 
                        callback={()=>{ 
                            //display a modal 
                            if(!hasShared){
                                setRightVisible(true);
                            }
                            else{
                                alert('You have shared it already')
                            }

                        }}


                        />
                    </View>


                </View>

            </View>
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)', borderRadius: 10 }}>
                <StorySave
                    text='Your story is saved!'
                    callback={() => {setIsVisible(false); 
                    // const time = setTimeout( ()=>{props.navigation.navigate('Response')},3000);
                    // clearTimeout(time);
                }

                    }
                />
                {console.log('isVisible ', isVisible)}


            </BottomSheet>

            <BottomSheet
                isVisible={rightVisible}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)', borderRadius: 10 }}>
                <SecretSharerFirst
                    callback={() => {
                        setRightVisible(false);
                        props.navigation.navigate('JournalEntry');
                        console.log('callback called secretsharer');
                        

                    }}
                    transition={() => {
                        
                        setRightVisible(false);
                        setResponse(true);
                        // props.navigation.navigate('Response');
                       
                        // console.log('transition test', response);
                    }}

                />
                {console.log('rightVisible', rightVisible)}

                {/* share (modal)  -> cancel btn & response btn -> cancel pressed )share modal invisible */}



            </BottomSheet>


            {/* <BottomSheet
             isVisible={shout}
             containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)', borderRadius: 10 }}
            >
            <StorySave 
            text='You have shared this already'
            callback={()=>{setShout(false); 
            props.navigation.navigate(response);
            }}
            />

            </BottomSheet> */}



            <BottomBar props={props}/>

            {/* </View> */}


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // width: metrics.screenWidth,
        justifyContent: 'space-between',
        // backgroundColor: 'red',

    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,

    },
    textView: {
        //for textBox
        color: 'gray',
        flexDirection: 'row',
        alignSelf: 'center',
        height: 44,
        width: metrics.screenWidth * 0.8,
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.screenWidth * .6 * 0.05,

        // backgroundColor: '#FFF3F8',
    },//for label of textinput
    label: {
        marginRight: 10,
        flex: 2,

        // backgroundColor:'blue',

    },
    textBox: {
        flex: 8,
    },
    box: {
        // flex:1,
        // justifyContent:'flex-start',
        // alignItems:'flex-start',
        //  backgroundColor:'green',

        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexWrap: 'wrap',
        backgroundColor: '#F2F2F2',
        width: metrics.screenWidth * .9,
        height: metrics.screenHeight * .4,
        fontSize: 15,
        // backgroundColor:'red',

    },
    boxView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    buttonBar: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },


})

