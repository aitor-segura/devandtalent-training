import type { UserController } from './types';
import getAll from './get-all.controller';
import getOne from './get-one.controller';
import create from './create.controller';
import update from './update.controller';
import remove from './remove.controller';

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
} as UserController;
