export function toJSON(target) {
    const json = {};
    const batuesNames = target['batues.names'];
    const batuesIgnores = target['batues.ignores'];
    const batuesIf = target['batues.if'];
    Object.getOwnPropertyNames(target).forEach(name => {
        if (batuesIgnores !== undefined && name in batuesIgnores)
            return;
        if (batuesIf !== undefined && name in batuesIf && !(batuesIf[name](target[name])))
            return;
        if (batuesNames !== undefined && name in batuesNames)
            json[batuesNames[name]] = target[name];
        else
            json[name] = target[name];
    });
    return json;
}
