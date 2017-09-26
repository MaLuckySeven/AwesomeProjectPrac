import React, {Component} from 'react';
import {
    View, 
    Text, 
    Icon, 
    TouchableOpacity} from 'react-native';

export default class AddLocation extends Component{
    render(){
        return(
            <View>
              <TouchableOpacity>
                <Text style={{color:'#576166',fontSize:14,}}>
                    添加指派位置
                </Text>
              </TouchableOpacity>
            </View>
        )
    }
}