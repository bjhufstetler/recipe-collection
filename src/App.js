import './App.css';

import React from 'react';

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""
  }

  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;
  
    this.setState({newRecipeInstructions: value});
  }

  handleRecipeNameChange = (event) => {
    const value = event.target.value;
    this.setState({newRecipeName: value});
  }

  toggleAddRecipeForm = () => {
    this.setState({
      isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed
    })
  }

  submitRecipe = (event) => {
    event.preventDefault()
    this.setState({
      ...this.state,
      recipes: [...this.state.recipes,
        {name: this.state.newRecipeName, instructions: this.state.newRecipeInstructions}
      ],
      isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed,
      newRecipeName: "",
      newRecipeInstructions: ""
    })
  }

  render(){
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text"
          name="newRecipeName"
          id="newRecipeName"
          onChange={this.handleRecipeNameChange}
          value={this.state.newRecipeName} />
        <label htmlFor="newRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions"
          id="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleRecipeInstructionsChange}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
           ? addNewRecipeForm
          : <button id="add-recipe" onClick={this.toggleAddRecipeForm}> Add Recipe</button>
        }
        {
          this.state.recipes.length > 0 ?
          <ul>
            {this.state.recipes.map(x => <li key={x.name}>{x.name}</li>)}
          </ul> :
          <p>There are no recipes to list.</p>
        }
        
      </div>
    )
  }
}

export default App;
