(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["isencao-responsabilidade-isencao-responsabilidade-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/isencao-responsabilidade/isencao-responsabilidade.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/isencao-responsabilidade/isencao-responsabilidade.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecalho\n  titulo=\"Isenção de responsabilidade\"\n  [permiteVoltar]=\"false\"\n  [permiteNavegarConfiguracoes]=\"false\"\n>\n</app-cabecalho>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-note>\n          Negociar no mercado de criptomoedas é muito arriscado, sendo assim\n          nunca invista uma quantia em dinheiro que você não pode perder, pois\n          você pode perder todo o dinheiro investido.\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        Concordo que os desenvolvedores não são responsáveis pelos meus ganhos\n        e perdas pelo uso do software\n      </ion-label>\n      <ion-checkbox\n        color=\"primary\"\n        slot=\"start\"\n        [(ngModel)]=\"concordaIsencaoPerdasGanhos\"\n      ></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        Concordo que os desenvolvedores não são responsáveis pelo meu dinheiro\n        e minhas criptomoeadas em posse das corretoras\n      </ion-label>\n      <ion-checkbox\n        color=\"primary\"\n        slot=\"start\"\n        [(ngModel)]=\"concordaIsencaoCorretoras\"\n      ></ion-checkbox>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"concordarTermosUso()\">\n    Concordo com os itens acima listados\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/isencao-responsabilidade/isencao-responsabilidade.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/isencao-responsabilidade/isencao-responsabilidade.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IsencaoResponsabilidadePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsencaoResponsabilidadePageModule", function() { return IsencaoResponsabilidadePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _isencao_responsabilidade_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isencao-responsabilidade.page */ "./src/app/isencao-responsabilidade/isencao-responsabilidade.page.ts");
/* harmony import */ var _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comum/comum.module */ "./src/app/comum/comum.module.ts");








var routes = [
    {
        path: '',
        component: _isencao_responsabilidade_page__WEBPACK_IMPORTED_MODULE_6__["IsencaoResponsabilidadePage"]
    }
];
var IsencaoResponsabilidadePageModule = /** @class */ (function () {
    function IsencaoResponsabilidadePageModule() {
    }
    IsencaoResponsabilidadePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__["ComumModule"],
            ],
            declarations: [_isencao_responsabilidade_page__WEBPACK_IMPORTED_MODULE_6__["IsencaoResponsabilidadePage"]],
        })
    ], IsencaoResponsabilidadePageModule);
    return IsencaoResponsabilidadePageModule;
}());



/***/ }),

/***/ "./src/app/isencao-responsabilidade/isencao-responsabilidade.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/isencao-responsabilidade/isencao-responsabilidade.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lzZW5jYW8tcmVzcG9uc2FiaWxpZGFkZS9pc2VuY2FvLXJlc3BvbnNhYmlsaWRhZGUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/isencao-responsabilidade/isencao-responsabilidade.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/isencao-responsabilidade/isencao-responsabilidade.page.ts ***!
  \***************************************************************************/
/*! exports provided: IsencaoResponsabilidadePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsencaoResponsabilidadePage", function() { return IsencaoResponsabilidadePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _concorda_isencao_responsabilidade_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./concorda-isencao-responsabilidade.enum */ "./src/app/isencao-responsabilidade/concorda-isencao-responsabilidade.enum.ts");






var IsencaoResponsabilidadePage = /** @class */ (function () {
    function IsencaoResponsabilidadePage(toastController, storage, router) {
        this.toastController = toastController;
        this.storage = storage;
        this.router = router;
    }
    IsencaoResponsabilidadePage.prototype.informarItensNaoMarcados = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: ('É necessário concordar com todos os itens para utilizar o software.'),
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    IsencaoResponsabilidadePage.prototype.salvarConcordaIsencaoResponsabilidade = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.set(_concorda_isencao_responsabilidade_enum__WEBPACK_IMPORTED_MODULE_5__["ConcordaIsencaoResponsabilidade"].PERDAS_GANHOS, this.concordaIsencaoPerdasGanhos.toString());
                this.storage.set(_concorda_isencao_responsabilidade_enum__WEBPACK_IMPORTED_MODULE_5__["ConcordaIsencaoResponsabilidade"].CORRETORAS, this.concordaIsencaoCorretoras.toString());
                return [2 /*return*/];
            });
        });
    };
    IsencaoResponsabilidadePage.prototype.redicionarPaginaInicial = function () {
        this.router.navigate(['/']);
    };
    IsencaoResponsabilidadePage.prototype.concordarTermosUso = function () {
        if (!(this.concordaIsencaoPerdasGanhos && this.concordaIsencaoCorretoras)) {
            this.informarItensNaoMarcados();
        }
        else {
            this.salvarConcordaIsencaoResponsabilidade();
            this.redicionarPaginaInicial();
        }
    };
    IsencaoResponsabilidadePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    IsencaoResponsabilidadePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-isencao-responsabilidade',
            template: __webpack_require__(/*! raw-loader!./isencao-responsabilidade.page.html */ "./node_modules/raw-loader/index.js!./src/app/isencao-responsabilidade/isencao-responsabilidade.page.html"),
            styles: [__webpack_require__(/*! ./isencao-responsabilidade.page.scss */ "./src/app/isencao-responsabilidade/isencao-responsabilidade.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], IsencaoResponsabilidadePage);
    return IsencaoResponsabilidadePage;
}());



/***/ })

}]);
//# sourceMappingURL=isencao-responsabilidade-isencao-responsabilidade-module-es5.js.map