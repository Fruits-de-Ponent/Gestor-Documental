import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeIn, slideIn } from '../config/animations.config';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'files',
  templateUrl: './files.component.html',
  animations: [slideIn, fadeIn]
})

export class FilesComponent implements OnInit {

  constructor(private request: RequestService) { }

  @Input() files: any;
  @Input() path: string;
  @Input() expanded: boolean;
  @Output() fileEvent = new EventEmitter<Object>();

  ngOnInit(): void {
    this.expanded = true;
  }

  getFile(file: string): string {
    return this.request.getFile(this.path, file);
  };

  fileEmitter(type: string, file: string) {
    this.fileEvent.emit({ type: type, file: file });
  }
}
