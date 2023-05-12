import React from 'react'
import { employeeData } from '../constant';
function HomePage() {
  
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px', background: '#D25380', height: '35px', width: '100%', paddingTop: '20px'
      }}>
        <div>
          <span style={{ color: 'white', fontWeight: 'bold' }}>Heliverse Task</span>
        </div>

      </div>

      <input style={{ display: 'flex', marginLeft: '20px', marginTop: '40px', width: '80%', height: '30%' }} type="text" placeholder='Search Name....'></input>
     <div style={{ display: 'flex', marginTop: '40px', marginLeft: '20px',gap:'20px' }}>
      <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
      <label>Domain</label>
        <select style={{ marginRight: '20px',width:'150px',height:'20px' }}>
          <option value="">Finance</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
      <label>Gender</label>
        <select style={{ marginRight: '20px',width:'150px',height:'20px' }}>
          <option value="">Gender</option>
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option3">Transgender</option>
        </select>
</div>

<div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
      <label>Availability</label>
        <select style={{ marginRight: '20px',width:'150px',height:'20px'}}>
          <option value="">Online</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        </div>
      </div>
      <div style={{ marginTop: '40px', marginLeft: '20px', width: '9%', height: '150px', border: '1px solid black', borderRadius: '5px' }}>
        <span style={{fontWeight:'bold', display:'flex',justifyContent:'center',paddingTop:'20px',gap:'2px'}}>Alan Doe</span>
        <span style={{fontSize:'12px',paddingTop:'10px'}}>Email</span>
        <span> alan@gmail.com</span>
       <span style={{fontSize:'12px'}}> Domain</span> 
       <span> Sales</span>
       <span style={{fontSize:'12px'}}>Gender</span>
       <span>Male</span>
      </div>
      
      </div>
    
  );
}

export default HomePage;
