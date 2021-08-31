import React, {Component} from 'react';
import { fetchResults } from './api';
import SearchList from './SearchList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchKey: '',
            searchResults: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    }
    handleSearchValueChange(e) {
        this.setState({...this.state, searchKey: e.target.value})
    }
    handleSearch (e) {
        if (e.key === 'Enter') {
            fetchResults(this.state.searchKey)
            .then((res) => {
                for(let work of res.works) {
                    this.setState({...this.state, searchResults: [...this.state.searchResults, {...work}]})
                }
            })
        }
        // console.log('search');
    }
    render() {
        return <div style={{width: '100vw', height: '100vh', textAlign: 'center'}}>
            <input type="text" placeholder="search" 
            onChange={this.handleSearchValueChange}
            onKeyDown={this.handleSearch}
            style={{
                padding: '10px',
                fontSize: '16px',
                border: '1px solid grey',
                width: '50%',
                background: '#f1f1f1'
            }}/>

            {
                (this.state.searchResults.length > 0) && <SearchList data={this.state.searchResults}/>
            }
        </div>
    }
}

export default App;