import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styles: [
    `
      div {
        width: 100%;
        height: 150px;
        margin: 0;
      }
    `
  ]
})
export class MiniMapaComponent implements AfterViewInit {

  @Input() LngLat: [number, number] = [0, 0];
  @ViewChild('map') mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: this.LngLat, // starting position [lng, lat] 
        zoom: 15, // starting zoom
        interactive: false
      });

    new mapboxgl.Marker()
      .setLngLat(this.LngLat)
      .addTo(map);
  }

}
