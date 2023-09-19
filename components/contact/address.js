
export default ({state})=>{
return (
  <section className="address">
    <h2 className="violet-color fs-5">{state.AgentName}</h2>
    <h2 className="violet-color fs-5">{state.Name}</h2>
    <address>
    {state.Address}
    </address>
  </section>
);
}