import nodemailer from 'nodemailer';

export const smtpTransport = async (
    emailContent: { emailSubject: string, emailHtml: string },
    successResponse: any,
    errorResponse: any
) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: process.env.NM_GMAIL_FROM,
            pass: process.env.NM_GMAIL_APP_PASSWORD
        }
    })

    try {
        await transporter.sendMail({
            from: process.env.NM_GMAIL_FROM,
            to: process.env.NM_GMAIL,
            subject: emailContent.emailSubject,
            html: emailContent.emailHtml
        })

        return successResponse;

    } catch (err) {
        console.log(err)

        return errorResponse
    }
}