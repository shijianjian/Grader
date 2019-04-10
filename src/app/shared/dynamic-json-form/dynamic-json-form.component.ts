import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-json-form',
  templateUrl: './dynamic-json-form.component.html',
  styleUrls: ['./dynamic-json-form.component.scss']
})
export class DynamicJsonFormComponent implements OnChanges {
  @Input('json') dynamicJSON: [];
  questionFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  onFromSubmit(event: Event) {
    console.log(event);
  }

  ngOnChanges() {
    this.sortDynamicJson();
    var dynamicGroup: any = {};
    this.dynamicJSON.forEach(element => {
      if (element['key'] in dynamicGroup) {
        throw new ReferenceError('key must be unique.');
      }
      // dynamicGroup[element['key']] = this.formBuilder.control({
      //   value: [element['value'], [element['required'] ? Validators.required:null]]
      // })
      dynamicGroup[element['key']] = this.formBuilder.control(element['value'], [
        element['required'] ? Validators.required : null
      ]);
    });
    console.log(dynamicGroup);
    this.questionFormGroup = this.formBuilder.group(dynamicGroup);
    console.log(this.questionFormGroup.controls);
    // this.generateForm();
  }

  generateForm() {
    this.dynamicJSON.forEach(t => {
      console.log(t);
      console.log(this.questionFormGroup.controls);
      let questions = <FormArray>this.questionFormGroup.controls[t['key']];
      questions.push(
        this.formBuilder.group({
          value: [t['value'], [t['required'] ? Validators.required : null]]
        })
      );
    });
  }

  sortDynamicJson() {
    let newArray = this.dynamicJSON;
    let result: any = [];
    newArray.forEach(element => {
      result.push(element);
    });
    result.sort((a: any, b: any) => a.order - b.order);
    this.dynamicJSON = result;
  }
}
