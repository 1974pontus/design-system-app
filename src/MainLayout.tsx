import React from "react";
import { Row, Col } from "antd";
import Header from "./Header";
import StartPage from "./StartPage";
import AddingProducts from "./AddingProducts";
import { Layout } from 'antd';
import Footer from './Footer';



function MainLayout() {
  return (
    <div className="App">
      <Layout>
          <Header />
          <StartPage />
          <Footer />
        </Layout>
        
    </div>

  );
}

export default MainLayout;
