import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  jobs = [
    {
      title: 'Full Stack Developer',
      company: 'Bosch Rexroth',
      type: 'Internship',
      duration: 'Aug 2024 - Present',
      description:
        'At Bosch Rexroth, I am tasked with developing and maintaining code using PHP and Angular, focusing on building and enhancing web applications. My responsibilities include working with MySQL to design schemas, write queries, and manage data effectively',
      logo: 'assets/bosch.jpg',
    },
    {
      title: 'Software Developer',
      company: 'Liebelei Liköre',
      type: 'Working Student',
      duration: 'Oct 2023 - Nov 2023',
      description:
        "As a digitalization strategist, my role involves spearheading our digitalization strategy's creation, adaptation, and optimization, primarily focusing on enhancing our web shop capabilities. I am dedicated to ensuring that our IT architecture remains dynamic and efficient, constantly fine-tuning hardware and software solutions to keep our technology infrastructure at the cutting edge.",
      logo: 'assets/libelei.png',
    },
    {
      title: 'Fullstack Developer',
      company: 'Fiverr',
      type: 'Part-time',
      duration: 'Jan 2020 - Feb 2022',
      description:
        'As a Full Stack Developer on Fiverr, I have had the opportunity to work on a diverse range of projects, collaborating with clients from various industries. My role involved handling both front-end and back-end development tasks, which required a deep understanding of technologies like PHP, Laravel, Angular, and React.',
      logo: 'assets/fiverrr.png',
    },
    {
      title: 'Software Developer',
      company: 'SST Tech Ltd.',
      type: 'Internship',
      duration: 'Jan 2020 - April 2020',
      description:
        'As an intern developer at SST Tech Ltd., I contributed significantly to various live projects, including eCommerce platforms and Human Resource Management (HRM) systems. My role involved not only coding and debugging but also collaborating closely with senior developers to ensure the successful delivery of high-quality software solutions',
      logo: 'assets/sst.jpg',
    },
    // Add other jobs here...
  ];

  educationList = [
    {
      degree: "Master's degree",
      field: 'Web Engineering',
      institution: 'Technische Universität Chemnitz',
      duration: 'Oct 2021 - Oct 2024',
      description:
        'I am currently pursuing a Master’s degree in Web Engineering at Technische Universität Chemnitz. This program is equipping me with advanced knowledge and practical skills in web development technologies. Through coursework and hands-on projects, I am deepening my expertise in both front-end and back-end development.',
      logo: 'assets/tu-chemnitz.png',
    },
    {
      degree: "Bachelor's degree",
      field: 'Computer Science',
      institution:
        'International University of Business Agriculture and Technology',
      duration: 'May 2016 - June 2020',
      description:
        'I completed my Bachelor’s degree in Computer Science at the International University of Business Agriculture and Technology (IUBAT). This program provided a solid foundation in various aspects of computing, including programming, algorithms, data structures, and software development',
      logo: 'assets/iubat.png',
    },
    // Add other education details here...
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
