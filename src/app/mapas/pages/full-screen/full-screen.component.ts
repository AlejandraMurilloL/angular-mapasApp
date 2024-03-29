import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #map {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    

    const map = new mapboxgl.Map({
      container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-72.905406595323, 5.759048607794546], // starting position [lng, lat] 
        zoom: 15, // starting zoom
      });
      map.on('style.load', () => {
    });
  }

}
