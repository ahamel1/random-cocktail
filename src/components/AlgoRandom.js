import React from 'react';
import FullRandom from "./FullRandom";
import axios from "axios"
import './AlgoRandom.css'



class AlgoRandom extends React.Component {
    constructor(props) {
      super(props) ;
      this.state = {
        ingredients : [],
        list : []
      };
    }
  
    componentDidMount() {
      this.getList();
    }
  
    getRandom = () => {
      let random = Math.floor(Math.random()*600) +1;
      console.log(random)
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${random}`)
        .then(response => response.data)
        .then (data => data.ingredients === null ? this.getRandom() : this.state.list.push(data.ingredients[0].strIngredient))
    }

    getList = () => {
        for (let i = 0; i < 10;i++) {
            this.getRandom()
        }

        console.log(this.state.list)
    
        
        
    }
    
    
    render() {
      return (
        <div className="AlgoRandom">
            <h1>La folie</h1>
          <FullRandom list={this.state.list} />
         <button type="button" onClick={this.getList}>
           New ingredient
         </button>
        </div>
      )
    }
}
  
export default AlgoRandom
  