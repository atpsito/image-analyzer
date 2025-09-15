export const image2base64 = (image: Express.Multer.File) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const imageArray = new Uint8Array(image.buffer);
  const buffer = Buffer.from(imageArray).toString('base64');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return `data:${image.mimetype};base64,${buffer}`;
};
