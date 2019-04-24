import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-project-panel',
  templateUrl: './project-panel.component.html',
  styleUrls: ['./project-panel.component.scss']
})
export class ProjectPanelComponent implements OnInit {
  @Input() studies = [
    {
      key: 'CNTG',
      value: 'cntg'
    },
    {
      key: 'STDR',
      value: 'stdr'
    }
  ];
  @Output() studyChange: EventEmitter<object> = new EventEmitter();

  expand: boolean = true;
  current_selection: string;

  constructor() {}

  ngOnInit() {}

  onSelctionChange(event: MatSelectChange) {
    this.current_selection = event.value;
    this.expand = false;
    console.log(this.expand);
    this.studyChange.emit({ study: this.current_selection });
  }

  setExpand(expand: boolean) {
    this.expand = expand;
    console.log(this.expand);
  }
}
