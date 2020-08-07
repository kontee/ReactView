
import React from 'react';
import {Text,View} from 'react-native';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      message:'Hello Word',
    bp:'veeeee',
    }
  
}
render(){
  return(
  <View> 
    <Text>this.state. message</Text>
    <Text>this.state. bp</Text>
    <Text>I love My mom</Text>
    </View>
)
}
}

export default App;