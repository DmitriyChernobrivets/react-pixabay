const api = async () => {
  try {
    const data = await fetch(
      "https://pixabay.com/api/?key=10233175-245f6a83d674225210904c392&q=yellow+flowers&image_type=photo"
    );
    return data.json();
  } catch (e) {
    console.log(e);
  }
};

export { api };
