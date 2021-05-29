(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corretora-corretora-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/corretora/corretora.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/corretora/corretora.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecalho [titulo]=\"corretora.nome\"></app-cabecalho>\n\n<ion-content>\n  <ion-list>\n    <ion-item\n      href=\"{{ corretora.paginaInicial }}\"\n      target=\"_blank\"\n      rel=\"external\"\n    >\n      <ion-label>Página inicial</ion-label>\n    </ion-item>\n    <ion-item\n      href=\"{{ corretora.paginaOrdens }}\"\n      target=\"_blank\"\n      rel=\"external\"\n    >\n      <ion-label>Página das ordens de compra e venda</ion-label>\n    </ion-item>\n    <ion-item\n      href=\"{{ corretora.paginaContato }}\"\n      target=\"_blank\"\n      rel=\"external\"\n    >\n      <ion-label>Página de contato</ion-label>\n    </ion-item>\n    <ion-list-header>\n      <ion-label>Observação</ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-note>{{ corretora.observacao }}</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/corretora/corretora.module.ts":
/*!***********************************************!*\
  !*** ./src/app/corretora/corretora.module.ts ***!
  \***********************************************/
/*! exports provided: CorretoraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorretoraPageModule", function() { return CorretoraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _corretora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corretora.page */ "./src/app/corretora/corretora.page.ts");
/* harmony import */ var _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comum/comum.module */ "./src/app/comum/comum.module.ts");








const routes = [
    {
        path: '',
        component: _corretora_page__WEBPACK_IMPORTED_MODULE_6__["CorretoraPage"]
    }
];
let CorretoraPageModule = class CorretoraPageModule {
};
CorretoraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__["ComumModule"],
        ],
        declarations: [_corretora_page__WEBPACK_IMPORTED_MODULE_6__["CorretoraPage"]],
    })
], CorretoraPageModule);



/***/ }),

/***/ "./src/app/corretora/corretora.page.scss":
/*!***********************************************!*\
  !*** ./src/app/corretora/corretora.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcnJldG9yYS9jb3JyZXRvcmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/corretora/corretora.page.ts":
/*!*********************************************!*\
  !*** ./src/app/corretora/corretora.page.ts ***!
  \*********************************************/
/*! exports provided: CorretoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorretoraPage", function() { return CorretoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _corretora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corretora.service */ "./src/app/corretora/corretora.service.ts");




let CorretoraPage = class CorretoraPage {
    constructor(router, corretoraService) {
        this.router = router;
        this.corretoraService = corretoraService;
    }
    ngOnInit() {
        const idCorretora = this.router.snapshot.paramMap.get('idCorretora');
        this.corretora = this.corretoraService.corretoraPeloId(idCorretora);
    }
};
CorretoraPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _corretora_service__WEBPACK_IMPORTED_MODULE_3__["CorretoraService"] }
];
CorretoraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corretora',
        template: __webpack_require__(/*! raw-loader!./corretora.page.html */ "./node_modules/raw-loader/index.js!./src/app/corretora/corretora.page.html"),
        styles: [__webpack_require__(/*! ./corretora.page.scss */ "./src/app/corretora/corretora.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _corretora_service__WEBPACK_IMPORTED_MODULE_3__["CorretoraService"]])
], CorretoraPage);



/***/ })

}]);
//# sourceMappingURL=corretora-corretora-module-es2015.js.map