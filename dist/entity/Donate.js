"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Donate = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Campaign_1 = require("./Campaign");
var Donate = /** @class */ (function () {
    function Donate() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Donate.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, { nullable: false }),
        __metadata("design:type", User_1.User)
    ], Donate.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Campaign_1.Campaign; }, { nullable: false }),
        __metadata("design:type", Campaign_1.Campaign)
    ], Donate.prototype, "campaign", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 10, scale: 2, nullable: false }),
        __metadata("design:type", Number)
    ], Donate.prototype, "value", void 0);
    Donate = __decorate([
        typeorm_1.Entity()
    ], Donate);
    return Donate;
}());
exports.Donate = Donate;
