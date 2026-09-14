async function yuklaPostlar() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const postlar = await res.json();
    console.log('Yuklangan ma\'lumotlar:', postlar);
  } catch (err) {
    console.error('Xatolik:', err);
  }
}
yuklaPostlar();
