var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { If, Ignore, Name } from "./basic";
import { toJSON } from "./transformer";
describe("Name", function () {
    class User {
        Id;
        Name;
        Email;
    }
    __decorate([
        Name("id"),
        __metadata("design:type", Number)
    ], User.prototype, "Id", void 0);
    __decorate([
        Name("name"),
        __metadata("design:type", String)
    ], User.prototype, "Name", void 0);
    __decorate([
        Name("email"),
        __metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    it("JSON", function () {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        expect(toJSON(user)).toEqual({ id: user.Id, name: user.Name, email: user.Email });
    });
});
describe("Ignore", function () {
    class User {
        Id;
        Name;
        Email;
        Password;
    }
    __decorate([
        Name("id"),
        __metadata("design:type", Number)
    ], User.prototype, "Id", void 0);
    __decorate([
        Name("name"),
        __metadata("design:type", String)
    ], User.prototype, "Name", void 0);
    __decorate([
        Name("email"),
        __metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    __decorate([
        Ignore,
        __metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    it("JSON", function () {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "password";
        expect(toJSON(user)).toEqual({ id: user.Id, name: user.Name, email: user.Email });
    });
});
describe("If", function () {
    class User {
        Id;
        Name;
        Email;
        Password;
    }
    __decorate([
        Name("id"),
        __metadata("design:type", Number)
    ], User.prototype, "Id", void 0);
    __decorate([
        Name("name"),
        __metadata("design:type", String)
    ], User.prototype, "Name", void 0);
    __decorate([
        Name("email"),
        __metadata("design:type", String)
    ], User.prototype, "Email", void 0);
    __decorate([
        If((v) => v.length >= 8),
        Name("password"),
        __metadata("design:type", String)
    ], User.prototype, "Password", void 0);
    it("JSON invalid password", function () {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "short";
        expect(toJSON(user)).toEqual({ id: user.Id, name: user.Name, email: user.Email });
    });
    it("JSON valid password", function () {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "password";
        expect(toJSON(user)).toEqual({ id: user.Id, name: user.Name, email: user.Email, password: user.Password });
    });
});
