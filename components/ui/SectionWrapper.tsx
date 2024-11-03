import React from "react";
interface SectionWrapperProps {
  Component: React.ComponentType;
  id: string;
}

const SectionWrapper = ({ Component, id }: SectionWrapperProps): React.FC => {
  const WrappedComponent: React.FC = () => (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <Component />
    </section>
  );

  WrappedComponent.displayName = `SectionWrapper(${Component.displayName || Component.name || "Component"})`;

  return WrappedComponent;
};

export default SectionWrapper;
