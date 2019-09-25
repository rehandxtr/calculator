import React, {Component} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default class App extends Component {


    constructor()
    {
      super() 
      this.state={
        resultText:"",
        calculatedText:""
      }
      
      this.operations=['del','+','-','*','/']

    }
    calculateResult()
    {
      const text= this.state.resultText
         this.setState({
         calculatedText: eval(text)
       }) 
    }

    validate()
    {
      const text= this.state.resultText
      switch(text.slice(-1)){
        case '+':
        case '-':
        case '*':
        case '/':
          return false
      }
      return true
      
    }

buttonPressed(text)
{
if(text =='=')
{
  return  this.validate() && this.calculateResult()
}
this.setState({
  resultText:this.state.resultText+text
})
}

operate(operations)
{
  switch(operations)
  {
    case 'del':
      let text= this.state.resultText.split('')
      text.pop() 
      this.setState({
        resultText: text.join('')
      }) 
      break
      case '+': 

      case '-':
   
      case '*':
    
      case '/':

      const lastChar = this.state.resultText.split('').pop()
        if(this.operations.indexOf(lastChar)>0)  return

        if(this.state.text=="") return
        this.setState({
        resultText: this.state.resultText +operations
      })
  }
}

render(){
  

   let rows=[]
   let nums=[[1,2,3],[4,5,6],[7,8,9],[0,'.','=']]
   for(let i=0;i<4;i++){
     let row=[]
     for(let j=0;j<3; j++){
       row.push(<TouchableOpacity key={nums[i][j]}  onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btn}>
      <Text style={styles.btnTxt}>{nums[i][j]}</Text>
         </TouchableOpacity>)
     }
     rows.push(<View key={i} style={styles.row}>{row}</View>)
   }

let ops=[]
for(let i=0;i<5;i++){
  ops.push(<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={()=>this.operate(this.operations[i])}>
    <Text style={[styles.btnTxt,styles.white]}>{this.operations[i]}</Text>
       </TouchableOpacity>)
}


  return (
    <View style={styles.container}>
      <View style={styles.expression}>
        <Text style={styles.expressionText}>{this.state.resultText}</Text>
      </View>
      <View style={styles.result}>
         <Text style={styles.resultText}>{this.state.calculatedText}</Text>
         </View>
      <View style={styles.buttons}>
      <View style={styles.numbers}>
        {rows}
        

      </View>
      <View style={styles.operations}>
          {ops}
      </View>
      </View>
    </View>
  );
}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  btn:{
  flex:1,
  alignItems:'center',
  alignSelf:'stretch',
  justifyContent:'center',
  },
  white:
  {
    color:'white',
  },
  expressionText:{
    fontSize:30,
    color: 'black',
  },
  btnTxt:{
    fontSize:30,
    color: 'white',
  },
  resultText:{
    fontSize:24,
    color: '#636363',
  },
  expression: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  result: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  buttons: {
    flexGrow:7,
    flexDirection: 'row',
  },
  numbers: {
    flexGrow:3,
    backgroundColor: '#434343',
  },
  operations: {
    flex: 1,
    backgroundColor: '#636363',
    justifyContent:'space-around',
    alignItems:'center',
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent: 'space-around',
    alignItems:'center',

  },
});

