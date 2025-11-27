import React, { PropsWithChildren } from "react";

export interface PanelProps {
  title: string;
  subtitle?: string;
}

export default function Panel({
  title,
  subtitle,
  children,
}: PropsWithChildren<PanelProps>) {
  return (
    <div className="panel">
      <h3 className="panel-title">{title}</h3>
      {subtitle && <p className="panel-subtitle">{subtitle}</p>}
      <div className="panel-body">{children}</div>
    </div>
  );
}
