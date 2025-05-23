// src/templates/templateMap.ts
import { getTemplateIds } from "../config/templates";
import { Portfolio } from "../dataTypes";
import Creative from "./Creative";
import Minimalist from "./Minmalist";
import Professional from "./Professional";


const templateIds = getTemplateIds();
console.log('templates id', templateIds)
const templateMap: { [key: string]: React.ComponentType<{ templateId: string; templateData: Portfolio }> } = {
  
    [templateIds.Professional]:Professional,
    [templateIds.Creative]:Creative,
    [templateIds.Minimalist]: Minimalist, // Minimalist template ID

};


export default templateMap;