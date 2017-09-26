import React, {Component} from 'react';
import {
    View, 
    Text, 
    Icon, 
    TouchableOpacity} from 'react-native';
import EditName from './EditName';

export default class AddUser extends Component{
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center'}}>
              {/* <TouchableOpacity>
                <Text>
                    添加客户经理
                </Text> 
              </TouchableOpacity> */}
              <EditName />
            </View>
        )
    }
}