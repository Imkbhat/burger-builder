import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "../src/containers/Checkout/Checkout";
import Orders from "../src/containers/Orders/Orders";

// class App extends Component {
//   state = {
//     show: true
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({show: false});
//     }, 5000);
//   }
//   render() {
//     return (
//       <div>
//         <Layout>
//           {this.state.show ? <BurgerBuilder /> : null}
//         </Layout>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
