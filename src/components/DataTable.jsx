import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ReactTable from "react-table";
import Select from 'react-select';
import React from 'react';
const firebase = require("firebase/app");

class DataTable extends React.Component {
    constructor(props) {
      super();
      this.state = {
          players: [],
          defaultFilters: ['name', 'goals', 'minutes'],
      };
      this.filters = [
        {value:'name', label: 'Name'},
        {value:'goals', label: 'Goals'},
        {value:'assists', label: 'Assists'},
        {value:'minutes', label: 'Minutes'},
        {value:'minutes_per_goalPoints', label: 'Minutes per Goal Point'}
      ];
      const playersRef = firebase.database().ref('players/');

      const sortPlayers = (a,b) => {
        if (a.minutes_per_point < b.minutes_per_point)
        return -1;
        if (a.minutes_per_point > b.minutes_per_point)
        return 1;
        return 0;
      };

      playersRef.on('value', (snapshot) => {
        const val = snapshot.val();
        const result = Object.keys(val).map(function(key) {
            return val[key];
          });
          result.sort(sortPlayers);
          this.setState({players: result});
          console.log(this.state.players);
      });
    }

    handleInputChange = (filters) => {
      this.setState({selectedFilters: filters });
    };

    createColumns = (filters) => {
      let columns = [];

      filters.forEach(function(filters) {
        const column = {Header: filters.label, accessor: filters.value};
        columns.push(column);
      });
      return columns;
    }
    

    render() {
      const filters = this.state.selectedFilters;
      let columns = [];
      if(filters){
        columns = this.createColumns(filters);
      }
      return (
        <div>
        <Select
        multi={true}
        name="input--filter"
        value={filters}
        onChange={this.handleInputChange}
        options={this.filters}
        />
        <ReactTable
          data={this.state.players}
          columns={columns}
        />
        </div>
      );
    }
  }

export default DataTable;