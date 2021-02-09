import React from 'react';
import { BarContext } from '../Context/BarConext';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
const AccordionSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  

function FAQ(){
    
    const {show, setShow} = React.useContext(BarContext)
    React.useEffect(() =>{
        if(show){
            setShow(false)
        }
    })

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    }

    return(
        <>
       <div>
           <h2 style = {{marginTop : "5%", color: "brown", fontSize: "30px", textAlign: "center"}}>Frequently Asked Questions</h2>
       <div style = {{marginTop: "2%"}}>
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> <h3>Q: How did you choose shoes?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <p>Ans: Just pick Color and click on Size of your choice, Add item in cart or you can directly checkout.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h3>Q: How many Shoes brand are there ?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Ans: Almost every brand are there like Addidas, Puma, Nike..</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h3>Q: Are larger sizes available ?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Ans: At the moment, we are only catering to men and women feet.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h3>Q: Are Shoes waterproof ?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Ans: We have some of them.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography><h3>Q: Without login can I order ?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Ans: No, you should to be login first.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography><h3>Q: How do I exchange an Item ?</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Ans: Right now we don't have that facility, but in future it will.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
       </div>
        </>
    )
}

export {FAQ}