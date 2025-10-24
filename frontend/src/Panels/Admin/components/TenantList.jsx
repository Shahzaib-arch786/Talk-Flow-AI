import React from "react";
import TenantCard from "./TenantCard";

const TenantList = ({ tenants, selectedTenant, onSelectTenant }) => {
  return (
    <div className="bg-gray-900 rounded-xl p-4 shadow-md overflow-auto max-h-[600px]">
      {tenants.map((tenant) => (
        <TenantCard
          key={tenant.id}
          tenant={tenant}
          isSelected={selectedTenant.id === tenant.id}
          onClick={() => onSelectTenant(tenant)}
        />
      ))}
    </div>
  );
};

export default TenantList;
