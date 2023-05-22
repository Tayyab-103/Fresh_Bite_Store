//
async function ImagetoBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // check the file converted or not converted
  const data = new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
  return data;
}

export { ImagetoBase64 };
