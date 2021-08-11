import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {


constructor(props){
  super(props);

  this.state={
    isToggleOn:false,
    Person :{ fullName : 'Mohamed Boujneh',
    bio : 'Life is way too short for bad vibes.', 
    imgSrc: logo,
    profession:'Ingénieur informatique'} ,
   }
   this.handleClick= this.handleClick.bind(this);

}

 

handleClick(){
  this.setState(state=>({
    isToggleOn : !state.isToggleOn
  }))
}

 
  render (){
   
   return(<div  >
      <button onClick={this.handleClick} >Afficher </button>
       <br/>
       {  this.state.isToggleOn ?  <h1 > Fullname:  {this.state.Person.fullName}</h1> :''}
        {  this.state.isToggleOn ? <h1> Bio:  {this.state.Person.bio}</h1>:''}
        {  this.state.isToggleOn ?  <h1> Profession: { this.state.Person.profession}</h1>:''}
      
        {  this.state.isToggleOn ?    <img  src={this.state.Person.imgSrc}/> :''} 


         
    </div>
   );
  };



}

export default App;
