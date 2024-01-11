const db = require('../../../models');

const createTagResolver = async (_, { tag }) => {
    const  {name}  = tag;
    const newTag = await db.Tag.create({
        name,
    });

    console.log('tag aici');
    return newTag;
}

module.exports = createTagResolver;