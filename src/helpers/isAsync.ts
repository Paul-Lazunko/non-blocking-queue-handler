export function isAsync(f: Function): boolean {
    return f.constructor.name === "AsyncFunction";
}
