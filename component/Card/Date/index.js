import React, {Component} from 'react';
import {
    View, 
    Text, 
    Icon, 
    TouchableOpacity} from 'react-native';

export default class AddDate extends Component{
    handleClick=()=>{
        const {onPressDate}=this.props;

    }
    render(){
        return(
            <View>
              <TouchableOpacity onPress={this.handleClick}>
                <Text style={{color:'#576166',fontSize:14,}}>
                    添加日期范围
                </Text>
              </TouchableOpacity>
            </View>
        )
    }
}