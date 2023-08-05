import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonialArray: Array<any> = [
    {
      imgSrc: '../assets/Mask1.png',
      review:
        'Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support',
      author: 'RAYHAN CURRAN',
    },
    {
      imgSrc: '../assets/Mask3.png',
      review:
        'As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website',
      author: 'KAYLEY FRAME',
    },
    {
      imgSrc: '../assets/Mask2.png',
      review: 'The most important part of the Startup Framework is the samples',
      author: 'GENE WHITFIELD',
    },
    {
      imgSrc: '../assets/Mask4.png',
      review:
        'I’ve built my website with Startup just in one day, and it was ready-to-go. ',
      author: 'ALLAN KIM',
    },
  ];


  teamArray:Array<any>=[
    {
      imgSrc:'../assets/team1.png',
      teamMember:'Vanessa Laird',
      teamRole:'UI DESIGNER',
    },
    {
      imgSrc:'../assets/team2.png',
      teamMember:'Mason Campbell',
      teamRole:'UI DESIGNER',
    },
    {
      imgSrc:'../assets/team3.png',
      teamMember:'Irea Evans',
      teamRole:'CLIENT MANAGER',
    },
  ]

  date!: Date;
  year!: number;

  ngOnInit(): void {
    this.date = new Date();
    this.year = this.date.getFullYear();
  }
}
