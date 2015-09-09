var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation = require('./CurrentLocation');
var LocationList = require('./LocationList');

var App = React.creatClass({

  getInitialState(){
    var favorites = [];

    if(localStorage.favorites){
      favorites = JSON.parse(localStorage.favorites);

    }

    return {
      favorites: favorites,

      currentAddress: 'Paris, France',

      mapCoordinates: {
        lat: 48.856614,
        lng: 2.3522219
      }
    };
  },

  toggleFavorites(address){
    if(this.isAddressInFavorites(address)){

      this.removeFromFavorites(address);
    }
    else{
      this.addToFavorites(address);
    }
  },

  addToFavorites(address){
    var favorites = this.state.favorites;

    favorites.push({

      favorites: favorites

    });

    localStorage.favorites = JSON.stringify(favorites);

  },

  removeFromFavorites(address){
    var favorites = this.state.favorites;
    var index = -1;

    for(var i = 0; i < favorites.length; i ++){

      if (favorites[i].address == address){
        index = 1;

        break;
      }
    }

    if(index !== -1);
      favorites.splice(index, 1);

      this.setState ({

        favorites: favorites
      });

      localStorage.favorites = JSON.stringify(favorites);
    }
  },

  isAddressInFavorites(address){
    var favorites = this.state.favorites;

    for(var i = 0; i < favorites.length; i ++){

      if(favorites[i].address == address){

        return true;
      }
    }

    return false;
  },

  searchForAddress(address){
    var self = this;
    // Uses GMaps geocode functionality (built on top of Google Maps API)

    GMaps.geocode({
      address: address,
      callback: function(results, status) {

        if (status !== 'OK') return;

        var latlng = results[0].geometry.location;

        self.setState({

          currentAddress: results[0].formatted_address,

          mapCoordinates: {
            lat: latlng.lat(),
            lng: latlng.lng()
          }

        });

      }
    });
  ){
    return (
      <div>
        <h1>Location</h1>

        <Search onSearch={this.searchForAddress} />

        <Map lat={this.state.mapCoordinates.lat} lng{this.state.mapCoordinates.lng} />
    )
  }
  }

})
