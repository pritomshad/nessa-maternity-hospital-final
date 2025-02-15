import './styles.css'

const Location = () => {
    return (
        <div className="iframe-container">
            <iframe
                title="GoogleMaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7245.6173177582405!2d92.015937542512!3d24.767748761959467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751b1a3bc8ef839%3A0x2dcbfb2960c82d81!2sMaiz%20Bhag!5e0!3m2!1sen!2sbd!4v1726482146026!5m2!1sen!2sbd"
                allowFullScreen = ""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}

export default Location;