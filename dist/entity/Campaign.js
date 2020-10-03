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
exports.Campaign = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Donate_1 = require("./Donate");
var Campaign = /** @class */ (function () {
    function Campaign() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Campaign.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Campaign.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Campaign.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column("decimal", { precision: 10, scale: 2, nullable: false }),
        __metadata("design:type", Number)
    ], Campaign.prototype, "target", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.campaign; }),
        __metadata("design:type", User_1.User)
    ], Campaign.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Donate_1.Donate; }, function (donate) { return donate.campaign; }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "donate", void 0);
    Campaign = __decorate([
        typeorm_1.Entity()
    ], Campaign);
    return Campaign;
}());
exports.Campaign = Campaign;
