(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arbitragem-arbitragem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/arbitragem/arbitragem.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arbitragem/arbitragem.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecalho [titulo]=\"titulo\"></app-cabecalho>\n\n<ion-content *ngIf=\"arbitragem\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <app-informacoes-corretora\n        rotulo=\"Corretora venda\"\n        [corretora]=\"arbitragem.corretoraVenda\"\n      ></app-informacoes-corretora>\n      <app-informacoes-corretora\n        rotulo=\"Corretora compra\"\n        [corretora]=\"arbitragem.corretoraCompra\"\n      ></app-informacoes-corretora>\n    </div>\n    <app-informacoes-arbitragem\n      [arbitragem]=\"arbitragem\"\n    ></app-informacoes-arbitragem>\n  </div>\n  <app-tabela-ordens\n    tipo=\"venda\"\n    [corretora]=\"arbitragem.corretoraVenda\"\n    [ordens]=\"arbitragem.ordensVenda\"\n  ></app-tabela-ordens>\n  <app-tabela-ordens\n    tipo=\"compra\"\n    [corretora]=\"arbitragem.corretoraCompra\"\n    [ordens]=\"arbitragem.ordensCompra\"\n  ></app-tabela-ordens>\n  <app-rodape></app-rodape>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-6\">\n  <strong>Investimento</strong>\n  <p>R$ {{ investimento | number: PRECISAO_REAL }}</p>\n</div>\n<div class=\"col-6\">\n  <strong>Lucro</strong>\n  <p>R$ {{ lucro | number: PRECISAO_REAL }}</p>\n</div>\n<div class=\"col-6\">\n  <strong>Porcentagem de lucro</strong>\n  <p>{{ porcentagemLucro | number: PRECISAO_REAL }}%</p>\n</div>\n<div class=\"col-6\" *ngIf=\"possuiTaxaTransferencia\">\n  <strong>Taxa de transferência</strong>\n  <p>{{ taxaTransferencia | number: PRECISAO_BITCOIN }} BTC</p>\n</div>\n<div class=\"col-6\" *ngIf=\"possuiTaxaSaque\">\n  <strong>Taxa de saque em reais</strong>\n  <p>R$ {{ taxaSaque | number: PRECISAO_REAL }}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <strong>{{ rotulo }}</strong>\n  <p>\n    <a [routerLink]=\"['/corretora', corretora.id]\">{{ corretora.nome }}</a>\n  </p>\n  <strong>Data da requisição</strong>\n  <p>{{ corretora.livroOrdens.dataRequisicao | date: FORMATO_DATA }}</p>\n  <strong>Data da resposta</strong>\n  <p>{{ corretora.livroOrdens.dataResposta | date: FORMATO_DATA }}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-sm\">\n    <caption>\n      Ordens de {{ tipo }} na {{ corretora.nome }}\n    </caption>\n    <thead class=\"thead-light\">\n      <tr>\n        <th>Preço</th>\n        <th>Quantidade</th>\n        <th>Total</th>\n        <th>Taxas</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let ordem of ordens\">\n        <td>{{ ordem.preco | number: PRECISAO_REAL }}</td>\n        <td>\n          {{ ordem.quantidade | number: PRECISAO_BITCOIN }}\n        </td>\n        <td>{{ ordem.total | number: PRECISAO_REAL }}</td>\n        <td>{{ ordem.valorTaxa | number: PRECISAO_REAL }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/arbitragem/arbitragem.module.ts":
/*!*************************************************!*\
  !*** ./src/app/arbitragem/arbitragem.module.ts ***!
  \*************************************************/
/*! exports provided: ArbitragemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbitragemPageModule", function() { return ArbitragemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _arbitragem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arbitragem.page */ "./src/app/arbitragem/arbitragem.page.ts");
/* harmony import */ var _components_informacoes_corretora_informacoes_corretora_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/informacoes-corretora/informacoes-corretora.component */ "./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.ts");
/* harmony import */ var _components_informacoes_arbitragem_informacoes_arbitragem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/informacoes-arbitragem/informacoes-arbitragem.component */ "./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.ts");
/* harmony import */ var _components_tabela_ordens_tabela_ordens_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabela-ordens/tabela-ordens.component */ "./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.ts");
/* harmony import */ var _comum_comum_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../comum/comum.module */ "./src/app/comum/comum.module.ts");











const routes = [
    {
        path: '',
        component: _arbitragem_page__WEBPACK_IMPORTED_MODULE_6__["ArbitragemPage"]
    }
];
let ArbitragemPageModule = class ArbitragemPageModule {
};
ArbitragemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _comum_comum_module__WEBPACK_IMPORTED_MODULE_10__["ComumModule"],
        ],
        declarations: [
            _arbitragem_page__WEBPACK_IMPORTED_MODULE_6__["ArbitragemPage"],
            _components_informacoes_corretora_informacoes_corretora_component__WEBPACK_IMPORTED_MODULE_7__["InformacoesCorretoraComponent"],
            _components_informacoes_arbitragem_informacoes_arbitragem_component__WEBPACK_IMPORTED_MODULE_8__["InformacoesArbitragemComponent"],
            _components_tabela_ordens_tabela_ordens_component__WEBPACK_IMPORTED_MODULE_9__["TabelaOrdensComponent"],
        ],
    })
], ArbitragemPageModule);



/***/ }),

/***/ "./src/app/arbitragem/arbitragem.page.scss":
/*!*************************************************!*\
  !*** ./src/app/arbitragem/arbitragem.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyYml0cmFnZW0vYXJiaXRyYWdlbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/arbitragem/arbitragem.page.ts":
/*!***********************************************!*\
  !*** ./src/app/arbitragem/arbitragem.page.ts ***!
  \***********************************************/
/*! exports provided: ArbitragemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArbitragemPage", function() { return ArbitragemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _arbitragem_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arbitragem.service */ "./src/app/arbitragem/arbitragem.service.ts");
/* harmony import */ var _comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comum/comunicacao.service */ "./src/app/comum/comunicacao.service.ts");





let ArbitragemPage = class ArbitragemPage {
    constructor(comunicacao, arbitragemService, router) {
        this.comunicacao = comunicacao;
        this.arbitragemService = arbitragemService;
        this.router = router;
    }
    ngOnInit() {
        this.comunicacao.propagadorObservavel.subscribe(this.carregarArbitragem());
        if (this.arbitragem) {
            const corretoraVenda = this.arbitragem.corretoraVenda;
            const corretoraCompra = this.arbitragem.corretoraCompra;
            this.titulo = `${corretoraVenda.nome} x ${corretoraCompra.nome}`;
        }
    }
    carregarArbitragemDiretamente() {
        const idCorretoraVenda = this.router.snapshot.paramMap.get('idCorretoraVenda');
        const idCorretoraCompra = this.router.snapshot.paramMap.get('idCorretoraCompra');
        this.arbitragemService.verificarOportunidadesArbitragemCorretorasPelosIds(idCorretoraVenda, idCorretoraCompra).then((arbitragem) => this.arbitragem = arbitragem);
    }
    carregarArbitragem() {
        return (arbitragem) => {
            if (arbitragem !== null) {
                this.arbitragem = arbitragem;
            }
            else {
                this.carregarArbitragemDiretamente();
            }
        };
    }
};
ArbitragemPage.ctorParameters = () => [
    { type: _comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_4__["ComunicacaoService"] },
    { type: _arbitragem_service__WEBPACK_IMPORTED_MODULE_3__["ArbitragemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ArbitragemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arbitragem',
        template: __webpack_require__(/*! raw-loader!./arbitragem.page.html */ "./node_modules/raw-loader/index.js!./src/app/arbitragem/arbitragem.page.html"),
        styles: [__webpack_require__(/*! ./arbitragem.page.scss */ "./src/app/arbitragem/arbitragem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_comum_comunicacao_service__WEBPACK_IMPORTED_MODULE_4__["ComunicacaoService"],
        _arbitragem_service__WEBPACK_IMPORTED_MODULE_3__["ArbitragemService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ArbitragemPage);



/***/ }),

/***/ "./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyYml0cmFnZW0vY29tcG9uZW50cy9pbmZvcm1hY29lcy1hcmJpdHJhZ2VtL2luZm9ybWFjb2VzLWFyYml0cmFnZW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: InformacoesArbitragemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesArbitragemComponent", function() { return InformacoesArbitragemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _arbitragem_arbitragem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../arbitragem/arbitragem */ "./src/app/arbitragem/arbitragem.ts");



let InformacoesArbitragemComponent = class InformacoesArbitragemComponent {
    constructor() {
        this.PRECISAO_REAL = '1.2-2';
        this.PRECISAO_BITCOIN = '1.0-8';
        this.cssClass = 'row';
    }
    get investimento() {
        return this.arbitragem.investimento;
    }
    get lucro() {
        return this.arbitragem.lucro;
    }
    get porcentagemLucro() {
        return this.arbitragem.porcentagemLucro;
    }
    get possuiTaxaTransferencia() {
        return this.arbitragem.possuiTaxaTransferencia;
    }
    get taxaTransferencia() {
        return this.arbitragem.taxaTransferencia;
    }
    get possuiTaxaSaque() {
        return this.arbitragem.possuiTaxaSaque;
    }
    get taxaSaque() {
        return this.arbitragem.taxaSaque;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InformacoesArbitragemComponent.prototype, "cssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _arbitragem_arbitragem__WEBPACK_IMPORTED_MODULE_2__["Arbitragem"])
], InformacoesArbitragemComponent.prototype, "arbitragem", void 0);
InformacoesArbitragemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informacoes-arbitragem',
        template: __webpack_require__(/*! raw-loader!./informacoes-arbitragem.component.html */ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.html"),
        styles: [__webpack_require__(/*! ./informacoes-arbitragem.component.scss */ "./src/app/arbitragem/components/informacoes-arbitragem/informacoes-arbitragem.component.scss")]
    })
], InformacoesArbitragemComponent);



/***/ }),

/***/ "./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyYml0cmFnZW0vY29tcG9uZW50cy9pbmZvcm1hY29lcy1jb3JyZXRvcmEvaW5mb3JtYWNvZXMtY29ycmV0b3JhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.ts ***!
  \************************************************************************************************/
/*! exports provided: InformacoesCorretoraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesCorretoraComponent", function() { return InformacoesCorretoraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _corretora_corretora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../corretora/corretora */ "./src/app/corretora/corretora.ts");



let InformacoesCorretoraComponent = class InformacoesCorretoraComponent {
    constructor() {
        this.FORMATO_DATA = 'dd/MM/yyyy HH:mm:ss (z)';
        this.cssClass = 'col';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], InformacoesCorretoraComponent.prototype, "cssClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _corretora_corretora__WEBPACK_IMPORTED_MODULE_2__["Corretora"])
], InformacoesCorretoraComponent.prototype, "corretora", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InformacoesCorretoraComponent.prototype, "rotulo", void 0);
InformacoesCorretoraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-informacoes-corretora',
        template: __webpack_require__(/*! raw-loader!./informacoes-corretora.component.html */ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.html"),
        styles: [__webpack_require__(/*! ./informacoes-corretora.component.scss */ "./src/app/arbitragem/components/informacoes-corretora/informacoes-corretora.component.scss")]
    })
], InformacoesCorretoraComponent);



/***/ }),

/***/ "./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "caption {\n  caption-side: top;\n}\n\nth, td {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NyaXB0b2FyYml0cmFnZW0vY3JpcHRvYXJiaXRyYWdlbS9zcmMvYXBwL2FyYml0cmFnZW0vY29tcG9uZW50cy90YWJlbGEtb3JkZW5zL3RhYmVsYS1vcmRlbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FyYml0cmFnZW0vY29tcG9uZW50cy90YWJlbGEtb3JkZW5zL3RhYmVsYS1vcmRlbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2FyYml0cmFnZW0vY29tcG9uZW50cy90YWJlbGEtb3JkZW5zL3RhYmVsYS1vcmRlbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYXB0aW9uIHtcbiAgY2FwdGlvbi1zaWRlOiB0b3A7XG59XG50aCwgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCJjYXB0aW9uIHtcbiAgY2FwdGlvbi1zaWRlOiB0b3A7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.ts ***!
  \********************************************************************************/
/*! exports provided: TabelaOrdensComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabelaOrdensComponent", function() { return TabelaOrdensComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _corretora_corretora__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../corretora/corretora */ "./src/app/corretora/corretora.ts");



let TabelaOrdensComponent = class TabelaOrdensComponent {
    constructor() {
        this.PRECISAO_REAL = '1.2-2';
        this.PRECISAO_BITCOIN = '1.0-8';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], TabelaOrdensComponent.prototype, "tipo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _corretora_corretora__WEBPACK_IMPORTED_MODULE_2__["Corretora"])
], TabelaOrdensComponent.prototype, "corretora", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TabelaOrdensComponent.prototype, "ordens", void 0);
TabelaOrdensComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabela-ordens',
        template: __webpack_require__(/*! raw-loader!./tabela-ordens.component.html */ "./node_modules/raw-loader/index.js!./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.html"),
        styles: [__webpack_require__(/*! ./tabela-ordens.component.scss */ "./src/app/arbitragem/components/tabela-ordens/tabela-ordens.component.scss")]
    })
], TabelaOrdensComponent);



/***/ })

}]);
//# sourceMappingURL=arbitragem-arbitragem-module-es2015.js.map