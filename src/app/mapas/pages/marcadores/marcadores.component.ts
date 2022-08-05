import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface CustomMarker {
  color: string;
  marker: mapboxgl.Marker;
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
      .map-container {
        width: 100%;
        height: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
      }

      li {
        cursor: pointer;
      }
    `
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('map') mapContainer!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [-72.905406595323, 5.759048607794546];

  markers: CustomMarker[] = [];
  
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

  goToMarker(marker: mapboxgl.Marker) {
    const center = marker.getLngLat();
    this.map.flyTo({
      center: center
    });
  }

  addMarker() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));

    const newMarker = new mapboxgl.Marker({
        draggable: true,
        color
      })
      .setLngLat(this.center)
      .addTo(this.map);

    this.markers.push({ color, marker: newMarker });
  }

  saveMarkerInLocalStorage() {

  }

  readLocalStorage() {
    
  }

}
