// import React from 'react';
// import { Typography } from 'antd';

// const { Title } = Typography;

// const Contact = () => {
//   return (
//     <div>
//       <Title level={3}>Contact Us</Title>
//       <p>You can reach us via email or call our customer service(+97256871231).</p>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import { Typography } from 'antd';
import { Phone } from 'lucide-react';

const { Title } = Typography;

const Contact = () => {
  return (
    <div>
      <Title level={3}>Contact Us</Title>
      <div>
        <Phone style={{ marginRight: 8 }} /> 
        <p>You can reach us via email or call our customer service (+97256871231).</p>
      </div>
    </div>
  );
};

export default Contact;
