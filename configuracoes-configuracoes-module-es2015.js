(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuracoes-configuracoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Definições</ion-list-header>\n  <ion-item>\n    <ion-label position=\"floating\">Investimento</ion-label>\n    <ion-input\n      type=\"number\"\n      inputmode=\"decimal\"\n      [(ngModel)]=\"configuracao.investimentoMaximo\"\n      (change)=\"mudarInvestimentoMaximo()\"\n    ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Simular taxa de transferência</ion-label>\n    <ion-toggle\n      slot=\"end\"\n      [(ngModel)]=\"configuracao.simularTaxaTransferencia\"\n      (ionChange)=\"mudarSimularTaxaTransferencia()\"\n    ></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-label>Simular taxa de saque em reais</ion-label>\n    <ion-toggle\n      slot=\"end\"\n      [(ngModel)]=\"configuracao.simularTaxaSaque\"\n      (ionChange)=\"mudarSimularTaxaSaque()\"\n    ></ion-toggle>\n  </ion-item>\n  <ng-container *ngIf=\"configuracao.simularTaxaSaque\">\n    <ion-item-group>\n      <ion-item-divider>\n        <ion-label>\n          Possuí conta nos bancos conveniados das corretoras\n        </ion-label>\n      </ion-item-divider>\n      <ion-item *ngFor=\"let corretora of corretorasConveniosBancos\">\n        <ion-label>{{ corretora.nome }}</ion-label>\n        <ion-toggle\n          slot=\"end\"\n          [(ngModel)]=\"situacaoUsuario[corretora.id].possuiBancoConveniado\"\n          (ionChange)=\"mudarCorretoraHabilitada(corretora.id)\"\n        ></ion-toggle>\n      </ion-item>\n    </ion-item-group>\n  </ng-container>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Filtros</ion-list-header>\n  <ion-item>\n    <ion-label position=\"floating\">Lucro acima de</ion-label>\n    <ion-input\n      type=\"number\"\n      inputmode=\"decimal\"\n      [(ngModel)]=\"configuracao.filtroLucroAcima\"\n      (change)=\"mudarLucro()\"\n    ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">Porcentagem de lucro acima de</ion-label>\n    <ion-input\n      type=\"number\"\n      inputmode=\"decimal\"\n      [(ngModel)]=\"configuracao.filtroPorcentagemLucroAcima\"\n      (change)=\"mudarPorcentagemLucro()\"\n    ></ion-input>\n  </ion-item>\n  <ion-item-group>\n    <ion-item-divider>\n      <ion-label>Corretoras</ion-label>\n    </ion-item-divider>\n    <ion-item *ngFor=\"let corretora of corretoras\">\n      <ion-label>{{ corretora.nome }}</ion-label>\n      <ion-toggle\n        slot=\"end\"\n        [(ngModel)]=\"configuracao.corretoras[corretora.id].habilitada\"\n        (ionChange)=\"mudarCorretoraHabilitada(corretora.id)\"\n      ></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Notificação</ion-list-header>\n  <ion-item>\n    <ion-label>Notificar</ion-label>\n    <ion-toggle\n      slot=\"end\"\n      [(ngModel)]=\"configuracao.permitirNotificar\"\n      (ionChange)=\"mudarPermitirNotificar()\"\n    ></ion-toggle>\n  </ion-item>\n  <ion-item *ngIf=\"configuracao.permitirNotificar\">\n    <ion-label position=\"floating\">Tempo entre notificações</ion-label>\n    <ion-input\n      type=\"number\"\n      inputmode=\"numeric\"\n      [(ngModel)]=\"configuracao.tempoEntreNotificacoes\"\n      (change)=\"mudarTempoEntreNotificacoes()\"\n    ></ion-input>\n    <ion-note>\n      Após quantos minutos você poderá ser notificado novamente após ter\n      recebido uma notificação não visualizada.\n    </ion-note>\n  </ion-item>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-list>\n  <ion-list-header>Ordenar por</ion-list-header>\n  <ion-reorder-group\n    disabled=\"false\"\n    (ionItemReorder)=\"mudarOrdenacao($event)\"\n  >\n    <ion-reorder *ngFor=\"let criterioOrdenacao of configuracao.ordenacao\">\n      <ion-item>\n        <ion-label>{{ criterioOrdenacao.descricao }}</ion-label>\n        <ion-icon slot=\"end\" name=\"reorder\"></ion-icon>\n      </ion-item>\n    </ion-reorder>\n  </ion-reorder-group>\n</ion-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/configuracoes/configuracoes.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/configuracoes/configuracoes.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecalho\n  titulo=\"Configurações\"\n  [permiteNavegarConfiguracoes]=\"false\"\n>\n</app-cabecalho>\n\n<ion-content>\n  <app-configuracao-definicao></app-configuracao-definicao>\n\n  <app-configuracao-filtro></app-configuracao-filtro>\n\n  <app-configuracao-notificar></app-configuracao-notificar>\n\n  <app-configuracao-ordenacao></app-configuracao-ordenacao>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29tcG9uZW50cy9jb25maWd1cmFjYW8tZGVmaW5pY2FvL2NvbmZpZ3VyYWNhby1kZWZpbmljYW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ConfiguracaoDefinicaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoDefinicaoComponent", function() { return ConfiguracaoDefinicaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuracoes.service */ "./src/app/configuracoes/configuracoes.service.ts");
/* harmony import */ var _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../corretora/corretora.service */ "./src/app/corretora/corretora.service.ts");





let ConfiguracaoDefinicaoComponent = class ConfiguracaoDefinicaoComponent {
    constructor(configuracoes, corretoraService, alertController) {
        this.configuracoes = configuracoes;
        this.corretoraService = corretoraService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.configuracao = this.configuracoes.configuracao;
        this.corretorasConveniosBancos = this.corretoraService.corretoras.filter((corretora) => corretora.POSSUI_CONVENIOS_BANCOS);
    }
    get situacaoUsuario() {
        return this.configuracao.corretoras;
    }
    mudarInvestimentoMaximo() {
        this.configuracoes.mudarInvestimentoMaximo();
    }
    mudarSimularTaxaTransferencia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.configuracao.simularTaxaTransferencia) {
                const alert = yield this.alertController.create({
                    header: 'Confirmar',
                    message: ('A simulação da taxa de transferência é estimativa, por isso ela '
                        + 'pode conter erros. Sendo que nas corretoras que utilizam a taxa '
                        + 'de mineração da rede foi fixado o valor de 0,0005 BTC para as '
                        + 'simulações. Mesmo assim você concorda em habilitar a simulação da '
                        + 'transferência de criptomoedas?'),
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                this.configuracao.simularTaxaTransferencia = false;
                            }
                        }, {
                            text: 'Concordar',
                            handler: () => {
                                this.configuracoes.mudarSimularTaxaTransferencia();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.configuracoes.mudarSimularTaxaTransferencia();
            }
        });
    }
    mudarSimularTaxaSaque() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.configuracao.simularTaxaSaque) {
                const alert = yield this.alertController.create({
                    header: 'Confirmar',
                    message: ('A simulação da taxa de saque em reais é estimativa, por isso ela '
                        + 'pode conter erros. Mesmo assim você concorda em habilitar a '
                        + 'simulação da taxa de saque em reais?'),
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                this.configuracao.simularTaxaSaque = false;
                            }
                        }, {
                            text: 'Concordar',
                            handler: () => {
                                this.configuracoes.mudarSimularTaxaSaque();
                            }
                        }
                    ]
                });
                yield alert.present();
            }
            else {
                this.configuracoes.mudarSimularTaxaSaque();
            }
        });
    }
    mudarCorretoraHabilitada(idCorretora) {
        this.configuracoes.mudarFiltroCorretoraHabilitada(idCorretora);
    }
};
ConfiguracaoDefinicaoComponent.ctorParameters = () => [
    { type: _configuracoes_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesService"] },
    { type: _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_4__["CorretoraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ConfiguracaoDefinicaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracao-definicao',
        template: __webpack_require__(/*! raw-loader!./configuracao-definicao.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.html"),
        styles: [__webpack_require__(/*! ./configuracao-definicao.component.scss */ "./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuracoes_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesService"],
        _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_4__["CorretoraService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ConfiguracaoDefinicaoComponent);



/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29tcG9uZW50cy9jb25maWd1cmFjYW8tZmlsdHJvL2NvbmZpZ3VyYWNhby1maWx0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfiguracaoFiltroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoFiltroComponent", function() { return ConfiguracaoFiltroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuracoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuracoes.service */ "./src/app/configuracoes/configuracoes.service.ts");
/* harmony import */ var _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../corretora/corretora.service */ "./src/app/corretora/corretora.service.ts");




let ConfiguracaoFiltroComponent = class ConfiguracaoFiltroComponent {
    constructor(configuracoes, corretoraService) {
        this.configuracoes = configuracoes;
        this.corretoraService = corretoraService;
    }
    ngOnInit() {
        this.configuracao = this.configuracoes.configuracao;
        this.corretoras = this.corretoraService.corretoras;
    }
    mudarLucro() {
        this.configuracoes.mudarFiltroLucroAcima();
    }
    mudarPorcentagemLucro() {
        this.configuracoes.mudarFiltroPorcentagemLucroAcima();
    }
    mudarCorretoraHabilitada(idCorretora) {
        this.configuracoes.mudarFiltroCorretoraHabilitada(idCorretora);
    }
};
ConfiguracaoFiltroComponent.ctorParameters = () => [
    { type: _configuracoes_service__WEBPACK_IMPORTED_MODULE_2__["ConfiguracoesService"] },
    { type: _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_3__["CorretoraService"] }
];
ConfiguracaoFiltroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracao-filtro',
        template: __webpack_require__(/*! raw-loader!./configuracao-filtro.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.html"),
        styles: [__webpack_require__(/*! ./configuracao-filtro.component.scss */ "./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuracoes_service__WEBPACK_IMPORTED_MODULE_2__["ConfiguracoesService"],
        _corretora_corretora_service__WEBPACK_IMPORTED_MODULE_3__["CorretoraService"]])
], ConfiguracaoFiltroComponent);



/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29tcG9uZW50cy9jb25maWd1cmFjYW8tbm90aWZpY2FyL2NvbmZpZ3VyYWNhby1ub3RpZmljYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ConfiguracaoNotificarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoNotificarComponent", function() { return ConfiguracaoNotificarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _configuracoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuracoes.service */ "./src/app/configuracoes/configuracoes.service.ts");
/* harmony import */ var _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../comum/notificacao.service */ "./src/app/comum/notificacao.service.ts");




let ConfiguracaoNotificarComponent = class ConfiguracaoNotificarComponent {
    constructor(configuracoes, notificacaoService) {
        this.configuracoes = configuracoes;
        this.notificacaoService = notificacaoService;
    }
    ngOnInit() {
        this.configuracao = this.configuracoes.configuracao;
    }
    mudarPermitirNotificar() {
        if (this.configuracao.permitirNotificar) {
            this.notificacaoService.requisitarPermissaoNotificar().then((permitido) => {
                if (permitido) {
                    this.configuracoes.mudarPermitirNotificar();
                }
                else {
                    this.configuracao.permitirNotificar = false;
                }
            });
        }
        else {
            this.configuracoes.mudarPermitirNotificar();
        }
    }
    mudarTempoEntreNotificacoes() {
        this.configuracoes.mudarTempoEntreNoficacoes();
    }
};
ConfiguracaoNotificarComponent.ctorParameters = () => [
    { type: _configuracoes_service__WEBPACK_IMPORTED_MODULE_2__["ConfiguracoesService"] },
    { type: _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_3__["NotificacaoService"] }
];
ConfiguracaoNotificarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracao-notificar',
        template: __webpack_require__(/*! raw-loader!./configuracao-notificar.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.html"),
        styles: [__webpack_require__(/*! ./configuracao-notificar.component.scss */ "./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuracoes_service__WEBPACK_IMPORTED_MODULE_2__["ConfiguracoesService"],
        _comum_notificacao_service__WEBPACK_IMPORTED_MODULE_3__["NotificacaoService"]])
], ConfiguracaoNotificarComponent);



/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29tcG9uZW50cy9jb25maWd1cmFjYW8tb3JkZW5hY2FvL2NvbmZpZ3VyYWNhby1vcmRlbmFjYW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ConfiguracaoOrdenacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracaoOrdenacaoComponent", function() { return ConfiguracaoOrdenacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../configuracoes.service */ "./src/app/configuracoes/configuracoes.service.ts");




let ConfiguracaoOrdenacaoComponent = class ConfiguracaoOrdenacaoComponent {
    constructor(configuracoes) {
        this.configuracoes = configuracoes;
    }
    ngOnInit() {
        this.configuracao = this.configuracoes.configuracao;
    }
    mudarOrdenacao(ev) {
        const ordenacao = this.configuracao.ordenacao;
        const from = ev.detail.from;
        const to = Math.min(ev.detail.to, ordenacao.length);
        const tempFrom = ordenacao[from];
        const tempTo = ordenacao[to];
        ordenacao[from] = tempTo;
        ordenacao[to] = tempFrom;
        this.configuracoes.mudarOrdenacao();
        ev.detail.complete(false);
    }
};
ConfiguracaoOrdenacaoComponent.ctorParameters = () => [
    { type: _configuracoes_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonReorderGroup"])
], ConfiguracaoOrdenacaoComponent.prototype, "reorderGroup", void 0);
ConfiguracaoOrdenacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracao-ordenacao',
        template: __webpack_require__(/*! raw-loader!./configuracao-ordenacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.html"),
        styles: [__webpack_require__(/*! ./configuracao-ordenacao.component.scss */ "./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configuracoes_service__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesService"]])
], ConfiguracaoOrdenacaoComponent);



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.module.ts ***!
  \*******************************************************/
/*! exports provided: ConfiguracoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracoes.page */ "./src/app/configuracoes/configuracoes.page.ts");
/* harmony import */ var _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comum/comum.module */ "./src/app/comum/comum.module.ts");
/* harmony import */ var _components_configuracao_definicao_configuracao_definicao_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/configuracao-definicao/configuracao-definicao.component */ "./src/app/configuracoes/components/configuracao-definicao/configuracao-definicao.component.ts");
/* harmony import */ var _components_configuracao_filtro_configuracao_filtro_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/configuracao-filtro/configuracao-filtro.component */ "./src/app/configuracoes/components/configuracao-filtro/configuracao-filtro.component.ts");
/* harmony import */ var _components_configuracao_notificar_configuracao_notificar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/configuracao-notificar/configuracao-notificar.component */ "./src/app/configuracoes/components/configuracao-notificar/configuracao-notificar.component.ts");
/* harmony import */ var _components_configuracao_ordenacao_configuracao_ordenacao_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/configuracao-ordenacao/configuracao-ordenacao.component */ "./src/app/configuracoes/components/configuracao-ordenacao/configuracao-ordenacao.component.ts");












const routes = [
    {
        path: '',
        component: _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"]
    }
];
let ConfiguracoesPageModule = class ConfiguracoesPageModule {
};
ConfiguracoesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _comum_comum_module__WEBPACK_IMPORTED_MODULE_7__["ComumModule"],
        ],
        declarations: [
            _configuracoes_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesPage"],
            _components_configuracao_definicao_configuracao_definicao_component__WEBPACK_IMPORTED_MODULE_8__["ConfiguracaoDefinicaoComponent"],
            _components_configuracao_filtro_configuracao_filtro_component__WEBPACK_IMPORTED_MODULE_9__["ConfiguracaoFiltroComponent"],
            _components_configuracao_notificar_configuracao_notificar_component__WEBPACK_IMPORTED_MODULE_10__["ConfiguracaoNotificarComponent"],
            _components_configuracao_ordenacao_configuracao_ordenacao_component__WEBPACK_IMPORTED_MODULE_11__["ConfiguracaoOrdenacaoComponent"],
        ],
    })
], ConfiguracoesPageModule);



/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYWNvZXMvY29uZmlndXJhY29lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/configuracoes/configuracoes.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/configuracoes/configuracoes.page.ts ***!
  \*****************************************************/
/*! exports provided: ConfiguracoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPage", function() { return ConfiguracoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfiguracoesPage = class ConfiguracoesPage {
};
ConfiguracoesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuracoes',
        template: __webpack_require__(/*! raw-loader!./configuracoes.page.html */ "./node_modules/raw-loader/index.js!./src/app/configuracoes/configuracoes.page.html"),
        styles: [__webpack_require__(/*! ./configuracoes.page.scss */ "./src/app/configuracoes/configuracoes.page.scss")]
    })
], ConfiguracoesPage);



/***/ })

}]);
//# sourceMappingURL=configuracoes-configuracoes-module-es2015.js.map