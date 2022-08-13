import { expect } from "chai";
import { If, Ignore, Name } from "./basic";
import { toJSON } from "./transformer";

describe("Name", function() {
    class User {
        @Name("id")
        Id!: number;

        @Name("name")
        Name!: string;

        @Name("email")
        Email!: string;
    }

    it("JSON", function() {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        expect(toJSON(user)).to.eql(
            {id: user.Id, name: user.Name, email: user.Email}
        );
    });
});

describe("Ignore", function() {
    class User {
        @Name("id")
        Id!: number;

        @Name("name")
        Name!: string;

        @Name("email")
        Email!: string;

        @Ignore
        Password!: string;
    }

    it("JSON", function() {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "password"
        expect(toJSON(user)).to.eql(
            {id: user.Id, name: user.Name, email: user.Email}
        );
    }); 
});

describe("If", function() {
    class User {
        @Name("id")
        Id!: number;

        @Name("name")
        Name!: string;

        @Name("email")
        Email!: string;

        @If<string>((v) => v.length >= 8)
        @Name("password")
        Password!: string;
    }

    it("JSON invalid password", function() {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "short"
        expect(toJSON(user)).to.eql(
            {id: user.Id, name: user.Name, email: user.Email}
        );
    });

    it("JSON valid password", function() {
        const user = new User();
        user.Id = 1;
        user.Name = "Malma";
        user.Email = "malma@example.com";
        user.Password = "password"
        expect(toJSON(user)).to.eql(
            {id: user.Id, name: user.Name, email: user.Email, password: user.Password}
        );
    });
});