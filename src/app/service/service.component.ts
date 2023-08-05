import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  serviceArray: Array<any> = [
    {
      icon: '../assets/Activity.png',
      role: 'Graphic Design',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fuga, nobis iste facere repudiandae voluptates natus qui omnis voluptate',
      linkSrc: '',
    },
    {
      icon: '../assets/Video.png',
      role: 'Video Editing',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fuga, nobis iste facere repudiandae voluptates natus qui omnis voluptate',
      linkSrc: '',
    },
    {
      icon: '../assets/Chart.png',
      role: 'Digital Marketing',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique fuga, nobis iste facere repudiandae voluptates natus qui omnis voluptate',
      linkSrc: '',
    },
  ];
}
