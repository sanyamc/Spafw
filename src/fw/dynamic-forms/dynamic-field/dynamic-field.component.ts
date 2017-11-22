import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldDefinition } from '../field-definition';

@Component({
  selector: 'fw-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css'],
})
export class DynamicFieldComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() field: FieldDefinition
  @Input() operation: string;
  @Input() submitted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
