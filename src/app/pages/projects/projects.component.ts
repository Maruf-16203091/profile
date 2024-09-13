import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Platform',
      subtitle: 'Online Shopping Redefined',
      image: 'assets/project-1.png',
      description: 'A fully integrated e-commerce platform featuring a modern UI, user-friendly navigation, and secure payment options. Ideal for businesses looking to expand their online presence.',
      link: 'https://example.com/e-commerce-platform' // Link to the project
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Showcase Your Work',
      image: 'assets/project-2.png',
      description: 'A sleek and professional portfolio website designed to showcase individual or business achievements. Includes sections for work samples, testimonials, and contact information.',
      link: 'https://example.com/portfolio-website' // Link to the project
    },
    {
      title: 'Social Media Dashboard',
      subtitle: 'Manage Your Social Media Effortlessly',
      image: 'assets/project-3.png',
      description: 'An advanced social media dashboard that allows users to manage multiple accounts, schedule posts, and analyze engagement metrics all in one place.',
      link: 'https://example.com/social-media-dashboard' // Link to the project
    },
    {
      title: 'Real Estate App',
      subtitle: 'Find Your Dream Home',
      image: 'assets/project-4.png',
      description: 'A user-friendly real estate application that offers property listings, virtual tours, and detailed search filters to help users find their ideal home or commercial property.',
      link: 'https://example.com/real-estate-app' // Link to the project
    },
    {
      title: 'Fitness Tracker',
      subtitle: 'Achieve Your Fitness Goals',
      image: 'assets/project-5.jpg',
      description: 'A comprehensive fitness tracking application that monitors workouts, tracks progress, and provides personalized fitness plans to help users stay motivated and achieve their health goals.',
      link: 'https://example.com/fitness-tracker' // Link to the project
    },
    {
      title: 'Travel Booking System',
      subtitle: 'Plan Your Perfect Trip',
      image: 'assets/project-6.jpg',
      description: 'A travel booking system that allows users to search for flights, hotels, and rental cars. Features real-time availability, booking management, and a streamlined user interface for a seamless travel planning experience.',
      link: 'https://example.com/travel-booking-system' // Link to the project
    },
    {
      title: 'Social Media Dashboard',
      subtitle: 'Manage Your Social Media Effortlessly',
      image: 'assets/project-3.png',
      description: 'An advanced social media dashboard that allows users to manage multiple accounts, schedule posts, and analyze engagement metrics all in one place.',
      link: 'https://example.com/social-media-dashboard' // Link to the project
    },
    {
      title: 'Real Estate App',
      subtitle: 'Find Your Dream Home',
      image: 'assets/project-4.png',
      description: 'A user-friendly real estate application that offers property listings, virtual tours, and detailed search filters to help users find their ideal home or commercial property.',
      link: 'https://example.com/real-estate-app' // Link to the project
    },
    {
      title: 'Fitness Tracker',
      subtitle: 'Achieve Your Fitness Goals',
      image: 'assets/project-5.jpg',
      description: 'A comprehensive fitness tracking application that monitors workouts, tracks progress, and provides personalized fitness plans to help users stay motivated and achieve their health goals.',
      link: 'https://example.com/fitness-tracker' // Link to the project
    },
    {
      title: 'Travel Booking System',
      subtitle: 'Plan Your Perfect Trip',
      image: 'assets/project-6.jpg',
      description: 'A travel booking system that allows users to search for flights, hotels, and rental cars. Features real-time availability, booking management, and a streamlined user interface for a seamless travel planning experience.',
      link: 'https://example.com/travel-booking-system' // Link to the project
    }
  ];
}
