/**
 * singleton context module
 */
let ctx: Record<string, string> = {};

function get() {
  return ctx;
}

function set(key: string, value: string) {
  ctx[key] = value;
}

export function useContext(obj: any) {
  ctx = { ...ctx, ...obj };
}

export const context = {
  get,
  set,
};
