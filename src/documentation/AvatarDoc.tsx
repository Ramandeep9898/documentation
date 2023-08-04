import { Avatar } from "../component/Avatar/Avatar";
import { Typography } from "../component/Typography/Typography";
import avatarImage from "../assets/image1.jpg";
import { CodeBlock } from "./CodeBlock";

export const AvatarDoc = () => {
  return (
    <>
      <section className="doc-container">
        {/* Avatar. */}
        <Typography variant="h4" component="h1">
          Avatar.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Image avatars can be created by passing standard
          <code className="code">img</code>
          props
          <code className="code">src</code>
          to the component.
        </Typography>
        <div className="doc-display-container mb-30">
          <Avatar alt="alternative" src={avatarImage} />
          <Avatar alt="alternative" src={avatarImage} />
          <Avatar alt="alternative" src={avatarImage} />
        </div>

        <CodeBlock>
          {`<Avatar alt="alternative" src={avatarImage} />
<Avatar alt="alternative" src={avatarImage} />
<Avatar alt="alternative" src={avatarImage} />`}
        </CodeBlock>

        {/* Default Sizes. */}
        <Typography variant="h4" component="h1">
          Default Sizes.
        </Typography>
        <Typography variant="sub-title" component="h1">
          Available in three sizes. Can be created by{" "}
          <code className="code">md</code>
          <code className="code">lg</code>
          <code className="code">xl</code>
          to prop
          <code className="code">size</code>.
        </Typography>

        <div className="flex-col flex-start">
          <div className="flex-row mb-4">
            <code className="code">md</code>: 64px * 64px
          </div>
          <div className="flex-row mb-4">
            <code className="code">lg</code>: 72px * 72px
          </div>

          <div className="flex-row mb-4">
            <code className="code">xl</code>: 88px * 88px
          </div>
        </div>

        <div className="doc-display-container mb-30">
          <Avatar alt="alternative" src={avatarImage} size="md" />
          <Avatar alt="alternative" src={avatarImage} size="lg" />
          <Avatar alt="alternative" src={avatarImage} size="xl" />
        </div>

        <CodeBlock>
          {`<Avatar alt="alternative" src={avatarImage} size="md" />
<Avatar alt="alternative" src={avatarImage} size="lg" />
<Avatar alt="alternative" src={avatarImage} size="xl" />`}
        </CodeBlock>

        {/* Customize Size. */}
        <Typography variant="h4" component="h1">
          Customize Size.
        </Typography>
        <Typography variant="sub-title" component="h1">
          You can change the size of the avatar with the
          <code className="code">height</code>
          and
          <code className="code">width</code>
          CSS properties.
        </Typography>
        <div className="doc-display-container mb-30">
          <Avatar
            alt="alternative"
            src={avatarImage}
            height="56px"
            width="56px"
          />
          <Avatar
            alt="alternative"
            src={avatarImage}
            height="66px"
            width="66px"
          />
          <Avatar
            alt="alternative"
            src={avatarImage}
            height="76px"
            width="76px"
          />
        </div>

        <CodeBlock>
          {`<Avatar alt="alternative" src={avatarImage} height="56px" width="56px"/>
<Avatar alt="alternative" src={avatarImage} height="66px" width="66px" />
<Avatar alt="alternative" src={avatarImage} height="76px" width="76px" />`}
        </CodeBlock>
      </section>
    </>
  );
};
