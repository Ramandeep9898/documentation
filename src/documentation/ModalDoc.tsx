import { Typography } from "../component/Typography/Typography";
import { CodeBlock } from "./CodeBlock";
import { Modal } from "../component/Modal/Modal";
import { Button } from "../component";
import { useState } from "react";

export const ModalDoc = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleModelOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <section className="doc-container">
        {/* Image. */}
        <Typography variant="h4" component="h1">
          Standard Modal.
        </Typography>
        <div className="doc-display-container mb-30">
          <Button onClick={handleModelOpen} variation="secondary">
            Open Model
          </Button>
          <Modal open={open} onClose={setOpen}>
            <Typography variant="h3" component="h1">
              Text in Modal
            </Typography>
            <Typography variant="h6" component="h2">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Modal>
        </div>

        <CodeBlock>{`const [open, setOpen] = useState(false);
const handleModelOpen = () => {
  setOpen((prev) => !prev);
};

<Button onClick={handleModelOpen} variation="secondary">Open Model</Button>
<Modal open={open} onClose={setOpen}>
  <Typography variant="h3" component="h1">Text in Modal</Typography>
  <Typography variant="h6" component="h2">
  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  </Typography>
</Modal>`}</CodeBlock>
      </section>
    </>
  );
};
