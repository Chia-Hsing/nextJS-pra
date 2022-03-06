import Head from 'next/head'
import { Fragment } from 'react'
import ContactForm from '../components/contact/ContactForm'

function ContactPage() {
    return (
        <Fragment>
            <Head>
                <title>Blog</title>
                <meta name="description" content="blog" />
            </Head>
            <ContactForm />
        </Fragment>
    )
}

export default ContactPage
