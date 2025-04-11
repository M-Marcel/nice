// src/config/templates.ts
interface TemplateConfig {
    Professional: string;
    Creative: string;
    Minimalist: string;
  }
  
  interface EnvironmentConfig {
    development: TemplateConfig;
    staging: TemplateConfig;
    production: TemplateConfig;
  }
  
  const templateConfig: EnvironmentConfig = {
    development: {
      Professional: "67ea5945202df9e57c4968a7",
      Creative: "67ea593b202df9e57c49689c",
      Minimalist: "67ea592e202df9e57c496891"
    },
    staging: {
        Professional: "67ea5945202df9e57c4968a7",
        Creative: "67ea593b202df9e57c49689c",
        Minimalist: "67ea592e202df9e57c496891"
    },
    production: {
      Professional: "67f50b0862dab0aaa268c2e2",
      Creative: "67f50af162dab0aaa268c2d7",
      Minimalist: "67f50ae762dab0aaa268c2cc"
    }
  };
  
  export const getTemplateIds = () => {
    const env = process.env.REACT_APP_ENV || 'development';
    return templateConfig[env as keyof EnvironmentConfig];
  };