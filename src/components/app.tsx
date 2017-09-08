import { h, Component } from "preact";
import { Router } from "preact-router";
import async from "preact-cli/lib/components/async";
import { RouterOnChangeArgs } from "preact-router/index.d";

import Header from "./header";

const Home = async(() =>
  import(/* webpackChunkName: "home" */ "../routes/home")
);
const Profile = async(() =>
  import(/* webpackChunkName: "profile" */ "../routes/profile")
);

export default class App extends Component<any, any> {
  currentUrl: string = null;

  handleRoute = (evt: RouterOnChangeArgs): void => {
    this.currentUrl = evt.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}
