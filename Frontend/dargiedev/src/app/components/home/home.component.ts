import { Component, HostListener, OnInit } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Test } from 'src/app/models/test.model';
import { catchError, tap } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {test, imageTextLeft, developmentTextLeft, iconsFromBottom} from './home-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    test.animeTrigger, imageTextLeft.animeTrigger,
    developmentTextLeft.animeTrigger, iconsFromBottom.firstIcon,
    iconsFromBottom.secondIcon, iconsFromBottom.thirdIcon, iconsFromBottom.fourthIcon, iconsFromBottom.fifthIcon
  ],
})

export class HomeComponent implements OnInit {

  apiData!: any[];
  limit: number = 4;
  tests!: Test[];
  isOpen = true;
  fadeInLeft = true;

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

  revealOptions = {
    reset: false, 
    origin: 'bottom', 
    distance: '100px', 
    duration: 1400, 
    delay: 300,
  }

  constructor(
    private reveal: NgsRevealConfig,
    private http: HttpClient,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(){
    console.log("tracking mouse position", window.pageYOffset );
    
  }


  

}

