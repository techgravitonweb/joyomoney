const photoContext = require.context('../../assets/blogImages', false, /\.(png|jpe?g|svg)$/);
const blogphotos = photoContext.keys().map(photoContext);





export default blogphotos;