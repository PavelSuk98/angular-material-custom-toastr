import {Injectable, inject} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarModule,
} from '@angular/material/snack-bar';

import { MessageType } from '../models/message-viewmodel';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Injectable({ providedIn: 'root' })
export class MessageService {

  protected readonly snackBbar = inject(MatSnackBar)

  showMessage(titleKey: string, actionKey?: string, type: MessageType = MessageType.OK, closeable: boolean = false): void {
    this.snackBbar.openFromComponent(MessageDialogComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      data: { titleKey: titleKey, actionKey: actionKey, type: type, closeable: closeable }
    });
  }
}
