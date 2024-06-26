import React, { Component } from 'react';
import './BurgerStyle.css';
import LoginPage from './LoginPage'; // Import the Login component

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0,
        showLogin: false // Add state to control the visibility of the login form
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;
        switch(ingredient){
            case 'lettuce':
                stateValue = lettuce;
                break;
            case 'tomato':
                stateValue = tomato;
                break;
            case 'cheese':
                stateValue = cheese;
                break;
            case 'meat':
                stateValue = meat;
                break;
            default: 
                break;
        }
        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
    }

    calculatePrice = () => {
        const { lettuce, tomato, cheese, meat } = this.state;
        const ingredientPrice = 2; // Price for each ingredient
        const totalPrice = (lettuce + tomato + cheese + meat) * ingredientPrice;
        return totalPrice.toFixed(2);
    }

    toggleLoginForm = () => {
        this.setState(prevState => ({
            showLogin: !prevState.showLogin
        }));
    }

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;
        let burger = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuseSide"></div>);
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>);
        }
        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>);
        }
        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>);
        }
        if(burger.length === 0)
            burger.push(<p key="0">Please start adding ingredients!</p>);
        return burger;
    }

    render(){
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Current Price: ${this.calculatePrice()}</p>
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','lettuce')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','lettuce')}>Remove</button>
                    </div>
                    <p>TOMATO</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','tomato')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','tomato')}>Remove</button>
                    </div>
                    <p>CHEESE</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','cheese')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','cheese')}>Remove</button>
                    </div>
                    <p>MEAT</p>
                    <div className="ingrBtns">
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('add','meat')}>Add</button>
                        <button className="ingrBtn" onClick={() => this.addRemoveIngredient('remove','meat')}>Remove</button>
                    </div>
                    <button className="orderBtn" onClick={this.toggleLoginForm}>Sign up for order</button>
                    {this.state.showLogin && <LoginPage/>} {/* Conditionally render the login form based on state */}
                </div>
            </>
        );
    }
}
