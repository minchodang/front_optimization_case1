import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

function BasicTemplates(props: { children: React.ReactNode }) {
    return (
        <div className="BasicTemplates">
            <section className={'HeaderSection'}>
                <Header />
            </section>
            <section className={'Body'}>{props.children}</section>
            <section className={'FooterSection'}>
                <Footer />
            </section>
        </div>
    );
}

export default BasicTemplates;
