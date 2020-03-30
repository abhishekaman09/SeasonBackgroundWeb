import React from 'react';
import ReactDOM  from 'react-dom';
import SeasonDisplay from './seasonDisplay';


class App extends React.Component {

       

state={lat: null, errorMessage : ""};

        
        componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
                (position)=>  this.setState({ lat : position.coords.latitude   }),
                (err)=> this.setState({ errorMessage: err.message})
            );
        }

        // componentDidUpdate(){

        //     console.log("component updated")
        // }
    

    render(){

        if(this.state.errorMessage&&!this.state.lat){
            return ( 

                <div > <h1>Error: {this.state.errorMessage}</h1>
                 </div>
     
             );

        }
        if(!this.state.errorMessage&&this.state.lat){

            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Loading...</div>

        
       
        }
    
}
 
ReactDOM.render(<App/>, document.querySelector("#root"));