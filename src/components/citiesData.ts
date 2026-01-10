const images = import.meta.glob("../assets/CityPages/*.webp", { eager: true });

type City = {
  city: string;
  img: string;
};

export const cities2: City[] = Object.entries(images).map(([path, module]: any) => {
  const filename = path.split("/").pop()?.replace(".webp", "") || "";

  return {
    city: filename.replace(/[-_]/g, " "),
    img: module.default
  };
});
