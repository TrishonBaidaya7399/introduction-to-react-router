const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>
               {` We'd love to hear from you! If you have any questions, feedback, or
                inquiries, please don't hesitate to get in touch with us.`}
            </p>
            <p>
                You can reach us through the following contact methods:
            </p>
            <ul style={{listStyle:'none'}}>
                <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
                <li>Phone: <a href="tel:+123456789">+1 (123) 456-789</a></li>
                <li>Social Media: Follow us on <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            <p>
                We aim to respond to your inquiries as soon as possible. Thank you for
                reaching out to us!
            </p>
        </div>
    );
};

export default Contact;
