import EmailFormSection from "../layout/ctas/newsletter_minimal";

const ExampleComponent: React.FC = () => {
  const handleSubmit = (email: string) => {
    console.log(`Submitted email: ${email}`);
  };

  return (
    <EmailFormSection
      title="Join us and get the update from anywhere"
      buttonText="Get Started"
      placeholder="Email Address"
      expirationText="Attention! Offer expires in 30 days. Make sure not to miss this opportunity"
      onSubmit={handleSubmit}
    />
  );
};

export default ExampleComponent;
