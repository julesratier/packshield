
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-packshield-navy text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Have questions or need assistance? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-packshield-navy mb-6">Get in Touch</h2>
              <p className="text-packshield-grey mb-8">
                We're happy to answer any questions you may have about our products, shipping, or storage advice. 
                Feel free to reach out through any of the following channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-packshield-lightGrey flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-packshield-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-packshield-navy mb-1">Our Location</h3>
                    <p className="text-packshield-grey">
                      123 Storage Lane<br />
                      Suite 456<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-packshield-lightGrey flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-packshield-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-packshield-navy mb-1">Phone</h3>
                    <p className="text-packshield-grey">
                      <a href="tel:+14155559876" className="hover:text-packshield-orange transition-colors">
                        (415) 555-9876
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-packshield-lightGrey flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-packshield-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-packshield-navy mb-1">Email</h3>
                    <p className="text-packshield-grey">
                      <a href="mailto:info@packshield.com" className="hover:text-packshield-orange transition-colors">
                        info@packshield.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-packshield-lightGrey flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-packshield-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-packshield-navy mb-1">Business Hours</h3>
                    <p className="text-packshield-grey">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-packshield-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-packshield-orange hover:bg-packshield-orange/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555687322!2d-122.50764150453992!3d37.75781499068489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620930600198!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Packshield Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-packshield-lightGrey">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-packshield-navy text-center mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-packshield-navy mb-2">How can I track my Amazon order?</h3>
                <p className="text-packshield-grey">
                  Since our products are fulfilled through Amazon, you can track your order directly through your Amazon account. Simply log in to your Amazon account and view your orders to track the shipping status.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-packshield-navy mb-2">What if I receive a damaged product?</h3>
                <p className="text-packshield-grey">
                  We stand behind the quality of our products. If you receive a damaged item, please contact us immediately with photos, and we'll coordinate with Amazon to ensure you receive a replacement or refund.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-packshield-navy mb-2">Do you ship internationally?</h3>
                <p className="text-packshield-grey">
                  Our products are available for international shipping through Amazon's global shipping program. Availability and shipping costs vary by country, so please check the Amazon listing for your specific location.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-packshield-navy mb-2">How do I care for my Packshield products?</h3>
                <p className="text-packshield-grey">
                  Our products are designed for durability and reuse. To clean, simply wipe with a damp cloth and mild soap if necessary. Allow to dry completely before storing or using again. Avoid using harsh chemicals that could damage the material.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
