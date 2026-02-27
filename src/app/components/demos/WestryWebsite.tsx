import { Slideshow } from "./Slideshow";

export function WestryWebsite() {
  const urlProjectImgPrefix = "https://raw.githubusercontent.com/cyliem7/cyliem7.github.io/refs/heads/main/src/assets/img/projects/westryWebsite"

  // Demo images for the slideshow
  const images = [
    `${urlProjectImgPrefix}/westryWebsite.png`,
    `${urlProjectImgPrefix}/westryWebsite_portfolio.png`,
    `${urlProjectImgPrefix}/westryWebsite_about.png`,
    ];


  return (
    <div className="size-full flex items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl h-[600px]">
        <Slideshow images={images} autoPlayDelay={3000} showControls={true} />
      </div>
    </div>
  );
}
