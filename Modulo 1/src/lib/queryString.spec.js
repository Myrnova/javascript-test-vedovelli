import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const object = {
      name: 'Debora',
      profession: 'develop',
    };
    expect(queryString(object)).toBe('name=Debora&profession=develop');
  });

  it('should create a valid query string when an array is passed', () => {
    const obj = {
      name: 'Debora',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Debora&abilities=JS,TDD');
  });
  it('should throw an error when an object is passed as a value', () => {
    const obj = {
      name: 'Debora',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Debora&profession=develop';
    expect(parse(qs)).toEqual({
      name: 'Debora',
      profession: 'develop',
    });
  });
  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Debora';
    expect(parse(qs)).toEqual({
      name: 'Debora',
    });
  });
  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Debora&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Debora',
      abilities: ['JS', 'TDD'],
    });
  });
});
