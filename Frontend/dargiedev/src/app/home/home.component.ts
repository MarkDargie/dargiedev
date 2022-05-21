import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiData!: any[];
  limit: number = 10;

  customOptions: OwlOptions = {
    loop:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // center: true,
    // autoHeight: true,
    // autoWidth: true,
    navSpeed: 100,
    autoplay: true,
    autoplaySpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2,
        margin: 500
      }
    },
    nav:true,
  }

  constructor(
    private reveal: NgsRevealConfig,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi[]>(api);

    http$.subscribe(
      res => this.apiData = res,
      err => throwError(err)
    )
  }

}
