(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+QCh":
/*!********************************************************!*\
  !*** ./src/app/components/pure-task-list.component.ts ***!
  \********************************************************/
/*! exports provided: PureTaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureTaskListComponent", function() { return PureTaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.component */ "I+ea");




function PureTaskListComponent_app_task_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onArchiveTask", function PureTaskListComponent_app_task_1_Template_app_task_onArchiveTask_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onArchiveTask.emit($event); })("onPinTask", function PureTaskListComponent_app_task_1_Template_app_task_onPinTask_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onPinTask.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r3);
} }
function PureTaskListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You have no tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sit back and relax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PureTaskListComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "cool");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "state");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [1, 2, 3, 4, 5, 6]; };
function PureTaskListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PureTaskListComponent_div_3_div_1_Template, 9, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class PureTaskListComponent {
    constructor() {
        /** The list of tasks */
        /**
         * Component property to define ordering of tasks
         */
        this.tasksInOrder = [];
        /** Checks if it's in loading state */
        this.loading = false;
        /** Event to change the task to pinned */
        // tslint:disable-next-line: no-output-on-prefix
        this.onPinTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Event to change the task to archived */
        // tslint:disable-next-line: no-output-on-prefix
        this.onArchiveTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set tasks(arr) {
        this.tasksInOrder = [
            ...arr.filter(t => t.state === 'TASK_PINNED'),
            ...arr.filter(t => t.state !== 'TASK_PINNED'),
        ];
    }
}
PureTaskListComponent.ɵfac = function PureTaskListComponent_Factory(t) { return new (t || PureTaskListComponent)(); };
PureTaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PureTaskListComponent, selectors: [["app-pure-task-list"]], inputs: { loading: "loading", tasks: "tasks" }, outputs: { onPinTask: "onPinTask", onArchiveTask: "onArchiveTask" }, decls: 4, vars: 3, consts: [[1, "list-items"], [3, "task", "onArchiveTask", "onPinTask", 4, "ngFor", "ngForOf"], ["class", "wrapper-message", 4, "ngIf"], [4, "ngIf"], [3, "task", "onArchiveTask", "onPinTask"], [1, "wrapper-message"], [1, "icon-check"], [1, "title-message"], [1, "subtitle-message"], ["class", "loading-item", 4, "ngFor", "ngForOf"], [1, "loading-item"], [1, "glow-checkbox"], [1, "glow-text"]], template: function PureTaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PureTaskListComponent_app_task_1_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PureTaskListComponent_div_2_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PureTaskListComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasksInOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tasksInOrder.length === 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PureTaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pure-task-list',
                template: `
  <div class="list-items">
  <app-task
    *ngFor="let task of tasksInOrder"
    [task]="task"
    (onArchiveTask)="onArchiveTask.emit($event)"
    (onPinTask)="onPinTask.emit($event)"
  >
  </app-task>

  <div *ngIf="tasksInOrder.length === 0 && !loading" class="wrapper-message">
    <span class="icon-check"></span>
    <div class="title-message">You have no tasks</div>
    <div class="subtitle-message">Sit back and relax</div>
  </div>

  <div *ngIf="loading">
    <div *ngFor="let i of [1, 2, 3, 4, 5, 6]" class="loading-item">
      <span class="glow-checkbox"></span>
      <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
    </div>
  </div>
</div>
  `,
            }]
    }], null, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPinTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onArchiveTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tasks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bstjohn/dev/nacelle-ui/ng-nacelle/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "I+ea":
/*!**********************************************!*\
  !*** ./src/app/components/task.component.ts ***!
  \**********************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TaskComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_a_7_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onPin(ctx_r1.task.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskComponent {
    constructor() {
        // tslint:disable-next-line: no-output-on-prefix
        this.onPinTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line: no-output-on-prefix
        this.onArchiveTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Component method to trigger the onPin event
     * @param id string
     */
    onPin(id) {
        this.onPinTask.emit(id);
    }
    /**
     * Component method to trigger the onArchive event
     * @param id string
     */
    onArchive(id) {
        this.onArchiveTask.emit(id);
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { onPinTask: "onPinTask", onArchiveTask: "onArchiveTask" }, decls: 8, vars: 6, consts: [[1, "checkbox", "kirpal"], ["type", "checkbox", "disabled", "true", "name", "checked", 3, "defaultChecked"], [1, "checkbox-custom", 3, "click"], [1, "title"], ["type", "text", "readonly", "true", "placeholder", "Input title", 3, "value"], [1, "actions"], [3, "click", 4, "ngIf"], [3, "click"], [1, "icon-star"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_span_click_3_listener() { return ctx.onArchive(ctx.task.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskComponent_a_7_Template, 2, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("list-item ", ctx.task == null ? null : ctx.task.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultChecked", (ctx.task == null ? null : ctx.task.state) === "TASK_ARCHIVED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.task == null ? null : ctx.task.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.state) !== "TASK_ARCHIVED");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                template: `
  <div class="list-item {{ task?.state }}">
  <label class="checkbox kirpal">
    <input
      type="checkbox"
      [defaultChecked]="task?.state === 'TASK_ARCHIVED'"
      disabled="true"
      name="checked"
    />
    <span class="checkbox-custom" (click)="onArchive(task.id)"></span>
  </label>
  <div class="title">
    <input
      type="text"
      [value]="task?.title"
      readonly="true"
      placeholder="Input title"
    />
  </div>
  <div class="actions">
    <a *ngIf="task?.state !== 'TASK_ARCHIVED'" (click)="onPin(task.id)">
      <span class="icon-star"></span>
    </a>
  </div>
</div>
  `,
            }]
    }], null, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPinTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onArchiveTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "LAMF":
/*!******************************************************!*\
  !*** ./src/app/components/inbox-screen.component.ts ***!
  \******************************************************/
/*! exports provided: InboxScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxScreenComponent", function() { return InboxScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _state_task_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/task.state */ "cuOo");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _pure_inbox_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pure-inbox-screen.component */ "bocf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class InboxScreenComponent {
}
InboxScreenComponent.ɵfac = function InboxScreenComponent_Factory(t) { return new (t || InboxScreenComponent)(); };
InboxScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InboxScreenComponent, selectors: [["app-inbox-screen"]], decls: 2, vars: 3, consts: [[3, "error"]], template: function InboxScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pure-inbox-screen", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.error$));
    } }, directives: [_pure_inbox_screen_component__WEBPACK_IMPORTED_MODULE_5__["PureInboxScreenComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_task_state__WEBPACK_IMPORTED_MODULE_3__["TasksState"].getError),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], InboxScreenComponent.prototype, "error$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InboxScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-inbox-screen',
                template: `
    <app-pure-inbox-screen [error]="error$ | async"></app-pure-inbox-screen>
  `,
            }]
    }], null, { error$: [] }); })();


/***/ }),

/***/ "QRH3":
/*!*******************************************!*\
  !*** ./src/app/components/task.module.ts ***!
  \*******************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.component */ "I+ea");
/* harmony import */ var _task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-list.component */ "fzhB");
/* harmony import */ var _state_task_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/task.state */ "cuOo");
/* harmony import */ var _pure_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pure-task-list.component */ "+QCh");









class TaskModule {
}
TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskModule_Factory(t) { return new (t || TaskModule)(); }, providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([_state_task_state__WEBPACK_IMPORTED_MODULE_5__["TasksState"]])]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"], _pure_task_list_component__WEBPACK_IMPORTED_MODULE_6__["PureTaskListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["ɵbc"]], exports: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forFeature([_state_task_state__WEBPACK_IMPORTED_MODULE_5__["TasksState"]])],
                exports: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"]],
                declarations: [_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_list_component__WEBPACK_IMPORTED_MODULE_4__["TaskListComponent"], _pure_task_list_component__WEBPACK_IMPORTED_MODULE_6__["PureTaskListComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_inbox_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/inbox-screen.component */ "LAMF");



class AppComponent {
    constructor() {
        this.title = 'taskbox';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inbox-screen");
    } }, directives: [_components_inbox_screen_component__WEBPACK_IMPORTED_MODULE_1__["InboxScreenComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
  <app-inbox-screen></app-inbox-screen>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_task_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/task.module */ "QRH3");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ "/wON");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_inbox_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inbox-screen.component */ "LAMF");
/* harmony import */ var _components_pure_inbox_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pure-inbox-screen.component */ "bocf");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_task_module__WEBPACK_IMPORTED_MODULE_2__["TaskModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([]),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_inbox_screen_component__WEBPACK_IMPORTED_MODULE_7__["InboxScreenComponent"], _components_pure_inbox_screen_component__WEBPACK_IMPORTED_MODULE_8__["PureInboxScreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _components_task_module__WEBPACK_IMPORTED_MODULE_2__["TaskModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"], _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_inbox_screen_component__WEBPACK_IMPORTED_MODULE_7__["InboxScreenComponent"], _components_pure_inbox_screen_component__WEBPACK_IMPORTED_MODULE_8__["PureInboxScreenComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _components_task_module__WEBPACK_IMPORTED_MODULE_2__["TaskModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forRoot([]),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsLoggerPluginModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bocf":
/*!***********************************************************!*\
  !*** ./src/app/components/pure-inbox-screen.component.ts ***!
  \***********************************************************/
/*! exports provided: PureInboxScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureInboxScreenComponent", function() { return PureInboxScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-list.component */ "fzhB");




function PureInboxScreenComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Oh no!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Something went wrong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PureInboxScreenComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Taskbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-task-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PureInboxScreenComponent {
}
PureInboxScreenComponent.ɵfac = function PureInboxScreenComponent_Factory(t) { return new (t || PureInboxScreenComponent)(); };
PureInboxScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PureInboxScreenComponent, selectors: [["app-pure-inbox-screen"]], inputs: { error: "error" }, decls: 2, vars: 2, consts: [["class", "page lists-show", 4, "ngIf"], [1, "page", "lists-show"], [1, "wrapper-message"], [1, "icon-face-sad"], [1, "title-message"], [1, "subtitle-message"], [1, "title-page"], [1, "title-wrapper"]], template: function PureInboxScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PureInboxScreenComponent_div_0_Template, 7, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PureInboxScreenComponent_div_1_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _task_list_component__WEBPACK_IMPORTED_MODULE_2__["TaskListComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PureInboxScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pure-inbox-screen',
                template: `
    <div *ngIf="error" class="page lists-show">
      <div class="wrapper-message">
        <span class="icon-face-sad"></span>
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>

    <div *ngIf="!error" class="page lists-show">
      <nav>
        <h1 class="title-page">
          <span class="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <app-task-list></app-task-list>
    </div>
  `,
            }]
    }], null, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cuOo":
/*!*************************************!*\
  !*** ./src/app/state/task.state.ts ***!
  \*************************************/
/*! exports provided: actions, ArchiveTask, PinTask, AppError, TaskStateModel, TasksState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveTask", function() { return ArchiveTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinTask", function() { return PinTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStateModel", function() { return TaskStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksState", function() { return TasksState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");


// Defines the actions available to the app
const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
    // Defines the new error field we need
    ERROR: 'APP_ERROR'
};
class ArchiveTask {
    constructor(payload) {
        this.payload = payload;
    }
}
ArchiveTask.type = actions.ARCHIVE_TASK;
class PinTask {
    constructor(payload) {
        this.payload = payload;
    }
}
PinTask.type = actions.PIN_TASK;
// The class definition for our error field
class AppError {
    constructor(payload) {
        this.payload = payload;
    }
}
AppError.type = actions.ERROR;
// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = {
    1: { id: '1', title: 'Something', state: 'TASK_INBOX' },
    2: { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    3: { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    4: { id: '4', title: 'Something again', state: 'TASK_INBOX' },
};
class TaskStateModel {
}
// Sets the default state
let TasksState = class TasksState {
    static getAllTasks(state) {
        const entities = state.entities;
        return Object.keys(entities).map(id => entities[+id]);
    }
    // Defines a new selector for the error field
    static getError(state) {
        const { error } = state;
        return error;
    }
    //
    // Triggers the PinTask action, similar to redux
    pinTask({ patchState, getState }, { payload }) {
        const state = getState().entities;
        const entities = Object.assign(Object.assign({}, state), { [payload]: Object.assign(Object.assign({}, state[payload]), { state: 'TASK_PINNED' }) });
        patchState({
            entities,
        });
    }
    // Triggers the PinTask action, similar to redux
    archiveTask({ patchState, getState }, { payload }) {
        const state = getState().entities;
        const entities = Object.assign(Object.assign({}, state), { [payload]: Object.assign(Object.assign({}, state[payload]), { state: 'TASK_ARCHIVED' }) });
        patchState({
            entities,
        });
    }
    // Function to handle how the state should be updated when the action is triggered
    setAppError({ patchState, getState }, { payload }) {
        const state = getState();
        patchState({
            error: !state.error,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(PinTask),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, PinTask]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TasksState.prototype, "pinTask", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(ArchiveTask),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, ArchiveTask]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TasksState.prototype, "archiveTask", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(AppError),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, AppError]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TasksState.prototype, "setAppError", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TaskStateModel]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TasksState, "getAllTasks", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [TaskStateModel]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], TasksState, "getError", null);
TasksState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'tasks',
        defaults: {
            entities: defaultTasks,
            error: false
        },
    })
], TasksState);



/***/ }),

/***/ "fzhB":
/*!***************************************************!*\
  !*** ./src/app/components/task-list.component.ts ***!
  \***************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _state_task_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/task.state */ "cuOo");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _pure_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pure-task-list.component */ "+QCh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









class TaskListComponent {
    constructor(store) {
        this.store = store;
    }
    /**
     * Component method to trigger the archiveTask event
     */
    archiveTask(id) {
        this.store.dispatch(new _state_task_state__WEBPACK_IMPORTED_MODULE_3__["ArchiveTask"](id));
    }
    /**
     * Component method to trigger the pinTask event
     */
    pinTask(id) {
        this.store.dispatch(new _state_task_state__WEBPACK_IMPORTED_MODULE_3__["PinTask"](id));
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 2, vars: 3, consts: [[3, "tasks", "onArchiveTask", "onPinTask"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-pure-task-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onArchiveTask", function TaskListComponent_Template_app_pure_task_list_onArchiveTask_0_listener($event) { return ctx.archiveTask($event); })("onPinTask", function TaskListComponent_Template_app_pure_task_list_onPinTask_0_listener($event) { return ctx.pinTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tasks", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.tasks$));
    } }, directives: [_pure_task_list_component__WEBPACK_IMPORTED_MODULE_5__["PureTaskListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_task_state__WEBPACK_IMPORTED_MODULE_3__["TasksState"].getAllTasks),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], TaskListComponent.prototype, "tasks$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-task-list',
                template: `
    <app-pure-task-list
      [tasks]="tasks$ | async"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { tasks$: [] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map