import React from "react";

interface IPropertyControlledComponent {
  controllerProperty: boolean;
  children: any;
  fallback?: any;
}

const PropertyControlledComponent = (props: IPropertyControlledComponent) => {
  const { controllerProperty, children, fallback = <></> } = props;
  if (!controllerProperty) return fallback;
  return children;
};

export default React.memo(PropertyControlledComponent);
