import React, {Component} from 'react';
import {
    View, 
    Text, 
    Icon, 
    TouchableOpacity} from 'react-native';

export default class SelectShop extends Component{
    handleClick=()=>{

    }
    render(){
    
        return(
            <View>
              <TouchableOpacity onPress={this.handleClick}>
                <Text style={{color:'#576166',fontSize:14,}}>
                    请选择门店
                </Text>
              </TouchableOpacity>
            </View>
        )
    }
}
