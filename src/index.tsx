import * as React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import { CssBaseline } from "@mui/material";
import NotificationBell from "./NotificationBell";
import { NotificationProps } from "./Notification";
import axios from "axios";
// import Navbar from "./Navbar";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Navbar></Navbar>
//     </>
//   );
// }

interface AppProps {}

interface AppState {
  notifications: NotificationProps[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  componentDidMount(): void {
    axios
      .get("https://tunacoding.com/admin")
      .then((res) => {})
      .catch((err) => {
        setTimeout(() => {
          this.setState({
            notifications: [
              {
                avatar:
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
                content: "Notification 1",
                created_at: "20 minutes ago",
              },
              {
                avatar:
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
                content: "Notification 2",
                created_at: "20 minutes ago",
              },
              {
                avatar:
                  "https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg",
                content: "Notification 3",
                created_at: "20 minutes ago",
              },
            ],
          });
        }, 3000);
      });
  }
  render() {
    return (
      <React.Fragment>
        <NotificationBell notifications={this.state.notifications} />
      </React.Fragment>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
