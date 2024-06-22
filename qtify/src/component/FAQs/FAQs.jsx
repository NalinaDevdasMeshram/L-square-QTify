  import { Accordion, AccordionDetails, AccordionSummary,  Typography } from "@mui/material";
  import Box from '@mui/material/Box';
  import styles from './FAQs.module.css';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//    import { StyleSharp } from '@mui/icons-material';
  const faqList =[
    {
        summary: 'Is Qtify free to use ?',
        details :'Yes, It is free to use !'
    },
    {
        summary:'Can I Downlaod and listen to songs offline ?',
         details:'Sorry, unfortunately we don\'t provide the service to download any songs. '
    }
  ]
  const FAQs =()=>{
 return(
    <Box className={styles.faqAccordion} sx={{ py: 10 }}>
    <h1 style={{textAlign:'center'}}>FAQs</h1>
   
    {
        faqList.map(({summary, details},index)=>{
            return(
                <div className={styles.accordionWrapper} key={index}>
                <Accordion>
                 <AccordionSummary className={styles.accordionSummary}
                 expandIcon={<ExpandMoreIcon className={styles.expandIcon}/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                 >
                 <Typography>{summary}</Typography>
                 </AccordionSummary>
                 <AccordionDetails className={styles.AccordionDetails}>
                 <Typography>{details}</Typography>
                 </AccordionDetails>
                </Accordion>
                </div>
            )
        })
    }
    
</Box>
    
 );

 }
 export default FAQs;