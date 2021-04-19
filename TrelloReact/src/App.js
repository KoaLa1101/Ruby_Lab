/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import ToDoPage from './components/pages/ToDoPage';
import HomePage from "./components/pages/HomePage";
import TaskPage from "./components/pages/TaskPage";
import TasksWithGraphql from "./components/pages/TasksWithGraphql";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "./lib/apolloClient";
import routes from './config/todo';


function App() {
    const {HOME, TASKS, TASK} = routes;

    const Application = () => {
        return (<ToDoPage/>)
    }

    return (
        <ApolloProvider client={apolloClient}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={HOME}>
                        <HomePage/>
                    </Route>
                    <Route exact path={TASKS}>
                        <Application/>
                    </Route>
                    <Route path={TASK}>
                        <TaskPage/>
                    </Route>
                    <Route path={'tasks-with-graphql'}>
                        <TasksWithGraphql/>
                    </Route>
                </Switch>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                </div>

            </BrowserRouter>
        </ApolloProvider>

    );
}

export default App;