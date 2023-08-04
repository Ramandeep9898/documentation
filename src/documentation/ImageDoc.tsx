import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { ImageList, ImageListItem } from "../component/Image/Image";
import { imageData } from "../imageData";

export const ImageDoc = (): JSX.Element => {
  return (
    <>
      <section className="doc-container">
        {/* Image. */}
        <Typography variant="h4" component="h1">
          Standard image list.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Standard image lists are best for items of equal importance. They have
          a uniform container size, ratio, and spacing.
        </Typography>
        <div className="doc-display-container mb-30">
          <ImageList size={{ width: 500, height: 500 }} col={3}>
            {imageData.map((item) => (
              <ImageListItem src={item.imageURL} key={item.id} />
            ))}
          </ImageList>
        </div>

        <CodeBlock>{`<ImageList size={{ width: 500, height: 500 }} col={3}>
    {imageData.map((item) => (
        <ImageListItem src={item.imageURL} key={item.id} />
    ))}
</ImageList>`}</CodeBlock>
      </section>
    </>
  );
};
