import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('map') mapContainer!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 15;

  constructor() { }

  ngAfterViewInit(): void { 
      this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-72.905406595323, 5.759048607794546], // starting position [lng, lat] 
        zoom: this.zoomLevel, // starting zoom
      });

      this.map.on('zoom', () => {
        this.zoomLevel = this.map.getZoom();
      });

      this.map.on('zoomend', () => {
        if (this.map.getZoom() > 18) {
          this.map.zoomTo(18);
        }
      });
  }

  zoomOut() {
    this.map.zoomOut();
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomChanged(zoom: string) {
    this.map.zoomTo(Number(zoom));
  }
}
