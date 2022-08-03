import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../../environments/environment.prod';

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

    (mapboxgl as any).accessToken = environment.mapBoxToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
      });
      map.on('style.load', () => {
    });
  }

}