const capitalize = (str: string) =>
  str
    .trim()
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word[0].toUpperCase() + word.slice(1) : word,
    )
    .join(" ");

export default capitalize;
