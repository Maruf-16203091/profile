import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project 1', subtitle: 'Subtitle 1', image: 'https://via.placeholder.com/300', description: 'Description for Project 1' },
    { title: 'Project 2', subtitle: 'Subtitle 2', image: 'https://via.placeholder.com/300', description: 'Description for Project 2' },
    { title: 'Project 3', subtitle: 'Subtitle 3', image: 'https://via.placeholder.com/300', description: 'Description for Project 3' },
    { title: 'Project 2', subtitle: 'Subtitle 2', image: 'https://via.placeholder.com/300', description: 'Description for Project 2' },
    { title: 'Project 4', subtitle: 'Subtitle 4', image: 'https://via.placeholder.com/300', description: 'Description for Project 4' },
    { title: 'Project 1', subtitle: 'Subtitle 1', image: 'https://via.placeholder.com/300', description: 'Description for Project 1' },
    { title: 'Project 2', subtitle: 'Subtitle 2', image: 'https://via.placeholder.com/300', description: 'Description for Project 2' },
    { title: 'Project 3', subtitle: 'Subtitle 3', image: 'https://via.placeholder.com/300', description: 'Description for Project 3' },
    { title: 'Project 2', subtitle: 'Subtitle 2', image: 'https://via.placeholder.com/300', description: 'Description for Project 2' },
    { title: 'Project 4', subtitle: 'Subtitle 4', image: 'https://via.placeholder.com/300', description: 'Description for Project 4' },
    // Add more projects as needed
  ];
}
