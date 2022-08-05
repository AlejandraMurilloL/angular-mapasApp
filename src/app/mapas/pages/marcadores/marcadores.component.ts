import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('map') mapContainer!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-72.905406595323, 5.759048607794546];
  
  constructor() { }

  ngAfterViewInit(): void { 
    this.map = new mapboxgl.Map({
    container: this.mapContainer.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.center, // starting position [lng, lat] 
      zoom: this.zoomLevel, // starting zoom
    });

    // const markerHtml: HTMLElement = document.createElement('div');
    // markerHtml.innerHTML = 'Hola mundo';

    // new mapboxgl.Marker({
    //   element: markerHtml
    // })
    //   .setLngLat(this.center)
    //   .addTo(this.map);
  }

}
