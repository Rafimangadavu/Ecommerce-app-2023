import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About Us'}>
        <div className="row contactus">
            <div className="col-md-6">
                <img src="/images/about.jpeg" alt="about" style={{ width: "100%"}} />
            </div>
                <div className="col-md-4">
                <h2 className="bg-dark p-2 text-white text-center">About Us</h2>
                    <p className="text-justify mt-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fugit aliquam sunt hic inventore! Tempore tenetur mollitia, eos fuga quam obcaecati repudiandae animi blanditiis odio, non nulla asperiores inventore consequatur.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui fugit aliquam sunt hic inventore! Tempore tenetur mollitia, eos fuga quam obcaecati repudiandae animi blanditiis odio, non nulla asperiores inventore consequatur.
                    </p>
                </div>
        </div>
    </Layout>
  )
}

Layout.defaultProps = {
    title: 'Ecommerce app - shop now',
    description: 'mern stack project',
    keywords: 'mern, react, node, mongodb',
    author: 'Tech-Orbit-yt'
}

export default About