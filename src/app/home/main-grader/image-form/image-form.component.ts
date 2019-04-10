import { Component, Input, OnChanges } from '@angular/core';
import { Image, FolderTreeService } from '@app/home/folder-tree.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormSelectionService } from '../form-selection.service';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss']
})
export class ImageFormComponent implements OnChanges {
  image: Image;
  schemaSub: Subscription;

  @Input('image') _image: Image;

  dynamicJSON: any;

  constructor(private folderTreeService: FolderTreeService, private formSelectionService: FormSelectionService) {
    // subscribe to home component messages
    this.schemaSub = this.formSelectionService.getMessage().subscribe((schema: string) => {
      this.dynamicJSON = this.formSelectionService.selectForm(schema);
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.schemaSub.unsubscribe();
  }

  ngOnChanges() {
    if (this._image != undefined) {
      let newvalue: Image = Object.assign({}, this._image);
      var path = this._image.path;
      path.push(this._image.name);
      this.folderTreeService
        .loadContent(path)
        .pipe(take(1))
        .subscribe((imagebit: string) => {
          newvalue.src = imagebit;
          this.image = newvalue;
        });
    } else {
      this.image = undefined;
    }
  }
}
