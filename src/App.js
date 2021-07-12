import React from "react";
import { List } from "./List";
import { Form } from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "list",
    };
  }

  render() {
    const { tab } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li
              onClick={() => {
                this.setState({ tab: "list" });
              }}
            >
              リスト
            </li>
            <li
              onClick={() => {
                this.setState({ tab: "form" });
              }}
            >
              フォーム
            </li>
          </ul>
          <hr />
        </header>
        {tab === "list" ? <List /> : <Form></Form>}
        <button>ボタン</button>
      </div>
    );
  }
}

export default App;
