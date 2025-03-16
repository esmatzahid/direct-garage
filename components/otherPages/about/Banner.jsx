import Image from "next/image";

export default function Banner() {
  return (
    <div className="section wow fadeInUp">
      <Image
        width={1920}
        height={550}
        style={{ objectFit: "cover" }}
        src="/assets/imgs/image (1).png"
        alt="garage"
      />
    </div>
  );
}
