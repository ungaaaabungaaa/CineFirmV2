import dynamic from 'next/dynamic';
import '../terms/terms.css';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,  // Ensure it renders only on the client
});

export const metadata = {
    title: "Terms & Condition",
    description: "Terms & Condition for CineFirm",
  };



export default function TermsPage() {
    return (
        <div className="terms_layout">
            <h1>Terms & Conditions</h1>
            <br></br>
            <p>Welcome to Cinefirm, a Photography and Videography company. By using our website, you agree to the following terms and conditions. <br></br> Please read them carefully before using our services.</p>
            <div className="spline_container">
                <Spline
                    scene="https://prod.spline.design/CBQ2YzWI1b1lQswu/scene.splinecode" 
                />
            </div>
            
            <h2>1. Acceptance of Terms</h2>
            <br></br>
            <p>By accessing and using <strong>Cinefirm's</strong> website, you accept and agree to be bound by these terms and conditions. <br></br> If you do not agree to these terms, you should not use our website or services.</p>
            <br></br>
            <h2>2. Services</h2>
            <br></br>
            <p><strong>Cinefirm</strong> offers professional photography and videography services. <br></br> The availability and scope of these services may vary based on location, event type, and customer requirements. <br></br> We reserve the right to modify or discontinue any service at any time without notice.</p>
            <br></br>
            <h2>3. Booking and Payments</h2>
            <br></br>
            <p>All bookings for photography and videography services must be made in advance. Payment terms will be outlined in the contract signed between <strong>Cinefirm</strong> and the client. <br></br>Failure to adhere to the payment terms may result in cancellation or delay of the services.</p>
            <br></br>
            <h2>4. Cancellation and Refunds</h2>
            <br></br>
            <p>If you need to cancel or reschedule a booking, please notify us as soon as possible. <br></br> Refunds for cancellations will be subject to the terms stated in your contract. <br></br> In some cases, a non-refundable deposit may be required to confirm a booking.</p>
            <br></br>
            <h2>5. Intellectual Property</h2>
            <br></br>
            <p>All photos, videos, and other content created by <strong>Cinefirm</strong> remain the intellectual property of the company, unless otherwise agreed upon in writing. <br></br> You may not use, distribute, or reproduce any of our work without explicit permission.</p>
            <br></br>
            <h2>6. Liability</h2>
            <br></br>
            <p><strong>Cinefirm</strong> will not be held liable for any loss, damage, or delay that arises from unforeseen circumstances, <br></br> including but not limited to equipment failure, weather conditions, or accidents. <br></br> In such cases, we will make reasonable efforts to fulfill the contract to the best of our abilities.</p>
            <br></br>
            <h2>7. Privacy Policy</h2>
            <br></br>
            <p>Your personal information collected during the booking process will be used solely for the purpose of providing our services. <br></br>  We will not share your personal data with third parties without your consent, except as required by law.</p>
            <br></br>
            <h2>8. Changes to Terms and Conditions</h2>
            <br></br>
            <p><strong>Cinefirm</strong> reserves the right to modify these terms and conditions at any time. <br></br> Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes will constitute acceptance of the new terms.</p>
            <br></br>
            <h2>9. Contact Us</h2>
            <br></br>
            <p>If you have any questions or concerns regarding these terms, please contact us at</p>
            <br></br>
            <ul>
                <li><strong>Email:</strong><a href="mailto:info@cinefirm.com">Contact@cinefirm.com</a></li>
                <li><strong>Phone:</strong> +91-98858 59637</li>
            </ul>
            <div className="spline_container">
                <Spline
                    scene="https://prod.spline.design/DXzBIwhNFfxqDEEV/scene.splinecode"  
                />
            </div>
            <br></br>
            <p>Thank you for choosing <strong>Cinefirm</strong> for your photography and videography needs.</p>
        </div>
    );
}
