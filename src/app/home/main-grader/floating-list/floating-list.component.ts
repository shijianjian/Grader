import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Image } from '@app/home/folder-tree.service';
import { Subscription } from 'rxjs';
import { FormSelectionService } from '../form-selection.service';

@Component({
  selector: 'app-floating-list',
  templateUrl: './floating-list.component.html',
  styleUrls: ['./floating-list.component.scss']
})
export class FloatingListComponent implements OnChanges, OnInit {
  @Input('images') images: Image[];
  @Output() clickOn = new EventEmitter();

  // TODO: move initial schema out of the loop
  schema: string = 'eyebrain';

  ngOnChanges() {
    this.imageClicked(undefined);
  }

  constructor(private formSelectionService: FormSelectionService) {}

  ngOnInit() {
    this.formSelectionService.sendSchema(this.schema);
  }

  imageClicked(image: {}) {
    this.clickOn.emit({ image_info: image });
  }

  onSchemaChange(event: Event) {
    this.formSelectionService.sendSchema(event['value']);
  }
}
