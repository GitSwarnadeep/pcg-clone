function ContactMap() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56110.9423160925!2d77.47234730647922!3d28.481537385692285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea62fc0f32d9%3A0x88bda3f6d41adedc!2sBlock%20F%2C%20Beta%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201308!5e0!3m2!1sen!2sin!4v1732105627803!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default ContactMap;
