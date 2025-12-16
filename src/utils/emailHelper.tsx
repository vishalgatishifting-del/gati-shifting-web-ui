import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_u9m30x2';
const TEMPLATE_ID = 'template_17q8vva';
const PUBLIC_KEY = 'eeX-Q_EutbxH4dyNF';

emailjs.init(PUBLIC_KEY);

export const sendEmail = (templateParams: {
  name: string;
  email: string;
  phone: string;
  pickup_location: string;
  drop_location: string;
  service_detail: string;
  good_type: string;
  userSource: string;
}) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(() => {
      
    })
    .catch(() => {  
      
    });
};
