// PreviewModal.tsx
import { Portfolio } from "../dataTypes";
import templateMap from "../templates/templateMap";


type PreviewModalProps = {
    onClose: () => void;
    portfolioData: Portfolio | null;
};

const PreviewModal =({ onClose, portfolioData }: PreviewModalProps) => {
    const TemplateComponent = portfolioData?.referenceTemplate ? templateMap[portfolioData.referenceTemplate] : null;

    return (
            <div className="w-full h-full overflow-y-auto">
                {portfolioData ? (
                    <div className="mt-2">
                        {TemplateComponent && portfolioData ? (
                            <TemplateComponent
                                key={portfolioData._id}
                                templateId={portfolioData.referenceTemplate}
                                templateData={portfolioData}
                            />
                        ) : (
                            <p className="text-gray-400">Template component not found.</p>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-400">Portfolio not found.</p>
                )}
            </div>

    );
};

export default PreviewModal;