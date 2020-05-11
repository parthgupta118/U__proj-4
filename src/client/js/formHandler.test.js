import { fetchData, validateUrl } from './formHandler';

describe('fetchData', () => {
    it('should load user data', () => {
        global.fetch = jest.fn(() => Promise.resolve( { json: () => '' }))
        expect(fetchData("Hi")).resolves.toBe('');
    })
});

test('The url is valid', () => {
    expect(validateUrl("https://www.google.com")).toBe(true);
});
