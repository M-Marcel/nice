// src/templates/templateMap.ts
import { Portfolio } from "../dataTypes";
import Creative from "./Creative";
import Minimalist from "./Minmalist";
import Professional from "./Professional";



const templateMap: { [key: string]: React.ComponentType<{ templateId: string; templateData: Portfolio }> } = {
  
    "67ea5945202df9e57c4968a7":Professional,
    "67ea593b202df9e57c49689c":Creative,
    "67ea592e202df9e57c496891": Minimalist, // Minimalist template ID

};


export default templateMap;