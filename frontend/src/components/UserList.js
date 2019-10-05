import React from 'react';
import { Table } from 'reactstrap';

class UserList extends React.Component {
  render() {
    let list = this.props.list.map(listitem => {
      return (
        <tr>
          <td className="avatar-column"><img src="https://i.pinimg.com/originals/27/47/ed/2747edad39a6a4e9fbcfbf3c53822649.png" alt="" className="avatar"/></td>
          <td className="user-column">{listitem.name} <br/> <small>{listitem.email}</small> </td>
          <td className="score-column">{listitem.score}</td>
        </tr>
      )
    })

    return (
      <div className="userlist">
        <div>
          <h1 className="text-center mb-3">LEADERBOARD</h1>
          <Table hover>
            <thead className="thead-dark">
              <tr>
                <th className="avatar-column">Avatar</th>
                <th className="user-column">Profile</th>
                <th className="score-column">Points</th>
              </tr>
            </thead>
            <tbody>
              {list}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default UserList;