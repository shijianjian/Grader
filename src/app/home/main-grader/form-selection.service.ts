import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class FormSelectionService {
  private subject = new Subject<string>();

  sendSchema(schema: string) {
    this.subject.next(schema);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }

  selectForm(schema: string) {
    if (schema == 'eyebrain') {
      return this.eyebrainjson;
    } else if (schema == 'etdrs') {
      return this.ajson;
    } else {
      throw new RangeError();
    }
  }

  getAllSchemas(): Observable<any[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next([
          {
            key: 'Eye Brain',
            value: 'eyebrain',
            disable: false
          },
          {
            key: 'ETDRS',
            value: 'etdrs',
            disable: true
          }
        ]);
      }, 500);
    });
  }

  eyebrainjson = [
    {
      key: 'radio',
      label: 'Radio',
      type: 'radio',
      value: '',
      items: [
        {
          key: 'gradable',
          label: 'Gradable'
        },
        {
          key: 'ungradable',
          label: 'Ungradable'
        }
      ],
      required: true,
      order: 1
    },
    {
      key: 'comments',
      label: 'Comments',
      type: 'text',
      value: '',
      required: true,
      order: 5
    },
    {
      key: 'last11_ame',
      label: 'Last Name',
      type: 'text',
      value: '',
      required: true,
      order: 3
    }
  ];

  ajson = [
    {
      key: 'radio',
      label: 'Radio',
      type: 'radio',
      value: '',
      items: [
        {
          key: 'gradable',
          label: 'Gradable'
        },
        {
          key: 'ungradable',
          label: 'Ungradable'
        }
      ],
      required: true,
      order: 1
    }
  ];
}
