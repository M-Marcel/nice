import { createContext, useContext, useState, ReactNode } from "react";

type DashboardType = "admin" | "superadmin" | "user";
// Define the types for the context value
type DashboardContextType = {
  dashboardType:  DashboardType
  setDashboardType: (type: DashboardType) => void;
};

// Create the context with default values
const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

// Create a provider component
export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardType, setDashboardType] = useState<DashboardType>("admin");

  return (
    <DashboardContext.Provider value={{ dashboardType, setDashboardType }}>
      {children}
    </DashboardContext.Provider>
  );
};

// Custom hook to access the context
export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};
