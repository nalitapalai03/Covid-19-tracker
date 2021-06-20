import './App.css';
import { Card } from 'react-bootstrap';

import React, { Component } from 'react';

class App extends Component {
      url='https://api.covid19india.org/data.json';
      
      
  constructor() {
    super();
    this.state = {
      
      
      input:[],
      data:[],
      bihar:[],
      Maha:[],
      karna:[],
      kerala:[],
      Tamil:[],
      Andhra:[],
      up:[],
      delhi:[],
      wb:[],
      csg:[],
      raja:[],
      

      
      

    }
  }

 
  getdata=()=>{
    var s=document.getElementById("state").value;
    console.log(s);
  

  }
  change=()=>{
    
  }
 
 
  
  updateData = () => {
    
    
      

      fetch(this.url)
      .then(response=>{
        return response.json();
      })
      .then(response=>{
        this.setState({input:response.statewise[0]});
        this.setState({bihar:response.statewise[5],Andhra:response.statewise[2],csg:response.statewise[7],delhi:response.statewise[9],
        karna:response.statewise[16],kerala:response.statewise[17],Maha:response.statewise[21],raja:response.statewise[29],Tamil:response.statewise[32],
        up:response.statewise[35],wb:response.statewise[37]});
        
        console.log(this.state.input);
      })
    
      
      
    
  }
  componentDidMount(){
    this.updateData();
  }
  
  
  render() {
    return (
      
      <div class="main">
        <h1>Live covid tracker</h1><span><img src="data:image/jpeg;base64,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" alt="" width="64px"/></span>

       
        

        <div className="body">
        <Card className="active" text="white" style={{ width: '10rem' }}>
           
  
           <Card.Body>
             <Card.Title>Active cases</Card.Title>
             <Card.Text>
             {this.state.input.active}
               
             </Card.Text>
             
           </Card.Body>
       </Card>
       <Card className="total" text="white" style={{ width: '10rem' }}>
          
 
           <Card.Body>
             <Card.Title>Total cases</Card.Title>
             <Card.Text>
             {this.state.input.confirmed}
               
             </Card.Text>
             
           </Card.Body>
       </Card>
       <Card className="recovery" text="white" style={{ width: '10rem' }}>
          
 
           <Card.Body>
             <Card.Title>Recovered cases</Card.Title>
             <Card.Text>
             {this.state.input.recovered}
               
             </Card.Text>
             
           </Card.Body>
       </Card>
       <Card className="death" text="white" style={{ width: '10rem' }}>
          
 
           <Card.Body>
             <Card.Title>Death cases</Card.Title>
             <Card.Text>
             {this.state.input.deaths}
               
             </Card.Text>
             
           </Card.Body>
       </Card>
       <Card className="lastup" text="white" style={{ width: '10rem' }}>
          
 
           <Card.Body>
             <Card.Title>Last updated:</Card.Title>
             <Card.Text>
             {this.state.input.lastupdatedtime}
               
             </Card.Text>
             
           </Card.Body>
       </Card>
        
        
       

        




      
        </div>

        <div>

        <div className="table">
                  <table id="customers">
            <tr>
              <th>States</th>
              <th>Total</th>
              <th>Active</th>
            </tr>
            <tr>
              <td>Maharashtra</td>
              <td>{this.state.Maha.confirmed}</td>
              <td>{this.state.Maha.active}</td>
            </tr>
            <tr>
              <td>Karnataka</td>
              <td>{this.state.karna.confirmed}</td>
              <td>{this.state.karna.active}</td>
            </tr>
            <tr>
              <td>Kerala</td>
              <td>{this.state.kerala.confirmed}</td>
              <td>{this.state.kerala.active}</td>
            </tr>
            <tr>
              <td>Tamil Nadu</td>
              <td>{this.state.Tamil.confirmed}</td>
              <td>{this.state.Maha.active}</td>
            </tr>
            <tr>
              <td>Andhra Pradesh </td>
              <td>{this.state.Andhra.confirmed}</td>
              <td>{this.state.Andhra.active}</td>
            </tr>
            <tr>
              <td>Uttar Pradesh</td>
              <td>{this.state.up.confirmed}</td>
              <td>{this.state.up.active}</td>
            </tr>
            <tr>
              <td>Delhi</td>
              <td>{this.state.delhi.confirmed}</td>
              <td>{this.state.delhi.active}</td>
            </tr>
            <tr>
              <td>West Bengal</td>
              <td>{this.state.wb.confirmed}</td>
              <td>{this.state.wb.active}</td>
            </tr>
            <tr>
              <td>Chhatisgarh</td>
              <td>{this.state.csg.confirmed}</td>
              <td>{this.state.csg.active}</td>
            </tr>
            <tr>
              <td>Rajasthan</td>
              <td>{this.state.raja.confirmed}</td>
              <td>{this.state.raja.active}</td>
            </tr>
          </table>

        </div>


          
        </div>
        
      </div>

      
    )
  }
}

export default App;