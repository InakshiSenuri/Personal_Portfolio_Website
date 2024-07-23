"use server";

import React from "react";
import { Resend } from "resend";
import Email from "@/email/email";
import { Emails } from "resend/build/src/emails/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown , maxlength?: number) => {
    if (!value || typeof value !== "string" || (maxlength && value.length > maxlength)) {
        return false;
      }

    return true;
}

export const handleSubmit = async (formData: FormData) => {
    const message = formData.get("description");
    const senderName = formData.get("name");
    const senderEmail = formData.get("email");

    console.log(senderEmail);

    if(!validateString(message, 1000)) {
        return{
            error: "Invalid message",
        };
    }

    if(!validateString(senderName, 50)) {
        return{
            error: "Please enter your name",
        };
    }

    if(!validateString(senderEmail,100)) {
        return{
            error: "Please enter your email",
        };
    }

try{
    await resend.emails.send({
        from: `Portfolio Message - ${senderName} <onboarding@resend.dev>`,  
        to: "inakshisenuri@gmail.com",
        subject: `Message from ${senderName} via Contact Form`,
        reply_to: senderEmail as string,
        react: React.createElement(Email, {message : message as string, name: senderName as string}),
      });

} catch (error: unknown) {
    if(error instanceof Error) {
        return{
            error: error.message,
        }
    } else if (typeof error === "object" && error !== null && "message" in error) {
        return{
            error: error.message,
        }
    }else{
        return{
            error: "Something went wrong",
        }
    }
}
    
};


