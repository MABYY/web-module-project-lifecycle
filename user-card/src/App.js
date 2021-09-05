import react from 'react';
import axios from 'axios';
import Card from './Card.js'

const fetchData = (gHUser) => {
  return axios
    .get(`https://api.github.com/users/${gHUser}`)
    .then((res) => res)
    .catch((err) => err);
}

const fetchFollowers = (gHUser) => {
  return axios
    .get(`https://api.github.com/users/${gHUser}/followers`)
    .then((res) => res)
    .catch((err) => err);
}

class App extends react.Component{
  state = {
    data : [],
    followers : [],
    currentName : 'MABYY',
  };



  componentDidMount() {
    fetchData(this.state.currentName).then((res) => {
      console.log('data',res.data)
      this.setState({
        data: res.data
      });
  
    });
    fetchFollowers(this.state.currentName).then((res) => {
      this.setState({
        followers: res.data
      });
  
    });
  }

  render() {

    return (
      <div>
        <h1>Personal Cards</h1>
        <Card login ={this.state.data.login} 
              repos = {this.state.data.repos_url} 
              avatar ={this.state.data.avatar_url}
              followers = {this.state.followers} />
      </div>

    );

  }

}

export default App;
