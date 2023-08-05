import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navlink: Array<any>=[
    {
      link:'Home',
      linkSrc:'',
    },
    {
      link:'About Us',
      linkSrc:'',
    },
    {
      link:'Our App',
      linkSrc:'',
    },
    {
      link:'Contacts',
      linkSrc:'',
    },
    
  ]


}
