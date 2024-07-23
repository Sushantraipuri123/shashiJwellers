import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const StyledAccordion = styled(Accordion)(({ theme, expanded }) => ({
  marginBottom: theme.spacing(2),
  border: expanded ? '1px solid brown' : '1px solid rgba(0, 0, 0, 0.12)',
}));

function Faq() {
  return (
    <div className="container mt-5 pt-lg-4 mb-5 pb-lg-4">
      <StyledAccordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What types of jewelry do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At Shashi Jewelers, we offer a wide range of jewelry including gold, diamond, silver, and platinum pieces. Our collection includes rings, necklaces, bracelets, earrings, and custom designs.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Do you provide custom jewelry design services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we specialize in custom jewelry design. Our expert craftsmen can help you create a unique piece that matches your vision and style. Visit our store to discuss your ideas and get started.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>What is your return and exchange policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a 30-day return and exchange policy on all our jewelry. The item must be in its original condition and accompanied by the receipt. Custom-made items are non-returnable.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>Do you offer jewelry repair services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer comprehensive jewelry repair services including resizing, cleaning, polishing, and stone replacement. Our skilled jewelers will ensure your pieces are restored to their original beauty.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>How can I determine my ring size?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can visit our store to get your ring size measured accurately. Alternatively, you can use our online ring size guide available on our website, which provides detailed instructions on how to measure your ring size at home.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          <Typography>Do you offer financing options?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer various financing options to make your purchase more affordable. Please speak to one of our sales representatives in-store for more information on the available plans and how to apply.
          </Typography>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
}

export default Faq;
