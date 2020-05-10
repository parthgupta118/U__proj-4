import { handleSubmit } from './formHandler';

test('The innerHTML should not be null', () => {
    // expect.assertions(1);
    return handleSubmit().fetch().then(data => {
            expect(data.json()).not.toEqual("null");
        })
})