export class FileReaderEvent extends Event {
    target: FileReaderEventTarget;
}
export class FileReaderEventTarget extends EventTarget {
    result: string
}
