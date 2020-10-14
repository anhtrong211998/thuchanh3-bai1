import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  blogs: any;
  ngOnInit(): void {

    this.blogs = [
      {
       blog_img:'assets/images/blog/medium-size/4.jpg',
       blog_name:'Blog Image Post',
      blog_src:'test cai khac cho phan biet',
      },
      {
      blog_img:'assets/images/blog/medium-size/3.jpg',
      blog_name:'Blog First Gallery Post',
     blog_src:'lai test cho no bang nhau',
     }
    ];
  }

}
