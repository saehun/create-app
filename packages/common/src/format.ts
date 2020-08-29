import { compile } from 'handlebars';
import { context } from './context';
import { exit } from './defer';

export const format = (template: string) => {
  try {
    return compile(template, { strict: true })(context.get()) + '\n';
  } catch (e) {
    console.log(e.message);
    exit();
  }
};
