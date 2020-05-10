import { fetchData } from './formHandler';

describe('fetchData', () => {
    it('should load user data', () => {
        global.fetch = jest.fn(() => Promise.resolve( { json: () => '' }))
        expect(fetchData("Hi")).resolves.toBe('');
    })
});