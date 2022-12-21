const service = require('../services/parser.service')


describe("URL Parser", () => {

  test("should create a hash from url string", () => {
    
    const expected = {
      version: "6",
      collection: 'listings',
      id: "3",
      sort: 'desc',
      limit: "10"
    };
    
    const result = service.toHash('/6/api/listings/3?sort=desc&limit=10');
    // assert
    expect(result).toStrictEqual(expected);
  });

  test("should create a hash from url string", () => {
    
    const expected = {
      version: "6",
      collection: 'listings',
      id: "3",
      sort: 'desc',
      limit: "10",
      city: "LA"
    };
    
    const result = service.toHash('/6/api/listings/3?city=LA&sort=desc&limit=10');
    // assert
    expect(result).toStrictEqual(expected);
  });

  test("should return a empty object", () => {
    
    const expected = {};
    
    const result = service.toHash('');
    // assert
    expect(result).toStrictEqual(expected);
  });


})
