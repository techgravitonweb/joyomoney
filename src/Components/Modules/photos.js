const photoContext = require.context('../../assets/uploads', false, /\.(png|jpg|svg|jpeg)$/);
const photos = photoContext.keys().map(photoContext);





export default photos;