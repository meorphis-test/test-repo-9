/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */
import * as shims from './registry.mjs';
import * as auto from '@stainless-temp/meorphis-test-8mppdo/_shims/auto/runtime';
if (!shims.kind) shims.setShims(auto.getRuntime(), { auto: true });
export * from './registry.mjs';
