import { current } from "@reduxjs/toolkit";

export type WaitUser = {
    fullName: string
    email: string
}
export type User = {
    _id: string;
    email: string;
    createdAt: string;
    emailConfirmToken: string | null;
    emailConfirmTokenExpiry: string | null;
    emailConfirmed: boolean;
    gender: string;
    firstName: string;
    freemium: boolean;
    lastName: string;
    premium: boolean;
    role: string;
    otp: string | null;
    otpExpiry: string | null;
    userUseForZroleak: string[];
    freemiumExpiresAt: Date,
    userCompanySize: string,
    userTechnicalExperience: string,
    userWorkRole: string
    token?: string;
}

export type WaitListFormData = {
    fullName: string
    email: string
}

export type SignUpFormData = {
    firstName: string
    lastName: string
    email: string
}
export type LoginFormData = {
    email: string
    password: string
}

export type ForgotFormData = {
    email: string
}

export type ValidateFormData = {
    email: string
    otp: string
}
export type ResetPasswordFormData = {
    email: string
    newPassword: string
}

export type CompleteSignUpFormData = {
    email: string;
    gender: string;
    password: string | undefined;
    userWorkRole: string;
    userCompanySize: string;
    userUseForZroleak: string[];
    userTechnicalExperience: string
}

export type UpdateProfileFormData = {
    firstName: string
    lastName: string,
    userTechnicalExperience: string,
    userWorkRole: string
}
export type UpdatePasswordFormData = {
    currentPassword: string
    newPassword: string,
}
export type Feature = {
    _id: string;
    title: string;
    tag: string;
    description: string;
    createdBy: {
        _id: string;
        email: string;
        firstName: string;
        lastName: string;
    };
    likeCount: number;
    likedUsers: string[];
    likes?: string[];
    voteCount?: number;
    status: string;
    createdAt: string;
    __v: number;
};


export type FeatureFormData = {
    title: string
    tag: string
    description: string
}

export type CreateAdminFormData = {
    email: string
}

export type SocialLinks = {
    x?: string;
    linkedIn?: string;
    facebook?: string;
}

export type DesignData = {
    profileImage?: string;
    coverImg?: string;
    name?: string;
    email?: string;
    about?: string;
    location?: string;
    socialLinks?: SocialLinks[];
    skills?: string[];
    projects?: Array<{
        projectName: string;
        myRole: string;
        about: string;
        url: string;
    }>;
    work?: Array<{
        role: string;
        company: string;
        startDate: string;
        endDate: string;
        isRoleActive: boolean;
        description: string;
    }>;
    education?: Array<{
        degree: string;
        school: string;
        startYear: string;
        endYear: string;
        isStudent: boolean;
    }>;
    certificates?: Array<{
        name: string;
        issuedBy: string;
        yearIssued: string;
    }>;
}

export type TemplateSection = {
    _id: string
    type: string
    templateId:string
    sectionId:string
    designData: DesignData;
    createdAt: string;
    lastUpdated: string;
    __v: number;
}

export type Template = {
    _id: string
    name: string
    type: string
    sections: TemplateSection[]
    createdBy: string;
    createdAt: string;
    lastUpdated: string;
    __v: number;
}

export type Portfolio = {
    _id: string
    userId: string
    referenceTemplate: string
    sections: PortfolioSection[]
    createdAt: string
    lastUpdated: string
    __v: number
}

export type PortfolioSection = {
    _id: string
    type: string
    portfolioId:string
    sectionId:string
    customContent: DesignData;
    createdAt: string;
    lastUpdated: string;
    __v: number;
}

export type PortfolioFormData = {
    referenceTemplate: string
}