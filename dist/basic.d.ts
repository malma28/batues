export declare function Name(name: string): (target: any, propertyKey: string) => void;
export declare function Ignore(target: any, propertyKey: string): void;
export declare function If<V = any>(callback: (v: V) => boolean): (target: any, propertyKey: string) => void;
