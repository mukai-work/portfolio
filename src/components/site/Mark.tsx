/** ブランドのMマーク。資料PDFと同じSVGを使う */
export function Mark({ size = 28, reverse = false }: { size?: number; reverse?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={reverse ? "/mark-reverse.svg" : "/mark.svg"}
      width={size}
      height={size}
      alt=""
      aria-hidden
    />
  );
}
