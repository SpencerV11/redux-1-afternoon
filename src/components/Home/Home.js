import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, { DELETE } from './../../store'

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      recipes: reduxState.recipes
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState()
      this.setState({
        recipes: reduxState.recipes
      })
    })
  }


  deleteAll(i) {
    store.dispatch({
      type: DELETE,
      payload: i
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          deleteAll={() => this.deleteAll(i)}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
