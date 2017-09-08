import { h, Component } from "preact";

import style from "./style.css";

export default class Home extends Component<any, any> {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    );
  }
}
