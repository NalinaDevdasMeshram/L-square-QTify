  import { Box } from "@mui/material";
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
    <Box>
    <h1 style={{textAlign:'center'}}>FAQs</h1>
    </Box>
    
 );

 }
 export default FAQs;