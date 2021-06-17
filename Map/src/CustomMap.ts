import { User } from "./User";
import { Company } from "./Company";

//developers.google.com/maps/documentation/javascript/infowindows

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  addUserMarker(user: User): void {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        const marker = new google.maps.Marker({
          map: this.googleMap,
          position: {
            lat: user.location.lat + i,
            lng: user.location.lng + j,
          },
        });
        const marker2 = new google.maps.Marker({
          map: this.googleMap,
          position: {
            lat: user.location.lat + j,
            lng: user.location.lng + i,
          },
        });
        marker.addListener("click", () => {
          const infowindows = new google.maps.InfoWindow({
            content: `Your Business rank : ${Math.round((i + j) / 2)} Position`,
          });

          infowindows.open(this.googleMap, marker);
        });
        marker2.addListener("click", () => {
          const infowindows = new google.maps.InfoWindow({
            content: `Your Business rank : ${Math.round((i + j) / 2)} Position`,
          });

          infowindows.open(this.googleMap, marker2);
        });
      }
    }
  }
}
