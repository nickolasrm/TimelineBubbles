import './App.css'
import Editor from './components/pages/editor'
import Tutorial from './components/pages/tutorial'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Editor></Editor>
                </Route>
                <Route path="/tutorial">
                    <Tutorial></Tutorial>
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default App
