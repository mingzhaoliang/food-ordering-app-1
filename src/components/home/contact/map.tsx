export default function Map() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1133.4264717986289!2d144.96226698329113!3d-37.810357727748425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cb1fb82ba1%3A0xd009c8b5a5a8f8d0!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1713347929347!5m2!1sen!2sau"
            // width="600"
            // height="450"
            // style={{ border: 0 }}
            className="w-full h-full min-h-72 md:min-h-96 border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    )
}