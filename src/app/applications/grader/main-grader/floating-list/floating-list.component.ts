import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Image } from '@app/types/Image';
import { FormSelectionService } from '../form-selection.service';

@Component({
  selector: 'app-floating-list',
  templateUrl: './floating-list.component.html',
  styleUrls: ['./floating-list.component.scss']
})
export class FloatingListComponent implements OnChanges, OnInit {
  @Input('images') images: Image[];
  @Output() clickOn = new EventEmitter();
  selected: number;

  // TODO: move initial schema out of the loop
  schema: string;
  schemas: any[];

  display_icon(status: string): string {
    if (status == 'completed') {
      return 'check';
    }
    if (status == 'not_applicable') {
      return 'block';
    }
    if (status == 'reviewing') {
      return 'contact_support';
    }
    return 'note';
  }

  ngOnChanges() {
    this.imageClicked(undefined, undefined);
  }

  constructor(private formSelectionService: FormSelectionService) {}

  ngOnInit() {
    this.formSelectionService.getAllSchemas().subscribe((value: any[]) => {
      this.schemas = value;
      this.schema = this.schemas[0].value;
      this.formSelectionService.sendSchema(this.schema);
    });
  }

  imageClicked(id: number, image: Image) {
    this.selected = id;
    this.clickOn.emit({ image_info: image });
  }

  onSchemaChange(event: Event) {
    this.formSelectionService.sendSchema(event['value']);
  }
}
