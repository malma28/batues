export function Name(name) {
    return function (target, propertyKey) {
        const batues = Object.getOwnPropertyDescriptor(target, "batues.names");
        if (batues == undefined)
            Object.defineProperty(target, "batues.names", {
                value: {
                    [propertyKey]: name
                },
                configurable: true,
                writable: true
            });
        else
            Object.defineProperty(target, "batues.names", {
                value: {
                    ...batues.value,
                    [propertyKey]: name
                }
            });
    };
}
;
export function Ignore(target, propertyKey) {
    const batues = Object.getOwnPropertyDescriptor(target, "batues.ignores");
    if (batues == undefined)
        Object.defineProperty(target, "batues.ignores", {
            value: {
                [propertyKey]: true,
            },
            configurable: true,
            writable: true
        });
    else
        Object.defineProperty(target, "batues.ignores", {
            value: {
                ...batues.value,
                [propertyKey]: true,
            },
        });
}
export function If(callback) {
    return function (target, propertyKey) {
        const batues = Object.getOwnPropertyDescriptor(target, "batues.if");
        if (batues == undefined)
            Object.defineProperty(target, "batues.if", {
                value: {
                    [propertyKey]: callback,
                },
                configurable: true,
                writable: true
            });
        else
            Object.defineProperty(target, "batues.if", {
                value: {
                    ...batues.value,
                    [propertyKey]: callback,
                },
            });
    };
}
