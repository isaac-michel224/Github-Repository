import React from 'react';
import axios from 'axios';
import logo from "./logo.svg";
import './App.css';
import { GitHubRepository, GithubSearchResultType } from './Types/GitHub';
import SearchForm from "./Components/SearchForm";
import ListRepositories from "./Components/ListRepositories";

function App() {

  //typescript assigns a type to a variable
  //on the moment of declaration, dependent on the value
  // let helloWorld = "hello world";

  const [repositories, setRepositories] = React.useState<Array<GitHubRepository>>();

  async function search(query: string) {
    const result = await axios.get<GithubSearchResultType>
    (`https://api.github.com/search/repositories?q=${query}`);
    setRepositories(result.data.items);
}
 


  return 
    <div>
       <SearchForm search={search}/>
            <ListRepositories repositories={repositories}/>
     
    </div>;
  
}

export default App;
