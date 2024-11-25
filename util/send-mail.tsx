import { FormData } from '@/components/ContactSection';

export async function sendEmail(data: FormData): Promise<boolean> {
    const apiEndpoint = '/api/contact/sendMail';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to send email: ${response.statusText}`);
        }

        const responseData = await response.json();

        return responseData.result;
        
    } catch (err:unknown) {
        console.error(err);
        //alert(`Error: ${(err as Error).message || 'Failed to send email'}`);
        return false;
    }
}
