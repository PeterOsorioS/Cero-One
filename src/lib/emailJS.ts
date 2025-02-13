import emailjs from "@emailjs/browser";

export function sendEmail(e: React.FormEvent<HTMLFormElement>, formRef: React.RefObject<HTMLFormElement | null>) {
    e.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_6q5yvq6";
  const publicKey = "eKcV2o9NIW5mpa-L0";

  if (!formRef.current) return;

  emailjs
    .sendForm(serviceID, templateID, formRef.current, publicKey)
    .then(() => {
      alert("¡Correo enviado con éxito!");
      formRef.current?.reset();
    })
    .catch((err) => {
      alert("Error al enviar el correo: " + JSON.stringify(err));
    });
}
