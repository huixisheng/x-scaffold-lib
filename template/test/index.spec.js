import { expect } from 'chai';
import ClassLib from '../src/index';

const instance = new ClassLib();

describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(instance.add(1, 1)).to.be.equal(2);
  });
});