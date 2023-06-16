import './App.css';
import Header from './components/Header';
import User from './components/User';

function App() {
  return (
    <div>
    <Header/>  
    </div>
  );
}

export default App;

// import { Component } from "react";


// class App extends Component {
//   componentDidMount() {
//     this.getAllUser();
//   }

//   getAllUser = async () => {
//   //  this.setState({ apiStatus: ApiStatus.pending });
//     const data = await fetch("https://api.github.com/users");
//     const pureData = await data.json();
//     console.log(pureData)
//     // const updatedList = pureData.map((eachUser) => ({
//     //   id: eachUser.id,
//     //   userName: eachUser.login,
//     //   avatarUrl: eachUser.avatar_url,
//     //   isBookmarked: false,
//     // }));
    
//   };

//   render() {
//     return <div>hello</div>;
//   }
// }

// export default App;

