import React from "react";

const SectionWrapper = (
  Component: React.ComponentType,
  id: string,
): React.FC => {
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
