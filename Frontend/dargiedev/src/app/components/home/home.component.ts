import { Component, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Test } from 'src/app/models/test.model';
import { catchError, tap } from 'rxjs/operators';

export interface Slide {

  id: string;
  marginL: number;
  marginR: number,
  center: boolean;
  src: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiData!: any[];
  limit: number = 4;
  slides: Slide[] = [];
  tests!: Test[];

  customOptions: OwlOptions = {
    loop:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    //center: true,
    autoHeight: true,
    autoWidth: true,
    navSpeed: 1500,
    autoplay: false,
    autoplaySpeed: 2000,
    smartSpeed: 1500,
    //stagePadding: 100,
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
        margin: 500,
        //stagePadding: 1000
      }
    },
    //nav:true,
  }

  constructor(
    private reveal: NgsRevealConfig,
    private http: HttpClient,
    private dataService: DataService
    ) { }

  ngOnInit(): void {

    this.dataService.getTestData().pipe(
      tap((results)=>{
        this.tests = results;
        console.log(results);
      }),catchError((error)=>{
        console.log(error);
        return of(false);
      })
    ).subscribe();
  }

  genereateSlides(){

    for(let i = 1; i < this.limit; i++) {
      if(i == 1){
        let slide = {
          id: i.toString(),
          marginL: 500,
          marginR: 250,
          center: false,
          src: "../../assets/img/gameimg.png", 
        }
        this.slides.push(slide);
      } else{
        let slide = {
          id: i.toString(),
          marginL: 250,
          marginR: 250,
          center: false,
          src: "../../assets/img/gameimg.png", 
        }
        this.slides.push(slide);
      }

    }

  }

}

