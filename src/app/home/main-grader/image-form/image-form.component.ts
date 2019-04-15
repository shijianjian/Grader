import { Component, Input, OnChanges, ElementRef } from '@angular/core';
import { Image, FolderTreeService } from '@app/home/folder-tree.service';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { FormSelectionService } from '../form-selection.service';
// https://blog.lysender.com/2018/07/angular-6-cannot-resolve-crypto-fs-net-path-stream-when-building-angular/
var Tiff = require('assets/tiff.js/tiff.min.js');
var { decode } = require('base64-arraybuffer');

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

  constructor(
    private elementRef: ElementRef,
    private folderTreeService: FolderTreeService,
    private formSelectionService: FormSelectionService
  ) {
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
      const stage: HTMLElement = this.elementRef.nativeElement.querySelector('.stage');
      if (stage.childNodes.length != 0) {
        stage.removeChild(stage.childNodes.item(0));
      }

      this.folderTreeService
        .getImage(this._image.path)
        .pipe(take(1))
        .subscribe((imagebit: any) => {
          // TODO: if .tiff
          const content = decode(imagebit['data']);
          const t = new Tiff({ buffer: content });
          const canvas = t.toCanvas();
          canvas.style.maxWidth = '100%';
          stage.append(canvas);
        });
      this.image = this._image;
    } else {
      this.image = undefined;
    }
  }
}
