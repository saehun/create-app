/**
 * singleton context module
 */
const ctx: Record<string, string> = {};

function get() {
  return ctx;
}

function set(key: string, value: string) {
  ctx[key] = value;
}

export const context = {
  get,
  set,
};
