// src/templates/templateMap.ts
import { Template } from "../dataTypes";
import TestTemplate from "./TestTemplate";


const templateMap: { [key: string]: React.ComponentType<{ templateId: string; templateData: Template }> } = {
    "67bf199038980fcd5b88065a": TestTemplate, // Minimalist template ID
};


export default templateMap;