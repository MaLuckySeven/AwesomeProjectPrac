import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SelectShop from './ShopInfo';
import AddDate from './Date';
import AddLocation from './Location';
import AddUser from './SelectUser';


export default class Card extends Component{
    constructor(){
        super();
        this.state={
            mode:false,
            shopInfo:[
                {
                    id:1,
                    name:'立方庭店',
                },
                // {
                //     id:2,
                //     name:'南银店',
                // },
                // {
                //     id:3,
                //     name:'凯旋城店',
                // },
            ],
            User:[
                {
                    userID:11,
                    userNam:'张三',
                },
                {
                    userID:22,
                    userNam:'李四',
                },
                {
                    userID:33,
                    userNam:'王五',
                },
            ],
            Date:{
                start:'2017.09.06',
                end:'2017.09.10',
            },
            Location:'海龙大厦',
        }

    }
    handleClick=()=>{

    }
    render(){

        return(
        <View style={{flex:1,backgroundColor:'#000',}}>
        <View style={styles.container}>
        <View style={styles.card}>
            <TouchableOpacity>
              <View style={styles.shoplist}>
                <View style={styles.icon}>
                   <Text style={{
                       color:'#fff',
                       fontSize:13,
                       textAlign:'center'}}>店</Text>
                </View>
                <View style={styles.distance}>
                  <SelectShop  onPressShop={this.handleClick}/>
                </View>
                
              </View>
            </TouchableOpacity>
               

            <TouchableOpacity>
              <View style={styles.shoplist}>
                <View style={styles.icon}>
                  <Text style={{
                      color:'#fff',
                      fontSize:13,
                      textAlign:'center'}}>员</Text>
                </View>
                <View style={styles.distance}>
                  <AddUser />
                </View>
              </View>  
            </TouchableOpacity>
            
                
            <TouchableOpacity>
              <View style={styles.shoplist}>
                <View style={styles.icon}>
                  <Text style={{
                      color:'#fff',
                      fontSize:13,
                      textAlign:'center'}}>期</Text>
                </View>
                <View style={styles.distance}>
                  <AddDate />
                </View>
              </View>
            </TouchableOpacity>
               
            <TouchableOpacity>
              <View style={styles.shoplist}>
                <View style={styles.icon}>
                  <Text style={{
                      color:'#fff',
                      fontSize:13,
                      textAlign:'center'}}>位</Text>
                </View>
                <View style={styles.distance}>
                  <AddLocation />
                </View>
              </View>  
            </TouchableOpacity>
               
        </View>
        </View>
        </View>    
        )
    }
}

const styles=StyleSheet.create({
    
    container:{
        position:'absolute',
        bottom:9,
    },
    card:{
        width:354.5,
        paddingHorizontal:15,
        backgroundColor:'#fff',
        borderRadius:3,
    },
    shoplist:{
        flexDirection:'row',
        paddingVertical:14,
        paddingHorizontal:4,
        borderBottomWidth:1,
        borderStyle:'solid',
        borderColor:'#eee',
        alignItems:'center',

    },
    icon:{
        width:20,
        height:20,
        borderRadius:20,
        backgroundColor:'green',
        overflow:'hidden',
        justifyContent:'center',
    },
    distance:{
        marginLeft:15,
    },
})