// src/templates/templateMap.ts
import { Portfolio } from "../dataTypes";
import Minimalist from "./Minmalist";
import Professional from "./Professional";
import TestTemplate from "./TestTemplate";


const templateMap: { [key: string]: React.ComponentType<{ templateId: string; templateData: Portfolio }> } = {
    "67bf199038980fcd5b88065a": TestTemplate, // Test template ID
    "67c027c65821c807b85b42ae": Professional, // Professional template ID
    "67c03f3f5821c807b85b43bb": Minimalist, // Minimalist template ID
};


export default templateMap;