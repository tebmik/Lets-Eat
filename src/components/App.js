import React from "react";
import { Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList";
import RecipeDelete from "./pages/RecipeDelete";
import RecipeSave from "./pages/RecipeSave";
import RecipeShow from "./pages/RecipeShow";
import Header from "./header/Header";

const afterHeader = {
    marginTop:80,
}

const App = () => {


    return(
        <React.Fragment>
            <Header />
            <div style={afterHeader}>
                <Route path='/' exact component={RecipeList} />
                <Route path='/recipes/saved' component={RecipeSave} />
                <Route path="/recipes/selected" component={RecipeShow} />
                <Route path="/recipes/delete" component={RecipeDelete} />
            </div>
        </React.Fragment>
    );
}

export default App;