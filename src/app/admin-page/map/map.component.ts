import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // markers:any 
  @Input() markers: any[] =[] ;
  @Output() markersChange = new EventEmitter();


  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  center: google.maps.LatLngLiteral = {lat: this.lat,
    lng: this.lng}
  
  
  zoom = 1
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 2,
  }

  constructor() { 
    this.markers.push({
      position: 
        { lat: 38.9987208, lng: -77.2538699 },
      label: {
        text: 'Marker label ' ,
      },
      title: 'Marker title ' ,
    })
    // ,{
    //   position: 
    //     { lat: 38.9987208, lng: -7.2538699 },
    //   label: {
    //     text: 'Marker label ' ,
    //   },
    //   title: 'Marker title ' ,
    // }]
  }
//   marker = {
//     position: { lat: 38.9987208, lng: -77.2538699 },
//  }
 

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    console.log(this.markers)
  }


// addMarker() {
//     this.markers.push({
//       position: {
//         lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
//         lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
//       },
//       label: {
//         color: 'red',
//         text: 'Marker label ' + (this.markers.length + 1),
//       },
//       title: 'Marker title ' + (this.markers.length + 1),
//       options: { animation: google.maps.Animation.BOUNCE },
//     })
//   }

  
}
