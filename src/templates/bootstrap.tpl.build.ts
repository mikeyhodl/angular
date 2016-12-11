// THIS IS A GENERATED FILE. DO NOT MODIFY!!!
/* eslint-disable */
/* tslint-disable */
import { FormioTemplate } from '../formio.template';
import { DatepickerModule, TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectModule } from 'ng2-select/ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { AlignDirective } from '../components/signature/signature';
import { SignaturePadModule } from 'angular2-signaturepad';

let getTemplate = function(template: string) {
    return {component: {template: template}};
};
export const FORMIO_BOOTSTRAP: FormioTemplate = {
    formio: {
        component: {
            template: "<i style=\"font-size: 2em;\" *ngIf=\"!(ready | async)\" class=\"formio-loading glyphicon glyphicon-refresh glyphicon-spin\"></i>\n<formio-wizard *ngIf=\"(ready | async) && (form.display === \'wizard\')\" [src]=\"src\" [form]=\"form\" [submission]=\"submission\"></formio-wizard>\n<form *ngIf=\"(ready | async) && (!form.display || (form.display === \'form\'))\" (submit)=\"onSubmit($event)\" [formGroup]=\"formGroup\">\n    <formio-errors [errors]=\"events.errors\" [options]=\"options.errors\"></formio-errors>\n    <formio-components *ngIf=\"ready | async\" [components]=\"form.components\" [form]=\"formGroup\" [submission]=\"formGroup\" [data]=\"submission.data\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n</form>\n",
            styles: [
                '.form-group.required .control-label:after { content:"*"; color:red; }',
                '.glyphicon-spin { -webkit-animation: spin-anim 1s infinite; animation: spin-anim 1s infinite; }',
                '@-webkit-keyframes spin-anim {0% { -webkit-transform: rotate(0deg);transform: rotate(0deg);}100% { -webkit-transform: rotate(359deg);transform: rotate(359deg);}}',
                '@keyframes spin-anim {0% { -webkit-transform: rotate(0deg);transform: rotate(0deg);}100% { -webkit-transform: rotate(359deg);transform: rotate(359deg);}}'
            ]
        }
    },
    formio_wizard: {
        component: {
            template:"<div class=\"row bs-wizard\" [ngClass]=\"{\'hasTitles\': (pages[0].title ? true : false)}\" style=\"border-bottom:0;\">\n    <div *ngFor=\"let panel of pages; let i = index;\" [style.marginLeft.%]=\"i==0 ? margin: 0\" class=\"{{colClass}} bs-wizard-step\" [ngClass]=\"{\'disabled\': (i > currentPage), \'active\': (i == currentPage), \'complete\': (i < currentPage), \'noTitle\': !panel.title}\" >\n        <div class=\"bs-wizard-stepnum-wrapper\">\n            <div class=\"text-center bs-wizard-stepnum\" *ngIf=\"panel.title\">{{ panel.title }}</div>\n        </div>\n        <div class=\"progress\"><div class=\"progress-bar progress-bar-primary\"></div></div>\n        <a (click)=\"goto(i)\" class=\"bs-wizard-dot bg-primary\"><div class=\"bs-wizard-dot-inner bg-success\"></div></a>\n    </div>\n</div>\n<formio [form]=\"page\" [submission]=\"submission\" (change)=\"onChange($event)\" id=\"formio-wizard-form\"></formio>\n<ul *ngIf=\"ready\" class=\"list-inline\">\n    <li *ngIf=\"currentPage > 0\"><a class=\"btn btn-primary\" (click)=\"prev()\">Previous</a></li>\n    <li *ngIf=\"currentPage < (pages.length - 1)\">\n        <a class=\"btn btn-primary\" (click)=\"next()\">Next</a>\n    </li>\n    <li *ngIf=\"currentPage >= (pages.length - 1)\">\n        <a class=\"btn btn-primary\" (click)=\"onSubmitWizard()\">Submit Form</a>\n    </li>\n</ul>\n",
            styles: [
                '.bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;line-height: 1em;}',
                '.bs-wizard > .bs-wizard-step {padding: 0; position: relative;}',
                '.bs-wizard > .bs-wizard-step + .bs-wizard-step {}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-stepnum-wrapper {position:absolute;width:100%}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 12px; line-height:15px;}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-info {color: #999; font-size: 14px;}',
                '.bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 30px; height: 30px; display: block; top: 25px; left: 50%; margin-top: -15px; margin-left: -15px; border-radius: 50%; cursor:pointer;z-index:10;}',
                '.bs-wizard.hasTitles > .bs-wizard-step > .bs-wizard-dot {top: 45px;}',
                '.bs-wizard > .bs-wizard-step > .bs-wizard-dot > .bs-wizard-dot-inner {width: 14px; height: 14px; border-radius: 50px; position: absolute; top: 8px; left: 8px; }',
                '.bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 10px; box-shadow: none; margin: 20px 0;border: none;padding: 0;}',
                '.bs-wizard.hasTitles > .bs-wizard-step > .progress {margin-top: 40px;}',
                '.bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none;}',
                '.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;border-radius:0;}',
                '.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:50%;}',
                '.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}',
                '.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}',
                '.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {background-color: #f5f5f5;}',
                '.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot > .bs-wizard-dot-inner {opacity: 0;}',
                '.bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}',
                '.bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}',
                '.bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }'
            ]
        }
    },
    formio_component: getTemplate("<div class=\"form-group\" [ngClass]=\"{\'has-error\': (errors.length > 0)}\" *ngIf=\"show\">\n    <div *ngFor=\"let comp of components; let i = index;\" style=\"position:relative;\">\n        <button *ngIf=\"component.multiple && (i > 0)\" class=\"btn btn-danger\" style=\"position:absolute;right:0;\" (click)=\"removeAt(i)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button>\n        <formio-element [form]=\"form\" [component]=\"comp\" [submission]=\"submission\" [data]=\"data\" [label]=\"label\" [events]=\"events\" [render]=\"render\"></formio-element>\n        <button *ngIf=\"comp.allowMultiple() && (i === (components.length - 1))\" type=\"button\" class=\"btn btn-default\" (click)=\"addComponent()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button>\n    </div>\n    <div *ngIf=\"(components.length > 0)\">\n        <p *ngFor=\"let error of errors\" class=\"text-danger\">{{ error }}</p>\n    </div>\n</div>\n"),
    formio_components: getTemplate("<formio-component *ngFor=\"let component of components\" [component]=\"component\" [form]=\"form\" [submission]=\"submission\" [data]=\"data\" [events]=\"events\" (render)=\"onRender()\" class=\"form-row\" (change)=\"$event.stopPropagation()\"></formio-component>\n"),
    errors: getTemplate("<div class=\"alert alert-danger\" *ngIf=\"errors.length\">\n  <strong>{{ options.message }}</strong>\n  <ul>\n    <li *ngFor=\"let error of errors\">{{ error.message }}</li>\n  </ul>\n</div>"),
    components: {
        button: getTemplate("<button type=\"submit\" [disabled]=\"component.settings.disableOnInvalid && !form.valid\" class=\"btn btn-{{ component.settings.theme }}\">{{ component.settings.label }}</button>"),
        columns: getTemplate("<div class=\"row\">\n    <div *ngFor=\"let column of component.settings.columns\" class=\"col col-sm-6\">\n        <formio-components [components]=\"column.components\" [form]=\"form\" [submission]=\"submission\" [data]=\"data\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n    </div>\n</div>\n"),
        container: getTemplate("<formio-components [components]=\"component.settings.components\" [form]=\"component.control\" [submission]=\"submission\" [data]=\"component.getData()\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n"),
        datagrid: getTemplate("<div class=\"formio-data-grid\">\n    <table [ngClass]=\"{\n        \'table-striped\': component.settings.striped,\n        \'table-bordered\': component.settings.bordered,\n        \'table-hover\': component.settings.hover,\n        \'table-condensed\': component.settings.condensed\n    }\" class=\"table datagrid-table\">\n        <thead>\n            <tr>\n                <th *ngFor=\"let component of component.settings.components\">{{ component.label }}</th>\n                <th style=\"width: 1em;\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let control of component.control.controls; let i = index;\">\n                <td *ngFor=\"let _component of component.settings.components\"><formio-component [component]=\"_component\" [form]=\"control\" [submission]=\"submission\" [data]=\"component.getData(i)\" [label]=\"false\" [events]=\"events\" (render)=\"onRender()\"></formio-component></td>\n                <td style=\"width: 1em;\"><button type=\"button\" class=\"btn btn-default\" (click)=\"component.removeAt(i)\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n        </tbody>\n        <tfoot>\n            <tr><td [attr.colspan]=\"component.settings.components.length + 1\"><button type=\"button\" class=\"btn btn-default\" (click)=\"component.addAnother()\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></button></td></tr>\n        </tfoot>\n    </table>\n</div>\n"),
        input: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div [ngClass]=\"{\'input-group\': (component.settings.prefix || component.settings.suffix)}\">\n        <div *ngIf=\"component.settings.prefix\" class=\"input-group-addon\">{{ component.settings.prefix }}</div>\n        <input [formControl]=\"component.control\" [id]=\"component.settings.key\" [type]=\"component.settings.inputType\" [placeholder]=\"component.settings.placeholder\"\n               [minlength]=\"component.settings.minlength\" [maxlength]=\"component.settings.maxlength\" [pattern]=\"component.settings.pattern\" [tabindex]=\"component.settings.tabindex\" class=\"form-control\" />\n        <div *ngIf=\"component.settings.suffix\" class=\"input-group-addon\">{{ component.settings.suffix }}</div>\n    </div>\n</div>\n"),
        textarea: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div [ngClass]=\"{\'input-group\': (component.settings.prefix || component.settings.suffix)}\">\n        <div *ngIf=\"component.settings.prefix\" class=\"input-group-addon\">{{ component.settings.prefix }}</div>\n        <textarea [formControl]=\"component.control\" [id]=\"component.settings.key\" [placeholder]=\"component.settings.placeholder\" [rows]=\"component.settings.rows\" class=\"form-control\"\n                  [minlength]=\"component.settings.minlength\" [maxlength]=\"component.settings.maxlength\" [pattern]=\"component.settings.pattern\" [tabindex]=\"component.settings.tabindex\"></textarea>\n        <div *ngIf=\"component.settings.suffix\" class=\"input-group-addon\">{{ component.settings.suffix }}</div>\n    </div>\n</div>\n"),
        hidden: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\">\n    <input [formControl]=\"component.control\" [id]=\"component.settings.key\" type=\"hidden\" [name]=\"component.settings.name\" class=\"form-control\" />\n</div>\n"),
        radio: getTemplate("<div [formGroup]=\"form\" class=\"form-group radio\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div class=\"input-group\">\n        <div *ngFor=\"let option of component.settings.values\" [class.radio-inline]=\"component.settings.inline\">\n            <label [attr.for]=\"component.settings.key\">\n                <input type=\"radio\" [formControl]=\"component.control\" class=\"radio\" name=\"{{component.settings.key}}\" value=\"{{option.value}}\" />\n                {{ option.label }}\n            </label>\n        </div>\n    </div>\n</div>\n"),
        checkbox: getTemplate("<div [formGroup]=\"form\" class=\"checkbox\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">\n        <input type=\"checkbox\" [formControl]=\"component.control\" [id]=\"component.settings.key\" [name]=\"component.settings.key\" />\n        {{ component.label }}\n    </label>\n</div>\n"),
        custom: getTemplate("<div class=\"well text-muted\" style=\"text-align:center;\">Custom Component</div>\n"),
        table: getTemplate("<div class=\"table-responsive\">\n    <table [ngClass]=\"{\n        \'table-striped\': component.settings.striped,\n        \'table-bordered\': component.settings.bordered,\n        \'table-hover\': component.settings.hover,\n        \'table-condensed\': component.settings.condensed\n    }\" class=\"table\">\n        <tbody *ngFor=\"let control of component.control.controls;\">\n        <tr *ngFor=\"let row of component.settings.rows\">\n            <td *ngFor=\"let data of row\">\n                <div *ngFor=\"let component of data.components\">\n                    <formio-component [component]=\"component\" [form]=\"control\" [events]=\"events\" (render)=\"onRender()\"></formio-component>\n                </div>\n            </td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n"),
        panel: getTemplate("<div [formGroup]=\"form\" class=\"form-group\">\n    <div class=\"panel\" [ngClass]=\"{\n        \'panel-default\': component.settings.theme==\'default\',\n        \'panel-primary\': component.settings.theme==\'primary\',\n        \'panel-success\': component.settings.theme==\'success\',\n        \'panel-info\': component.settings.theme==\'info\',\n        \'panel-warning\': component.settings.theme==\'warning\',\n        \'panel-danger\': component.settings.theme==\'danger\'\n    }\">\n        <div *ngIf=\"component.settings.title\" class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{component.settings.title}}</h3>\n        </div>\n        <div class=\"panel-body\">\n            <formio-components [components]=\"component.settings.components\" [form]=\"component.control\" [submission]=\"submission\" [data]=\"data\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n        </div>\n    </div>\n</div>\n"),
        fieldset: getTemplate("<div [formGroup]=\"form\" class=\"form-group\">\n    <fieldset>\n        <legend *ngIf=\"component.settings.legend\">{{ component.settings.legend }}</legend>\n        <formio-components [components]=\"component.settings.components\" [form]=\"component.control\" [submission]=\"submission\" [data]=\"data\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n    </fieldset>\n</div>\n"),
        well: getTemplate("<div [formGroup]=\"form\" class=\"form-group\">\n    <div class=\"well\">\n        <formio-components [components]=\"component.settings.components\" [form]=\"component.control\" [submission]=\"submission\" [data]=\"data\" [events]=\"events\" (render)=\"onRender()\"></formio-components>\n    </div>\n</div>\n"),
        datetime: {
            component: {
                template:"<div [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\"><h3>{{ component.label }}</h3></label>\n    <div class=\"input-group\">\n        <input [formControl]=\"component.control\" value=\"{{showDateTime ? (getDate() ? (getDate()| date: dateFormat):\'\') +\' \'+ (time?(time | date:\'HH:mm\'):\'\'):\'\' }}\" [type]=\"text\" [placeholder]=\"component.settings.placeholder\" class=\"form-control\" (click)=\"selectDate()\" />\n        <span class=\"input-group-addon\" (click)=\"selectDate()\"><i *ngIf=\"component.settings.enableDate\" class=\"glyphicon glyphicon-calendar\"></i><i *ngIf=\"!component.settings.enableDate\" class=\"glyphicon glyphicon-time\"></i></span>\n    </div>\n    <div *ngIf=\"displayDate\" class=\"showDate\">\n        <datepicker ngDefaultControl [(ngModel)]=\"selectedDate\" (click)=\"selectTime(selectedDate)\" [dateDisabled]=\"component.settings.enableDate\" [showWeeks]=\"component.settings.datePicker.showWeeks\" [startingDay]=\"component.settings.datePicker.startingDay\" [minMode]=\"component.settings.datePicker.minMode\" [maxMode]=\"component.settings.datePicker.maxMode\" [yearRange]=\"component.settings.datePicker.yearRange\" [datepickerMode]=\"component.settings.datePicker.datepickerMode\"></datepicker>\n        <div class=\"buttonsSpace\">\n            <span class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"today()\">Today</button>\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n            </span>\n            <span class=\"btn-group pull-right\">\n                <button *ngIf=\"component.settings.enableTime\" type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"selectFirstTime()\">Time</button>\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"close()\">Close</button>\n            </span>\n        </div>\n    </div>\n    <div *ngIf=\"displayTime\" class=\"showTime\">\n        <timepicker ngDefaultControl [(ngModel)]=\"time\" (click)=\"checkDate()\" [hourStep]=\"component.settings.timePicker.hourStep\" [minuteStep]=\"component.settings.timePicker.minuteStep\" [showMeridian]=\"component.settings.timePicker.showMeridian\" [readonlyInput]=\"component.settings.timePicker.readonlyInput\" [mousewheel]=\"component.settings.timePicker.mousewheel\" [arrowkeys]=\"component.settings.timePicker.arrowkeys\"></timepicker>\n        <div class=\"buttonsSpace\">\n            <span class=\"btn-group pull-left\">\n                <button type=\"button\" class=\"btn btn-sm btn-info\" (click)=\"now()\">Now</button>\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"clear()\">Clear</button>\n            </span>\n            <span class=\"btn-group pull-right\">\n                <button *ngIf=\"component.settings.enableDate\" type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"selectDate()\">Date</button>\n                <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"close()\">Close</button>\n            </span>\n        </div>\n    </div>\n</div>\n",
                styles: [".showDate {width:48vmin;border:1px solid #ccc;}", ".showTime {width:53vmin;height:22vmin;border:1px solid #ccc;}", ".buttonsSpace {padding:5px;}"]
            },
            module: {
                imports: [DatepickerModule, TimepickerModule]
            }
        },
        selectboxes: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div class=\"input-group\">\n        <div *ngFor=\"let option of component.settings.values; let i = index;\" [ngClass]=\"{\'checkbox-inline\': component.settings.inline==true,\'checkbox\': component.settings.inline==false}\">\n            <label [attr.for]=\"component.settings.key\">\n                <input type=\"checkbox\" [checked]=\"selected[option.value] ? option.value : \'\' \" (change)=\"selected[option.value] ? (selected[option.value] = false) : (selected[option.value] = true)\" [formControl]=\"component.control\"  name=\"{{component.settings.key}}\" value=\"{{option.value}}\"/>\n                {{ option.label }}\n            </label>\n        </div>\n    </div>\n</div>\n "),
        content: getTemplate("<div class = \"{{component.settings.customClass}}\" id=\"{{component.settings.key}}\">\n    <div [innerHtml] = \"element\"></div>\n</div>\n"),
        html: getTemplate("<div class = \"{{component.settings.customClass}}\" id=\"{{component.settings.key}}\">\n    <div [innerHtml] = \"element\"></div>\n</div>\n"),
        currency: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div [ngClass]=\"{\'input-group\': (component.settings.prefix || component.settings.suffix)}\">\n        <div *ngIf=\"component.settings.prefix\" class=\"input-group-addon\">{{ component.settings.prefix }}</div>\n        <input type=\"text\" [formControl]=\"component.control\" [(ngModel)]=\"inputs\" (keyup)=\"inputs = onChange(inputs)\" [id]=\"component.settings.key\" [placeholder]=\"component.settings.placeholder\" class=\"form-control\" />\n        <div *ngIf=\"component.settings.suffix\" class=\"input-group-addon\">{{ component.settings.suffix }}</div>\n    </div>\n</div>\n"),
        select: {
            component: {
                template: "<div [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\"><h3>{{ component.label }}</h3></label>\n    <ng-select [items]=\"component.settings.data.values\"\n               (data)=\"refreshValue($event)\"\n               (selected)=\"selected($event)\"\n               (removed)=\"removed($event)\"\n               [multiple]=\"component.settings.multiple\"\n               [placeholder]=\"component.settings.placeholder\">\n    </ng-select>\n</div>\n"
            },
            module: {
                imports: [SelectModule]
            }
        },
        survey: getTemplate("<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-bordered\">\n            <thead>\n            <tr>\n                <td></td>\n                <td  *ngFor=\"let control of component.settings.values;\" style=\"text-align: center;\">\n                    {{control.label}}\n                </td>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let row of component.settings.questions;\">\n                <td>{{row.label}}</td>\n                <td *ngFor=\"let col of component.settings.values;\" style=\"text-align: center;\">\n                    <input type=\"radio\" [checked]=\"valueObj[row.value]==col.value ? true : false\" (click)=\"str=getValue(row.value, col.value)\" [value]=\"str\" id=\"{{row.label+\'-\'+col.label}}\" name=\"{{row.label+\'-\'+col.label}}\" [formControl]=\"component.control\" />\n                </td>\n            </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"),
        resource: {
            component: {
                template: "<div class=\"{{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\"><h3>{{ component.label }}</h3></label>\n    <ng-select [items]=\"component.settings.defaultValue\"\n               (data)=\"refreshValue($event)\"\n               [multiple]=\"component.settings.multiple\"\n               [placeholder]=\"component.settings.placeholder\"\n               (typed)=\"searchData($event)\"\n               (selected)=\"selected($event)\"\n               (removed)=\"removed($event)\">\n    </ng-select>\n</div>\n"
            },
            module: {
                imports: [SelectModule]
            }
        },
        address: {
            component: {
                template: "<div class=\"{{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\"><h3>{{ component.label }}</h3></label>\n    <ng-select [items]=\"selectedItem\"\n               (data)=\"refreshValue($event)\"\n               [multiple]=\"component.settings.multiple\"\n               [placeholder]=\"component.settings.placeholder\"\n               (typed)=\"searchData($event)\"\n               (selected)=\"selected($event)\">\n    </ng-select>\n</div>\n"
            },
            module: {
                imports: [SelectModule]
            }
        },
        phoneNumber: {
            component: {
                template: "<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"component.label\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div [ngClass]=\"{\'input-group\': (component.settings.prefix || component.settings.suffix)}\">\n        <div *ngIf=\"component.settings.prefix\" class=\"input-group-addon\">{{ component.settings.prefix }}</div>\n        <input [textMask]=\"{mask: mask}\" [(ngModel)]=\"phone\" (keyup)=\"phone = unmask(phone)\" [type]=\"text\" [formControl]=\"component.control\" [id]=\"component.settings.key\" [placeholder]=\"component.settings.placeholder\" class=\"form-control\" />\n        <div *ngIf=\"component.settings.suffix\" class=\"input-group-addon\">{{ component.settings.suffix }}</div>\n    </div>\n</div>\n"
            },
            module: {
                imports: [TextMaskModule]
            }
        },
        signature: {
            component: {
                template: "<div [formGroup]=\"form\" class=\"form-group {{component.settings.customClass}}\" [ngClass]=\"{\'required\': (component.settings.validate && component.settings.validate.required)}\">\n    <label *ngIf=\"!component.settings.hideLabel\" [attr.for]=\"component.settings.key\" class=\"control-label\">{{ component.label }}</label>\n    <div class=\"input-group\" style=\"display: block;\" align>\n        <div [style.width.px]=\"setWidth\" [style.height.px]=\"setHeight\">\n            <a class=\"btn btn-xs btn-default clearButton\" (click)=\"clearSignature()\"><span class=\"glyphicon glyphicon-refresh\"></span></a>\n            <signature-pad [options]=\"signaturePadOptions\" (onEndEvent)=\"drawComplete()\"></signature-pad>\n            <div class=\"footer\">{{component.settings.footer}}</div>\n        </div>\n    </div>\n</div>\n",
                styles: [".clearButton {position:absolute; left: 0; top: 0; z-index: 1000}", ".footer {text-align: center; color:#C3C3C3;}"]
            },
            module: {
                imports: [SignaturePadModule],
                declarations: [AlignDirective]
            }
        }
    }
};
