/**
 * Simulate success response from a server.
 */

import uuidv4 from '../utils/helpers';

const addCommentService = async data => ({ id: uuidv4(), message: data });

export default addCommentService;
