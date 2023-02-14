import {Routes, Route, Link} from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import {GithubUser} from "./GithubUser"
import {Nonso1} from "./Nonso1"
import {Nonso2} from "./Nonso2"
import {Nonso3} from "./Nonso3"


export function App() {

  return (
    <div>
      <Link to="/nonso1">Nonso1</Link> 
      <Link to="/nonso2">Nonso2</Link>
      <Link to="/nonso3">Nonso3</Link>
<Routes>
  <Route path="/" element={<Welcome name="Bianca"/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path= "users/:username" element={<GithubUser/>}/>
  <Route path= "/nonso" component={Nonso1}/>
  <Route path= "/nonso2" component={Nonso2}/>
  <Route path= "/nonso3" component={Nonso3}/>
</Routes>
</div>
  )
}
