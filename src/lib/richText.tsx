export function renderRichText(text: string) {
  return text.split(/(<i>.*?<\/i>|<b>.*?<\/b>)/g).map((part, i) => {
    const match = part.match(/^<(i|b)>(.*)<\/\1>$/);
    if (!match) return part;
    const Tag = match[1] as "i" | "b";
    return <Tag key={i}>{match[2]}</Tag>;
  });
}
