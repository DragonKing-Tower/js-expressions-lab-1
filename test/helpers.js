const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require('@babel/core');

global.expect = chai.expect;

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'),
  {
    presets: ['@babel/preset-env']
  }
);

const src = babelResult.code;

jsdom({
  html,
  src
});

module.exports = {
  chai,
  sinon,
  fs,
  jsdom,
  path,
  babel,
  html,
  babelResult,
  src
};
