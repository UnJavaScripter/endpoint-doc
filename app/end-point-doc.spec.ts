import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {EndPointDocApp} from '../app/end-point-doc';

beforeEachProviders(() => [EndPointDocApp]);

describe('App: EndPointDoc', () => {
  it('should have the `defaultMeaning` as 42', inject([EndPointDocApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([EndPointDocApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

