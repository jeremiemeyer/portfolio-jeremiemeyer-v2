import { sendMail } from "../../../components/pages/contact/sendMail"

export const POST = async (req, res) => {
    const data = await req.json()
    
    try {
        await sendMail(
            data.senderName,
            data.email,
            data.subject,
            data.message
        );
        return new Response("Email sent.", { status: 200 })

    } catch(error) {
        return new Response("Failed to send mail.", { status: 500 })
    }
}
