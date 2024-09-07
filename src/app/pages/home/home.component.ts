import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer: ElementRef | undefined;

  messages = [
    { text: 'MESSAGE_1', sent: true, delay: 1 },
    { text: 'MESSAGE_2', sent: false, delay: 2 },
    { text: 'MESSAGE_3', sent: true, delay: 3 },
    { text: 'MESSAGE_4', sent: false, delay: 4 },
    { text: 'MESSAGE_5', sent: true, delay: 5 },
    { text: 'MESSAGE_6', sent: false, delay: 6 },
    { text: 'MESSAGE_7', sent: true, delay: 7 },
    { text: 'MESSAGE_8', sent: false, delay: 8 }
  ];

  constructor() {}

  ngOnInit(): void {
    // Initialization code if needed
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error('Error scrolling to bottom:', err);
      }
    }
  }
}
