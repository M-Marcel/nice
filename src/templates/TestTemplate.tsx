import { Template } from "../dataTypes";

interface TestTemplateProps {
    templateId: string;
    templateData: Template; // Replace `any` with a more specific type if possible
}

const TestTemplate: React.FC<TestTemplateProps> = ({ templateId, templateData }) => {
    console.log("Template Id in TestTemplate:", templateId);
    console.log("Template Data in TestTemplate:", templateData);
console.log("Template Sections:", templateData.sections);
    return (
        <div className="mt-2">
            {templateData ? (
                <>
                    <h1 className="text-4xl font-bold text-purple-800">{templateData.name}</h1>
                    {templateData.sections.map((section) => (
                        <div key={section._id} className="mt-4">
                            <h2 className="text-2xl font-semibold">{section.type}</h2>
                            {/* Render section content */}
                        </div>
                    ))}
                </>
            ) : (
                <p className="text-gray-400">Template not found.</p>
            )}
        </div>
    );
};

export default TestTemplate;