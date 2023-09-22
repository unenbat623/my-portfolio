import React from "react";
import Layout from "@/Layout";
import { images } from "@/next.config";

const Contact = () => {
  return (
    <Layout name="contact">
      <section className="w-full h-full flex py-32 relative">
        <div>Холбоо барих</div>
        <div>
          <img src="unenbat.png" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
