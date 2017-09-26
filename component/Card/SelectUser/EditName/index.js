import React, {Component} from 'react';
import {
    View, 
    Text, 
    Icon, 
    TouchableOpacity,
    StyleSheet} from 'react-native';


export default class EditName extends Component{
    render(){
        return(
            <View style={styles.container}>
                 <View style={styles.editname}>
                    <Text style={{color:'#576166',fontSize:14}}>
                    名字
                    <Text style={styles.delete}>X</Text>
                    </Text>
                </View>
                <View style={styles.editname}>
                    <Text style={{color:'#aaa'}}>
                    <Text style={styles.add}>+</Text>
                       添加
                    </Text>
                </View>
            </View>
            
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',

    },
    editname:{
        width:65,
        height:29,
        // padding:5,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#ccc',
        borderRadius:3,
        marginRight:5,
        justifyContent:'center',
        alignItems:'center',

    },
    delete:{
        fontSize:14,
        color:'#B1B5B8',
        
    },
    add:{
        fontSize:14,
        color:'#B1B5B8'
    },
})