import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={'Privacy Policy '}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: '100%' }}
          />
        </div>
        <div className="col-md-4">
        <h2 className="bg-dark p-2 text-white text-center">Privacy Policy</h2>
          <p>
            If your website or app has the option to receive payments then
            including a Privacy Policy is required by law.
          </p>
          <p>
            If you want to host your customized Privacy Policy on your site, you
            can just download the Privacy Policy and give them the use you want.
            We will create your customized Privacy Policy in a variety of
            formats: PDF, DOCX, TXT & HTML files..
          </p>
          <p>
            If your website or app has the option to receive payments then
            including a Privacy Policy is required by law.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
