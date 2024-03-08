import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_SNACK_BAR_DATA, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MessageData, MessageType } from '../models/message-viewmodel';

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule, MatButtonModule, MatIconModule
  ],
  template: `
  <ng-container [ngSwitch]="data.type">
    <ng-container *ngSwitchCase="MessageType.OK">
        <ng-container *ngTemplateOutlet="OkMessageTpl"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="MessageType.WARNING">
        <ng-container *ngTemplateOutlet="WarningMessageTpl"></ng-container>
    </ng-container>
    <ng-container *ngSwitchCase="MessageType.ERROR">
        <ng-container *ngTemplateOutlet="ErrorMessageTpl"></ng-container>
    </ng-container>
</ng-container>


<ng-template #OkMessageTpl>
    <section class="flex items-center gap-2">
        <mat-icon class="text-green-800 w-8">
            task_alt
        </mat-icon>
        <p class="text-gray-800 w-full pt-1">{{data.titleKey}}</p>
        <span matSnackBarActions *ngIf="data.closeable">
            <ng-container *ngTemplateOutlet="CloseTpl"></ng-container>
        </span>
    </section>
</ng-template>

<ng-template #WarningMessageTpl>
    <section class="flex items-center gap-2">
        <mat-icon class="text-yellow-800 w-8">
            warning
        </mat-icon>
        <p class="text-gray-800 w-full pt-1">{{data.titleKey}}</p>
        <span matSnackBarActions *ngIf="data.closeable">
            <ng-container *ngTemplateOutlet="CloseTpl"></ng-container>
        </span>
    </section>
</ng-template>

<ng-template #ErrorMessageTpl>
    <section class="flex items-center gap-2">
        <mat-icon class="text-red-800 w-8">
            error
        </mat-icon>
        <p class="text-gray-800 w-full pt-1">{{data.titleKey}}</p>
        <span matSnackBarActions *ngIf="data.closeable">
            <ng-container *ngTemplateOutlet="CloseTpl"></ng-container>
        </span>
    </section>
</ng-template>

<ng-template #CloseTpl>
    <button mat-icon-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">
        <mat-icon class="text-gray-600">
            close
        </mat-icon>
    </button>
</ng-template>
`,
  styleUrls: ['./message-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDialogComponent { 
  
  protected readonly snackBarRef = inject(MatSnackBarRef);

  protected MessageType = MessageType;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: MessageData) { }
}
