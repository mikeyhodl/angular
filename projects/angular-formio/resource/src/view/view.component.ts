import {Component, OnDestroy} from '@angular/core';
import { FormioResourceService } from '../resource.service';
import { FormioResourceConfig } from '../resource.config';
import {Formio} from '@formio/js';
import { FormioComponent } from '@formio/angular';

@Component({
  templateUrl: './view.component.html',
    imports: [FormioComponent]
})
export class FormioResourceViewComponent implements OnDestroy{
  constructor(
    public service: FormioResourceService,
    public config: FormioResourceConfig
  ) {}
  public submission = {data: {}};

  ngOnDestroy() {
    Formio.clearCache();
  }
}
