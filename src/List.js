import React from 'react';
import axios from "axios";
import './App.css';

class List extends React.Component {
  render(){
 const people = this.props.people;
    return (
         
<div>
<div className="big-container">
     <h1>Name: {people.name}</h1>
      <p>height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Hair color: {people.hair_color}</p>
      <p>Skin color: {people.skin_color}</p>
      <p>birth: {people.birth_year}</p>
      <p>Gender: {people.gender}</p>
      <p>Home: {people.homeworld}</p>
      <p>Created: {people.created}</p>
      <p>edited: {people.edited}</p>
      <p>Url: {people.url}</p>
     </div>
</div>
     );
  }

}

export default List;



/*
   <div className="big-container">
     <h1>Name: {people.name}</h1>
      <p>height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Hair color: {people.hair_color}</p>
      <p>Skin color{people.skin_color}</p>
      <p>birth: {people.birth_year}</p>
      <p>Gender: {people.gender}</p>
      <p>Home: {people.homeworld}</p>
      <p>Created: {people.created}</p>
      <p>edited: {people.edited}</p>
      <p>Url: {people.url}</p>
     </div>
*/