import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {
    async onSearchSubmit(term) {
        // console.log(term);
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 11a1dc9a6b13ac6402d3bea44f778d75b100d948a8c59aa9d640862b5639f6fc'
            }
        });
        console.log(response.data.results);
    }

    // access key 11a1dc9a6b13ac6402d3bea44f778d75b100d948a8c59aa9d640862b5639f6fc
    // secret key bb7de049e96d241ac2e2a24fef358dc99807653986e79b1f120fff0b5a8b5d82
    // https://api.unsplash.com/search/photos


    render() {
        return <div className="ui container" style={{ margin: '20px' }}>
            <SearchBar onSubmitXXX={this.onSearchSubmit}>

            </SearchBar>
        </div>
    }
}

export default App;