export interface MessageData {
    titleKey: string;

    actionKey: string;

    type: MessageType;

    closeable: boolean;
}


export enum MessageType {
    OK = 'Ok',
    ERROR = 'Error',
    WARNING = 'Warning'
}