import properties from '../../package.json';

export default (ctx) => {
  ctx.body = {
    name: properties.name,
    description: properties.description,
    author: properties.author,
  };
};
