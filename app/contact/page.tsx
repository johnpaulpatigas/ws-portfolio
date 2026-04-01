import {
  ContactForm,
  ContactSocials,
} from "@/components/features/contact/contact-sections";

export default function Contact() {
  return (
    <div className="space-y-16 py-8">
      <ContactForm />
      <ContactSocials />
    </div>
  );
}
