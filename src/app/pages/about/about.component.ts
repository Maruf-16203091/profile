import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  jobs = [
    {
      title: 'Full Stack Developer',
      company: 'Bosch Rexroth',
      type: 'Internship',
      duration: 'Aug 2024 - Present',
      description: 'I\'m excited to share that I\'ve started my full-time voluntary internship at Bosch Rexroth in Ulm! 🚀 Over the coming months, I\'ll be working with PHP, Angular, MySQL, and a range of other technologies to contribute to innovative projects in the industry.',
      logo: 'assets/bosch-rexroth-logo.png'
    },
    {
      title: 'Software Developer',
      company: 'Liebelei Liköre',
      type: 'Part-time',
      duration: 'Oct 2023 - Nov 2023',
      description: 'As a digitalization strategist, my role involves spearheading our digitalization strategy\'s creation, adaptation, and optimization, primarily focusing on enhancing our web shop capabilities. I am dedicated to ensuring that our IT architecture remains dynamic and efficient, constantly fine-tuning hardware and software solutions to keep our technology infrastructure at the cutting edge.',
      logo: 'assets/liebelei-likoere-logo.png'
    },
    {
      title: 'Laravel Developer',
      company: 'Fiverr',
      type: 'Part-time',
      duration: 'Jan 2020 - Feb 2022',
      description: 'Working as laravel developer on fiverr.',
      logo: 'assets/liebelei-likoere-logo.png'
    },
    {
      title: 'Software Developer',
      company: 'SST Tech Ltd.',
      type: 'Internship',
      duration: 'Jan 2020 - April 2020',
      description: 'I worked there as internship developer. I have helped many live projects such as Ecommerce, HRM.',
      logo: 'assets/liebelei-likoere-logo.png'
    },
    // Add other jobs here...
  ];

  educationList = [
    {
      degree: 'Master\'s degree',
      field: 'Web Engineering',
      institution: 'Technische Universität Chemnitz',
      duration: 'Oct 2021 - Oct 2024',
      description: 'Alhamdulillah. Thanks to the almighty Allah for giving me the opportunity. Special thanks to my family members and friends for their support. I would like to thank myself for believing in me.',
      logo: 'assets/tu-chemnitz-logo.png'
    },
    {
      degree: 'Bachelor\'s degree',
      field: 'Computer Science',
      institution: 'International University of Business Agriculture and Technology',
      duration: '2016 - 2020',
      description: 'Grade: CGPA 3.80. Activities and societies: Cricket, Badminton, Football.',
      logo: 'assets/iubat-logo.png'
    },
    // Add other education details here...
  ];

  constructor() { }

  ngOnInit(): void { }
}
