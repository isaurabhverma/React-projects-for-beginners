export async function fetchRandomImages(count: number): Promise<string[]> {
  const images: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 1000);
    images.push(`https://picsum.photos/200/200?random=${randomId}`);
  }

  return images;
}
