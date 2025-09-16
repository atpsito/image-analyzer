export const image2base64 = (image: Express.Multer.File) => {
  const imageArray = new Uint8Array(image.buffer);
  const buffer = Buffer.from(imageArray).toString('base64');

  return `data:${image.mimetype};base64,${buffer}`;
};
