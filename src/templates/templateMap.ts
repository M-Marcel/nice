// src/templates/templateMap.ts
import { Portfolio } from "../dataTypes";
import Creative from "./Creative";
import Minimalist from "./Minmalist";
import Professional from "./Professional";
import TestTemplate from "./TestTemplate";


const templateMap: { [key: string]: React.ComponentType<{ templateId: string; templateData: Portfolio }> } = {
    "67bf199038980fcd5b88065a": TestTemplate, // Test template ID
    "67e3bb354309a5934d047221":Professional,
    "67e3bb244309a5934d047216":Creative,
    "67e3bb414309a5934d04722c": Minimalist, // Minimalist template ID

};


export default templateMap;