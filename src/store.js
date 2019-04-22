
import { createStore } from 'redux'

let initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME'
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY'
export const AUTHOR_FIRST = 'AUTHOR_FIRST'
export const AUTHOR_LAST = 'AUTHOR_LAST'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION'
export const ADD_RECIPE = 'ADD_RECIPE'
export const DELETE = 'DELETE'
export const RESET = 'RESET'

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_RECIPE_NAME:
            return { ...state, name: payload }
        case UPDATE_RECIPE_CATEGORY:
            return { ...state, category: payload }
        case AUTHOR_FIRST:
            return { ...state, authorFirst: payload }
        case AUTHOR_LAST:
            return { ...state, authorLast: payload }
        case ADD_INGREDIENT:
            let newIngredient = [...state.ingredients, payload]
            return { ...state, ingredients: newIngredient }
        case ADD_INSTRUCTION:
            let newInstruction = [...state.instructions, payload]
            return { ...state, instructions: newInstruction }
        case ADD_RECIPE:

            let recipe = {
                name: state.name,
                category: state.category,
                authorFirst: state.authorFirst,
                authorLast: state.authorLast,
                ingredients: state.ingredients,
                instructions: state.instructions
            }
            let newRecipe = [...state.recipes, recipe]
            return { ...state, recipes: newRecipe }
        case DELETE:
            let deleted = state.recipes.splice(payload, 1)
            return { ...state, deleted }
        case RESET:
            let { name, category, authorFirst, authorLast, ingredients, instructions } = initialState
            return {
                ...state, 
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
        default: return state
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())