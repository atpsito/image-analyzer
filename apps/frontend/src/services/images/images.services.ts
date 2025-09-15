export const analyzeImage = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  const response = await fetch(`http://localhost:3000/images/analyze`, {
    method: "POST",
    body: formData
  });
  return response.json();
};
