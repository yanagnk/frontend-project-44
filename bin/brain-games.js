#!/usr/bin/env node
import { salutation } from '../src/cli.js';
import { startGame } from './brain-even.js';

// eslint-disable-next-line no-console
console.log ('Welcome to the Brain Games!');

salutation();

startGame();
