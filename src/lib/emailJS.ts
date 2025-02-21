import emailjs from "@emailjs/browser";
import { FormEvent, RefObject } from "react";
import { toast } from 'react-toastify';


export function sendEmail(e: FormEvent<HTMLFormElement>, formRef: RefObject<HTMLFormElement | null>) {

    e.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_6q5yvq6";
  const publicKey = "eKcV2o9NIW5mpa-L0";

  if (!formRef.current) return;

  emailjs
    .sendForm(serviceID, templateID, formRef.current, publicKey)
    .then(() => {
      toast.success("¡Correo enviado con éxito!");
      formRef.current?.reset();
    })
    .catch(() => {
      toast.error("Error al enviar el correo, intentelo mas tarde.");
    });
}
