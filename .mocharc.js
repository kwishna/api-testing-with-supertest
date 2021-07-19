'use strict';
const { config } = require('dotenv');
config({ path: '.env', encoding: 'utf-8' });
// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
    'allow-uncaught': false,
    'async-only': false,
    bail: false,
    'check-leaks': false,
    color: true,
    delay: false,
    diff: true,
    exit: false, // could be expressed as "'no-exit': true"
    extension: ['ts'],
    // fgrep: something, // fgrep and grep are mutually exclusive
    // file: ['/path/to/some/file', '/path/to/some/other/file'],
    'forbid-only': false,
    'forbid-pending': false,
    'full-trace': false,
    // global: ['jQuery', '$'],
    // grep: something, // fgrep and grep are mutually exclusive
    growl: false,
    ignore: ['node_modules'],
    'inline-diffs': false,
    // invert: false, // needs to be used with grep or fgrep
    jobs: 1,
    package: './package.json',
    parallel: false,
    recursive: true,
    reporter: 'spec',
    'reporter-option': ['foo=bar', 'baz=quux'],
    require: 'ts-node/register',
    retries: 1,
    slow: '75',
    sort: false,
    spec: ['src/test/**/*.ts'], // the positional arguments!
    // spec: ['src/test/**/*.js'], // the positional arguments!
    // timeout: '1800000', // same as "timeout: 'in seconds'"
    timeout: false, // same as "'no-timeout': true" or "timeout: 0"
    'trace-warnings': true, // node flags ok
    ui: 'bdd',
    'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
    watch: false,
    // 'watch-files': ['lib/**/*.js', 'test/**/*.js'],
    // 'watch-ignore': ['lib/vendor'],
};
