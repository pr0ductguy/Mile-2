import Image, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
const BlurImage = async ({ src, alt, ...rest }: ImageProps) => {
  const buffer = await fetch(src as string).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      {...rest}
    />
  );
};

export default BlurImage;
