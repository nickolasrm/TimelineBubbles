import './App.css'
import Editor from './components/pages/editor'
import Tutorial from './components/pages/tutorial'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Editor></Editor>
                </Route>
                <Route path="/tutorial">
                    <Tutorial></Tutorial>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
