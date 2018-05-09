import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import React from 'react';

const firebase = require("firebase/app");

class DataTable extends React.Component {
    constructor(props) {
      super();
      this.state = {
          players: []
      };
      const playersRef = firebase.database().ref('players/');
      playersRef.on('value', (snapshot) => {
        const val = snapshot.val();
        const result = Object.keys(val).map(function(key) {
            return val[key];
          });
          result.sort(sortPlayers);
          this.setState({players: result});
          console.log(this.state.players);
      });

      const sortPlayers = (a,b) => {
        if (a.minutes_per_point < b.minutes_per_point)
        return -1;
      if (a.minutes_per_point > b.minutes_per_point)
        return 1;
      return 0;
      };
    }
    

    render() {
      return (
      <BootstrapTable data={ this.state.players } options={ { noDataText: 'Loading data from database' } }>
            <TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='minutes_per_point'>Minutes per Points</TableHeaderColumn>
            <TableHeaderColumn dataField='goals'>Goals</TableHeaderColumn>
            <TableHeaderColumn dataField='minutes'>Minutes</TableHeaderColumn>
        </BootstrapTable>
      );
    }
  }

export default DataTable;