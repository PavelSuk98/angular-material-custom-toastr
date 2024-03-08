import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'custom-toastr-17';

  protected messageService = inject(MessageService)

  ngOnInit(): void {
    this.messageService.showMessage('Cool toaster');
  }

  showNotification(): void {
    this.messageService.showMessage('Cool toaster');
  }
}
