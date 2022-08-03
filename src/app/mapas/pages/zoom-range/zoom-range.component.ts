import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .row {
        background-color: white;
        bottom: 50px;
        left: 30px;
        padding: 10px;
        border-radius: 5px;
        position: fixed;
        z-index: 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    

    const map = new mapboxgl.Map({
      container: 'mapZoomRange', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-72.905406595323, 5.759048607794546], // starting position [lng, lat] 
        zoom: 15, // starting zoom
      });
      map.on('style.load', () => {
    });
  }

}
