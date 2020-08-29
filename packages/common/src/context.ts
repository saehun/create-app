/**
 * singleton context module
 * once created, used as global
 */
let ctx: Record<string, string> = {};

interface Context {
  (obj: any): void;
  get: () => typeof ctx;
  set: (key: string, value: string) => void;
}

function get() {
  return ctx;
}

function set(key: string, value: string) {
  ctx[key] = value;
}

export const context = <Context>function (obj: any) {
  ctx = { ...ctx, ...obj };
};
context.get = get;
context.set = set;
