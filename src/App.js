import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {serachInput: '', userDetailsList: initialUserDetailsList}

  onChangeUserInput = event => {
    console.log(event.target.value)
    this.setState({
      serachInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    console.log(uniqueNo)
    const {userDetailsList} = this.state
    const filteredUser = userDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailsList: filteredUser,
    })
  }

  render() {
    const {serachInput, userDetailsList} = this.state

    console.log(serachInput)
    const searchResult = userDetailsList.filter(each =>
      each.name.includes(serachInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          onChange={this.onChangeUserInput}
          value={serachInput}
        />
        <ul className="list-container">
          {searchResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              deleteUser={this.deleteUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
