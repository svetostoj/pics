import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] }
    onSearchSubmit = async (term) => {
        // console.log(term);
        const response = await unsplash.get('/search/photos', {
            params: { query: term },

        });
        // console.log(response.data.results);
        this.setState({ images: response.data.results })
    }
    // svetostoj@gmail.com OpremDobr0 ili OpremD0bro
    // access key 11a1dc9a6b13ac6402d3bea44f778d75b100d948a8c59aa9d640862b5639f6fc
    // secret key bb7de049e96d241ac2e2a24fef358dc99807653986e79b1f120fff0b5a8b5d82
    // https://api.unsplash.com/search/photos


    render() {
        return <div className="ui container" style={{ margin: '20px' }}>
            <SearchBar onSubmitXXX={this.onSearchSubmit}>

            </SearchBar>
            <div><ImageList images= {this.state.images}/></div><br/>
            Found: {this.state.images.length} images
        </div>
    }
}

export default App;