import React, { Component } from 'react';

export default class Map extends Component {
  componentDidMount() {
    this.map();
  }
  componentDidUpdate() {
    this.map();
  }
  map() {
    const { lat, lng } = this.props;
    const uluru = { lat, lng };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      draggable: true,
      map,
      animation: google.maps.Animation.DROP,
    });
  }
  render() {
    return (
      <div id="map" style={{ position: 'fixed' }} />
    );
  }
}
