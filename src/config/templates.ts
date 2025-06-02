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
    Professional:"50003",
    Creative: "50002",
    Minimalist: "50001"
  },
  staging: {
    Professional:"50003",
    Creative: "50002",
    Minimalist: "50001"
  },
  production: {
    Professional: "50003",
    Creative: "50002",
    Minimalist: "50001"
  }
};


export const getTemplateIds = () => {
  const env = process.env.REACT_APP_ENV || 'development';
  return templateConfig[env as keyof EnvironmentConfig];
};
