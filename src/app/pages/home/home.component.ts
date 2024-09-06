import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer: ElementRef | undefined;

  messages = [
    { text: 'Hi there!', sent: true, delay: 1 },
    { text: 'Hello! How are you?', sent: false, delay: 2 },
    { text: 'I am good, thanks! How about you?', sent: true, delay: 3 },
    { text: 'I’m doing well. Thanks for asking!', sent: false, delay: 4 },
    { text: 'What are you up to today?', sent: true, delay: 5 },
    { text: 'Just working on some projects.', sent: false, delay: 6 },
    { text: 'Sounds interesting!', sent: true, delay: 7 },
    { text: 'Yeah, it’s been a productive day.', sent: false, delay: 8 }
  ];

  constructor() {}

  ngOnInit(): void {
    // Optional: any initialization code
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {}
    }
  }
}
