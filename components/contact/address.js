import {useContext} from 'react'
// import {Context} from '../../pages/App'
import newstate from '../../data/general.json'

export default ()=>{
    // const contextobj=useContext(Context)
    // const{state,dispatch}=contextobj

    // const newstate=state.general

return (
  <section className="address">
    <h2 className="violet-color fs-5">{newstate.AgentName}</h2>
    <h2 className="violet-color fs-5">{newstate.Name}</h2>
    <address>
    {newstate.Address}
    </address>
  </section>
);
}