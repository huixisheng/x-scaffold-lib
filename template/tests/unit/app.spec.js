// import 'jsdom-global/register'
import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import App from '../../src/App';

// https://karolgalanciak.com/blog/2017/02/26/javascript-tips-redefining-useragent-property/
// https://bugs.chromium.org/p/chromium/issues/detail?id=395932
/**
RUNTIME EXCEPTION  Exception occurred while loading your tests
TypeError: Cannot set property userAgent of #<Navigator> which has only a getter
    at Module
 */
const { JSDOM } = require('jsdom');

const dom = new JSDOM('', {
  // url: "https://example.org/",
  // referrer: "https://example.com/",
  contentType: 'text/html',
  // userAgent: 'cosmeapp',
  includeNodeLocations: true,
});
// window = dom.window;

// window.navigator.userAgent = '1234'
// navigator = window.navigator = {}
// navigator.userAgent = 'cosmeapp'
// document = new JSDOM('<html><head><script></script></head><body></body></html>')
// window = document.createWindow()
// navigator = window.navigator = {}
// navigator.userAgent = 'cosmeapp'
// navigator.appVersion = '';

// var jsdom = require('jsdom').jsdom;

// global.document = jsdom('');
// global.window = document.defaultView;
// Object.keys(document.defaultView).forEach((property) => {
//   if (typeof global[property] === 'undefined') {
//     global[property] = document.defaultView[property];
//   }
// });

describe('App Component', () => {
  before(() => {
    // Object.defineProperty(window.navigator, 'userAgent', {
    //   value: 'cosmeapp',
    //   writable: true
    // });
  });

  it('init', () => {
    const wrapper = shallowMount(App, {
    });
    expect(wrapper.contains('div')).to.equal(true);
  });
});
