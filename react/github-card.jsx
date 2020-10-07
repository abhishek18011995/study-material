// paste below css and code in jscomplete.com/playground

// .github-profile {
// 	margin: 1rem;
//   img {
//     width: 75px;
//   }
//   .info {
//     display: inline-block;
//     margin-left: 12px;
// 		.name {
//     	font-size: 1.25rem;
//       font-weight: bold;
//     }
//   }
// }

// form {
// 	border: thin solid #888;
//   padding: 2rem;
//   margin-bottom: 2rem;
//   display: flex;
//   justify-content: center;
// }

// .header {
// 	text-align: center;
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
// }

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];


class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div class="card-pane">
        <div class="image-container">
          <img src={profile.avatar_url} />
        </div>
        <div class="card-details">
          <h2>{profile.name}</h2>
          <p>{profile.company}</p>
        </div>
      </div>
    );
  }
}

const CardList = (props) => {
  return (
    <div class="card-container" >
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
}

class Form extends React.Component {
  state={
    username: ''
  };
    
  handleSubmit = async(event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.username}`);
    this.props.handleSubmit(resp.data);
    this.setState({...this.state, username: ''});
  }

  render() {
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Github username" value={this.state.username} onChange={(event) => this.setState({...this.state, username: event.target.value})} required/>
        <button>Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  state = {
    profiles: []
  };

  addNewProfile = (profileDetails) => {
    console.log(profileDetails);
    this.setState({...this.state, profiles: [...this.state.profiles, profileDetails]});
  }

  render() {
    return (
      <div>
        <h1 class="header-title">The Github cards App</h1>
        <Form handleSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mountNode'))