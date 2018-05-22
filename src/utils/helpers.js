// generates uniq ID
const uuidv4 = () => `_${Math.random().toString(36).substr(2, 9)}`;

export default uuidv4;
