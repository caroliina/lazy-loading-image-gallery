import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private httpClient: HttpClient) {
    this.addItems();
  }

  API_URL = 'https://api.unsplash.com/';
  APPLICATION_ID = '8b1386cf2284bdb4a35742505a7280672f37ad0468897857b5b89d7290dd3bfa';
  ENDPOINT = '/photos/random/'

  title = 'Caroliina\'s Image Browser';
  introduction = 'Scroll down to lazy load random images from Unsplash';
  images = [];

  addItems() {
    this.httpClient.get(this.API_URL + this.ENDPOINT + '?client_id=' + this.APPLICATION_ID + '&count=10').subscribe((res) => {
      var images_res = [];

      Object.values(res).forEach(function(image) {
        images_res.push({url: image.urls.regular, text: image.alt_description});
      });

      this.images.push(images_res);
      this.images = [].concat(...this.images);
    });
  }

  onScrollDown() {
    this.addItems();
  }

}
