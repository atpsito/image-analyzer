export const analyzeImage = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  const response = await fetch(`${import.meta.env.VITE_API_URL}/images/analyze`, {
    method: "POST",
    body: formData
  });
  return response.json();
};
