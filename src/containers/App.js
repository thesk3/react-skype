import React from "react";
import Main from  "../components/Main";
import Sidebar from  "../components/Sidebar";
import store from "../store";
import _ from "lodash";

// class App extends Component {

//   render() {
//     return (<div>
//             <HelloWorld key={1} tech={store.getState().tech} />
//             <ButtonGroup key={2} technologies={["React","React-elm","React-Readux"]}/> </div>
//     );
  

//   }
// }
const App = () => {

  const {contacts,user,activeUserId} =store.getState();

  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
};
export default App;


