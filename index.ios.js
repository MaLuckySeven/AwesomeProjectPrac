/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Card from './component/Card/index';













AppRegistry.registerComponent('AwesomeProject', () => Card);


// export default class AwesomeProject extends Component {
//   constructor(){
//     super();
//     this.state={
//       activeItem: '待认领',
//       navbars:[
//            {
//                text: '待认领',
//                amount: 10,
//            }, {
//                text: '待配送',
//                amount: 5,
//            }, {
//                text: '配送中',
//                amount: 1,
//            },{
//                text: '更多',
//                amount: 0,
//            }
//        ], 
//        list:[
//         {
//            address:'太阳宫长远天地大厦B座7层1203室',
//            phone:'138-1144-', 
//            lastnum:'8670',
//            name:'周女士',
//         },    
       
//     ],
//     list:[
//       {
//          address:'太阳宫长远天地大厦B座7层1203室',
//          phone:'138-1144-', 
//          lastnum:'8670',
//          name:'周女士',
//       },    
     
//   ],

//     content:[
//       {
//           goods:'便利蜂全麦夹心牛角包',
//           amount:'X2',

//       },
//       {
//           goods:'蒙牛特仑苏牛奶',
//           amount:'X1',
//       },
//       {
//           goods:'娃哈哈矿泉水',
//           amount:'X1',
//       }
//   ],
//   remark:'餐到了，请及时给我打电话，谢谢！',
//   others:[
//       {
//           listnum:'12345671234567',
//           listtime:'2017.01.28 16:46',
//       }
//   ],

//     }
//   }

//   _onPressButton=(item)=>{
//     this.setState({
//       activeItem:item.text,
//     })
    
//   }
//   render() {
//     return (

//       <View style={styles.container}>
//         <View style={styles.longnavbar}>
//           {this.state.navbars.map((item,index)=>
//               (<NavBar
//                 key={index} 
//                 navbars={this.state.navbars} 
//                 activeItem={this.state.activeItem} 
//                 item={item}
//                 _onPressButton={this._onPressButton}
//                />
//               )
//             )
//           } 
//         </View>
//         <View>
//           {
//             this.state.list.map((item,index)=>(<List 
//                                               key={index} 
//                                               item={item}
//                                               address={this.state.address}
//                                               content={this.state.content}
//                                               remark={this.state.remark}
//                                               others={this.state.others}/>))
//           }
          
//         </View>
        
//         </View>

//     );
//   }
// }

// class ListContent extends Component{

//   render(){
//     const {item}=this.props;
//     const {content,remark,others}=this.props;
//     return(
//       <View style={styles.Listcontent}>
//         <View style={{paddingHorizontal:10,paddingVertical:5, borderTopWidth:1,borderStyle:'solid',borderColor:'#f0f0f0',}}>
//           <Text style={{fontSize:13,color:'#cccccc',}}>商品明细</Text>
//         </View>
//         <View style={{paddingVertical:15,paddingHorizontal:10}}>
//           <Text style={{fontSize:18,}}>单品</Text>
//         </View>
//         <View style={styles.allgoods}>
//           {
//             content.map((item,index)=>(
//               <View key={index} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingVertical:5,paddingHorizontal:10}}>
//                 <Text style={{fontSize:13,color:'#333'}}>
//                   {item.goods}  
//                 </Text> 
//                 <Text style={{marginRight:20,fontSize:13,color:'#333'}}>
//                   {item.amount}
//                 </Text>
//               </View>
              

//             ))
//           }
         
//         </View>
//         <View style={{paddingHorizontal:10,}}>
//         <View style={{paddingVertical:10,paddingHorizontal:5,borderTopWidth:1,borderStyle:'solid',borderColor:'#f0f0f0',borderBottomWidth:1,borderStyle:'solid',}}>
//           <Text style={{fontSize:13,color:'#aaa',paddingVertical:5,}}>备注</Text>
//           <Text style={{marginTop:10,fontSize:13,}}>{remark}</Text>
//         </View>
//         </View>
//         <View style={{padding:10}}>
//           {
//             others.map((item,index)=>(
//               <View key={index} item={item}>
//                 <Text style={{padding:3,fontSize:13,}}>订单编号：{item.listnum}</Text>
//                 <Text style={{padding:3,fontSize:13,}}>下单时间：{item.listtime}</Text>
//               </View>
//             ))
//           }
         
//         </View>
//       </View>
//     )
//   }
// }

// class List extends Component{

//   constructor(){
//     super();
//     this.state={
//       isClicked:false,
//     }
//   }
//   handleClick=()=>{
//     this.setState({
//       isClicked:!this.state.isClicked,
//     })
//   }
//   render(){
//     const {list,content,remark,others}=this.props;
//     const {item}=this.props;
//     const isClicked=this.state.isClicked;
//     return(
//       <View style={styles.listall}>
//         <View style={{paddingHorizontal:5,}}>
//         <View style={styles.listitem}>
//           <View style={styles.icons}>
//            <Text style={{textAlign:'center',fontSize:13,color:'#ffffff',}}>址</Text>
//           </View>
//           <Text style={{marginLeft:-55,}}>{item.address}</Text>
//           {
//             isClicked? (<TouchableOpacity  onPress={this.handleClick}>
//             <Text style={{}}>收起
//               <Text style={{fontSize:10,color:'#FF5200'}}>上</Text>
//             </Text>
//           </TouchableOpacity>):(<TouchableOpacity  onPress={this.handleClick}>
//             <Text style={{}}>展开
//               <Text style={{fontSize:10,color:'#FF5200'}}>下</Text>
//             </Text>
//           </TouchableOpacity>)
//           }
//         </View>
//         <View style={styles.listitem}>
//         <View style={styles.icons}>
//            <Text style={{textAlign:'center',fontSize:13,color:'#ffffff'}}>电</Text>
//           </View>
//           <Text style={{marginLeft:-40}}>{item.phone}</Text>
//           <Text style={{marginLeft:-48,marginTop:-5,fontSize:20,color:'#FF5200'}}>{item.lastnum}</Text>
//           <Text style={{color:'#aaaaaa',}}>{item.name}</Text>
//           <View style={{borderWidth:1,borderColor:'#FF5200',borderStyle:'solid',paddingHorizontal:3,paddingVertical:1}}>
//           <Text style={{color:'#FF5200',fontSize:13,}}>拣货完成</Text>
//           </View>
//         </View>
//         </View>
//         <View>
//           {
//             isClicked && <ListContent content={content} remark={remark} others={others} handleClick={this.handleClick}/>
//           }
//         </View>
//       </View>
//     )
//   }
// }

// class NavBar extends Component{
//   _onPressButton=()=>{
//     const {_onPressButton}=this.props;
//     const {item}=this.props;
//     _onPressButton(item);
//   }
//   render(){
//     const {navbars,activeItem}=this.props;
//     const {item}=this.props;
//     return(
//       <View style={styles.navbar}>
//         <View style={styles.eachbar}>
//           <View>
//             <Text style={activeItem === item.text && styles.navtext} onPress={this._onPressButton}>
//               {item.text}
//             </Text>
//           </View>
//           {
//             item.amount>0 && 
//             (<View style={activeItem === item.text? styles.navamount : styles.reversenavamount }>
//               <Text style={styles.text}>  
//               {item.amount}
//               </Text>
//             </View>)    
//            }
//           </View>
        
//       </View>
//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#F5FCFF',
//     marginTop:20,
//   },
//   longnavbar:{
//     display:'flex',
//     padding:15,
//     flexDirection:'row',
//     justifyContent:'space-between',
//     backgroundColor:'#ffffff',
//     marginTop:10,
//     borderBottomWidth:1,
//     borderStyle:'solid',
//     borderBottomColor:'#cccccc',
    
//   },
//   navbar: {
//     flexDirection:'row',
   
//   },
//   eachbar:{
//     flexDirection:'row',
//   },
//   navtext: {
//      color:'#FF5200',
//   },
//   reversenavamount:{
//     width:20,
//     height:20,
//     backgroundColor: '#C1BEBE',
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:-8,
//   },
//   navamount: {
//     width:20,
//     height:20,
//     backgroundColor: '#FF5200',
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:-8,
//   },
//   text:{
//     fontSize:12,
//     color:'#ffffff',
//   },
//   listall:{
//     display:'flex',
//     flexDirection:'column',
//     marginTop:20,
//   },
//   listitem:{
//     padding:10,
//     display:'flex',
//     flexDirection:'row',
//     justifyContent:'space-between',
//     backgroundColor:'#fff',
//   },
//   icons:{
//     width:20,
//     height:20,
//     backgroundColor:'#FF5200',
//     borderRadius:10,
//     overflow:'hidden',
//     justifyContent:'center',

//   },
//   Listcontent:{
//     display:'flex',
//     flexDirection:'column',
//     backgroundColor:'#ffffff',
//     paddingHorizontal:10,
//   },
//   line:{
//     borderBottomWidth:1,
//     borderStyle:'solid',
//     borderBottomColor:'#ccc',
//     width:'90%',

//    },
// });


