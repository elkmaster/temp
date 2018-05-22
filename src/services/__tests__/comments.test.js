import addCommentService from '../comments';
import faker from 'faker';

describe('Comments services', () => {
  describe('addCommentService', () => {
    it('addCommentService should generate new comment', async () => {
      const comment = faker.lorem.sentence();
      expect.assertions(1);
      await expect(addCommentService(comment)).resolves.toMatchObject({
          message: comment,
        },
      );
    });
  });
});
