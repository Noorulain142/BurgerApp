import React,{Component} from 'react';
import './BurgerStyle.css'

export default class Burger extends Component {
  state = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }

  addRemoveIngredient = (action , ingredient) =>{
    let{
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state;

    let stateValue;

    switch(ingredient){
      case 'lettuce':{
        stateValue = lettuce;
        break;
      }
      case 'bacon':{
        stateValue = bacon;
        break;
      }
      case 'cheese':{
        stateValue = cheese;
        break;
      }
      case 'meat':{
        stateValue = meat;
        break;
      }
      default: break;
    }
    if(action === 'more'){
      stateValue = stateValue+1;
    }else{
      stateValue = stateValue-1;
    }
    this.setState({
      [ingredient]: stateValue>=0 ? stateValue : 0
    })
  }

  burgerContent = () => {
    let{
      lettuce,
      bacon,
      cheese,
      meat
    } = this.state;

    let burger = [];
    // outputting the lettuce
    for (let i =0; i<lettuce;i++){
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }

    // outputting the bacon
    for (let i =0; i<bacon;i++){
      burger.push(<div key={burger.length} className="baconSide"></div>);
    }

    // outputting the cheese
    for (let i =0; i<cheese;i++){
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }

    // outputting the meat
    for (let i =0; i<meat;i++){
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }
    return burger;
  }

  render(){
    return (
      <>
        <div className="burgerIngredients">
          <div className='topSide'></div>
           {this.burgerContent()}
          <div className='bottomSide'></div>
        </div>
        <div className="ingredientsBlock">
         <p>Lettuce</p>
         <div className='ingrBtns'>
            <button onClick={()=>this.addRemoveIngredient('more','lettuce')} className='ingrBtn'>More</button>
             <button onClick={()=>this.addRemoveIngredient('less','lettuce')} className='ingrBtn'>Less</button>
          </div>

          <p>Bacon</p>
         <div className='ingrBtns'>
            <button onClick={()=>this.addRemoveIngredient('more','bacon')} className='ingrBtn'>More</button>
             <button onClick={()=>this.addRemoveIngredient('less','bacon')} className='ingrBtn'>Less</button>
          </div>

          <p>Cheese</p>
         <div className='ingrBtns'>
            <button onClick={()=>this.addRemoveIngredient('more','cheese')} className='ingrBtn'>More</button>
             <button onClick={()=>this.addRemoveIngredient('less','cheese')} className='ingrBtn'>Less</button>
          </div>

          <p>Meat</p>
         <div className='ingrBtns'>
            <button onClick={()=>this.addRemoveIngredient('more','meat')} className='ingrBtn'>More</button>
             <button onClick={()=>this.addRemoveIngredient('less','meat')} className='ingrBtn'>Less</button>
          </div>
        </div>
      </>
    );
  }
}
